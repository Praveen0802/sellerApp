import {
  currentTimeEpochTimeInMilliseconds,
  isEmptyObject,
} from "@/utils/helperFunctions";
import { setCookie } from "@/utils/helperFunctions/cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../commonComponents/button";
import FloatingLabelInput from "../floatinginputFields";
import FloatingSelect from "../floatinginputFields/floatingSelect";
import {
  fetchCountrieList,
  getDialingCode,
  RegisterUser,
  ResendVerificationRequest,
} from "@/utils/apiHandler/request";

const SignupForm = ({ fetchedCountryCodes }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile_number: "",
    phone_code: "44",
  });
  const [emailVerficationSent, setEmailVerificationSent] = useState(false);
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile_number: "",
    phone_code: "",
  });

  const [errorText, setErrorText] = useState("");

  const [loader, setLoader] = useState(false);
  const [resendVerificationLinkSent, setResetRequestSent] = useState(false);
  const router = useRouter();

  const handleChange = (e, key, type) => {
    const name = key;
    const value = type === "select" ? e : e.target?.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorText("");
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      mobile_number: "",
      phone_code: "",
    };

    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
      valid = false;
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData?.password?.length < 8) {
      newErrors.password = "The password must be at least 8 characters";
      valid = false;
    }

    if (!formData.confirm_password.trim()) {
      newErrors.confirm_password = "Please confirm your password";
      valid = false;
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
      valid = false;
    }

    // Optional fields don't need validation
    // if phone_code is provided, mobile_number is required and vice versa
    if (formData.phone_code && !formData.mobile_number) {
      newErrors.mobile_number = "Mobile number is required with country code";
      valid = false;
    }

    if (formData.mobile_number && !formData.phone_code) {
      newErrors.phone_code = "Country code is required with mobile number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoader(true);

      try {
        // Remove confirm_password before sending to API
        const { confirm_password, ...dataToSend } = formData;

        const response = await RegisterUser(null, dataToSend);
        if (response?.id) {
          setLoader(false);
          setEmailVerificationSent(true);
        } else {
          setErrors({
            ...errors,
            email: response?.errors?.email[0],
          });
          setErrorText(
            response?.errors?.email[0] || "Email might be already taken"
          );
          setLoader(false);
        }
      } catch (error) {
        setErrors({
          ...errors,
          email: "Registration failed. This email may already be in use.",
        });
        setLoader(false);
      }
    } else {
      console.log("Form validation failed");
    }
  };

  const handleResendClick = async () => {
    const body = { email: formData?.email };
    const response = await ResendVerificationRequest("", body);
    setResetRequestSent(true);
  };

  const countryCodes = fetchedCountryCodes.map((item) => {
    return {
      value: `${item?.phone_code}`,
      label: `${item?.country_short_name} ${item?.country_code}`,
    };
  });

  return (
    <>
      <div className="text-center flex flex-col gap-2 md:gap-3">
        <p className="text-[#323A70] text-xl md:text-2xl font-semibold">
          Sign Up
        </p>
        <p className="text-[#7D82A4] text-sm font-normal">
          Join our network of trusted ticket sellers and buyers from around the
          world
        </p>
      </div>
      {emailVerficationSent ? (
        <div className="flex flex-col gap-4 items-center w-full max-w-xs mx-auto">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-green-700 font-medium">
              Email Verification link sent!
            </p>
            <p className="text-green-600 text-sm mt-1">
              New User has been created successfully. We have e-mailed your
              email verify link!
            </p>
          </div>
          {resendVerificationLinkSent ? (
            <p className="text-center text-sm text-green-500">
              Verification Link sent
            </p>
          ) : (
            <p
              className="text-sm cursor-pointer hover:underline text-center text-[#130061] font-medium"
              onClick={handleResendClick}
            >
              Resend Verification Email
            </p>
          )}
        </div>
      ) : (
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <FloatingLabelInput
                    id="first_name"
                    name="first_name"
                    keyValue={"first_name"}
                    type="text"
                    label="First Name"
                    value={formData?.first_name}
                    onChange={handleChange}
                    error={errors.first_name}
                    className={
                      "!py-[10px] !px-[12px] !text-[#323A70] !text-[14px]"
                    }
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="flex-1">
                  <FloatingLabelInput
                    id="last_name"
                    name="last_name"
                    keyValue={"last_name"}
                    type="text"
                    label="Last Name"
                    value={formData?.last_name}
                    onChange={handleChange}
                    error={errors.last_name}
                    className={
                      "!py-[10px] !px-[12px] !text-[#323A70] !text-[14px]"
                    }
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              <div>
                <FloatingLabelInput
                  id="email"
                  name="email"
                  keyValue={"email"}
                  type="email"
                  label="Email Address"
                  value={formData?.email}
                  onChange={handleChange}
                  error={errors.email}
                  className={
                    "!py-[10px] !px-[12px] !text-[#323A70] !text-[14px]"
                  }
                  autoComplete="off"
                  required
                />
              </div>

              <div>
                <FloatingLabelInput
                  id="password"
                  name="password"
                  type="password"
                  keyValue={"password"}
                  className={
                    "!py-[10px] !px-[12px] !text-[#323A70] !text-[14px]"
                  }
                  label="Password"
                  value={formData?.password}
                  onChange={handleChange}
                  error={errors.password}
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <FloatingLabelInput
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  keyValue={"confirm_password"}
                  className={
                    "!py-[10px] !px-[12px] !text-[#323A70] !text-[14px]"
                  }
                  label="Confirm Password"
                  value={formData?.confirm_password}
                  onChange={handleChange}
                  error={errors.confirm_password}
                  required
                />
                {errors.confirm_password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirm_password}
                  </p>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <FloatingSelect
                    id="phone_code"
                    name="phone_code"
                    keyValue={"phone_code"}
                    type="text"
                    label=""
                    selectedValue={formData?.phone_code}
                    onSelect={handleChange}
                    searchable={true}
                    error={errors.phone_code}
                    options={countryCodes}
                    paddingClassName="!py-[10px] !px-[12px]"
                    placeholder="+1"
                    className={" !text-[#323A70] !text-[14px]"}
                  />
                </div>
                <div className="md:w-3/4">
                  <FloatingLabelInput
                    id="mobile_number"
                    name="mobile_number"
                    keyValue={"mobile_number"}
                    type="tel"
                    label="Mobile Number"
                    value={formData?.mobile_number}
                    onChange={handleChange}
                    error={errors.mobile_number}
                    className={
                      "!py-[10px] !px-[12px] !text-[#323A70] !text-[14px]"
                    }
                  />
                </div>
              </div>
            </div>
            {errorText && (
              <p className="text-[12px] text-red-500">{errorText}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Button
              label={"Create Account"}
              type="primary"
              classNames={{
                root: "justify-center items-center",
                label_: "text-base text-center w-full font-medium",
              }}
              submitButton={true}
              loading={loader}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default SignupForm;
