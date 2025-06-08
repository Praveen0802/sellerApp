import LoginPage from "@/components/loginPage";
import { getDialingCode } from "@/utils/apiHandler/request";
import { checkValidAuthToken, nextRedirect } from "@/utils/helperFunctions";
import React from "react";

const Login = (props) => {
  return <LoginPage {...props} />;
};

export default Login;

export const getServerSideProps = async (context) => {
  const validToken = checkValidAuthToken(context);
  if (validToken) {
    return nextRedirect("dashboard");
  }
  // const fetchedCountryCodes = await getDialingCode();
  return {
    props: {  },
  };
};
