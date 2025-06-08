import { parseCookie } from "@/utils/helperFunctions/cookie";
import axios from "axios";

export default async function handler(req, res) {
  const { payload } = req?.body;
  const method = req?.method;
  const { headers } = req;
  const apiName = req?.url.replace("/api/post/", "");
  const parsedCookie = headers?.cookie ? parseCookie(headers?.cookie) : {};
  const authToken = decodeURIComponent(parsedCookie?.auth_token);
  const ROOT_URL = process.env.API_BASE_URL;
  const url = `${ROOT_URL}/${apiName}`.replace(/'/g, "");
  try {
    const response = await axios({
      url: url,
      method,
      data: typeof payload === "string" ? JSON.parse(payload) : payload,
      ...(authToken && {
        headers: {
          Authorization: `Bearer ${authToken}`,
          domainkey: process.env.DOMAIN_KEY,
        },
      }),
    });

    return res.status(200).json(response?.data);
  } catch (err) {
    console.error("API Error:", {
      message: err.message,
      code: err.code,
      url: url,
      statusCode: err.response?.status,
      responseData: err.response?.data,
    });

    const statusCode = err?.response?.status || 500;
    const responseData = err?.response?.data || {
      message: err.message || "Internal Server Error",
    };
    res.status(statusCode).json(responseData);
  }
}
