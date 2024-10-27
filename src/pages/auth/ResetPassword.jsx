import Head from "./Head";
import useToast from "@/hooks/useToast";
import { FaCheck } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../../assets/images/conqueror_logo.png";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";

const ResetPassword = ({ nextStep, token }) => {
  const { showSuccess, showError } = useToast();

  const [isPasswordViewable, setIsPasswordViewable] = useState(false);
  const [isConfirmPasswordViewable, setIsConfirmPasswordViewable] =
    useState(false);

  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const [
    resetPassword,
    { data: response, isLoading, isSuccess, isError, error },
  ] = useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    const data = {
      password: formData.password,
      token,
    };

    resetPassword(data);
  };

  const password = watch("password");

  useEffect(() => {
    const lengthValid = password?.length >= 8;
    const uppercaseValid = /[A-Z]/.test(password);
    const lowercaseValid = /[a-z]/.test(password);
    const numberValid = /\d/.test(password);
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordValidations({
      length: lengthValid,
      uppercase: uppercaseValid,
      lowercase: lowercaseValid,
      number: numberValid,
      specialChar: specialCharValid,
    });
  }, [password]);

  useEffect(() => {
    if (isSuccess) {
      showSuccess(response?.message);
      nextStep();
    }

    if (isError) {
      showError(error?.data);
    }
  }, [isError, isSuccess]);

  return (
    <div>
      <Head
        title={"Set new password"}
        subtitle={
          "Your new password must be different to previously used passwords."
        }
        logo={logo}
        width="w-[80%]"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg"
      >
        <div>
          <label className="text-[#111928] text-sm" htmlFor="password">
            Password
          </label>
          <div className="relative flex flex-col items-center">
            <input
              className={`w-full p-2 border rounded-lg mt-1 pr-8 outline-none ${
                errors.password && "border-red-500"
              }`}
              type={isPasswordViewable ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                validate: {
                  length: (value) =>
                    value.length >= 8 ||
                    "Password must be at least 8 characters long",
                  uppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must contain at least one uppercase letter",
                  lowercase: (value) =>
                    /[a-z]/.test(value) ||
                    "Password must contain at least one lowercase letter",
                  number: (value) =>
                    /\d/.test(value) ||
                    "Password must contain at least one number",
                  specialChar: (value) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                    "Password must contain at least one special character",
                },
              })}
            />

            <div
              className="absolute right-2 top-[40%] z-10 cursor-pointer"
              onClick={() => setIsPasswordViewable((prev) => !prev)}
            >
              {isPasswordViewable ? (
                <FaRegEyeSlash className="text-sm text-[#6B7280]" />
              ) : (
                <FaRegEye className="text-sm text-[#6B7280]" />
              )}
            </div>
          </div>

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="text-[#111928] text-sm" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative flex flex-col items-center">
            <input
              className={`w-full p-2 border rounded-lg mt-1 pr-8 outline-none ${
                errors.confirmPassword && "border-red-500"
              }`}
              type={isConfirmPasswordViewable ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                validate: (value) => {
                  const { password } = getValues();
                  return value === password || "Passwords do not match";
                },
              })}
            />

            <div
              className="absolute right-2 top-[40%] z-10 cursor-pointer"
              onClick={() => setIsConfirmPasswordViewable((prev) => !prev)}
            >
              {isConfirmPasswordViewable ? (
                <FaRegEyeSlash className="text-sm text-[#6B7280]" />
              ) : (
                <FaRegEye className="text-sm text-[#6B7280]" />
              )}
            </div>
          </div>

          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 py-2">
          <div className="flex gap-2 items-center">
            <div
              className={`flex justify-center items-center w-[20px] h-[20px] rounded-full ${
                passwordValidations.length ? "bg-[#0E9F6E]" : "bg-[#D1D5DB]"
              }`}
            >
              <FaCheck className="text-white text-sm" />
            </div>
            <p className="text-[#6B7280] text-sm">
              Must be at least 8 characters
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <div
              className={`flex justify-center items-center w-[20px] h-[20px] rounded-full ${
                passwordValidations.uppercase ? "bg-[#0E9F6E]" : "bg-[#D1D5DB]"
              }`}
            >
              <FaCheck className="text-white text-sm" />
            </div>
            <p className="text-[#6B7280] text-sm">
              Must contain at least one uppercase
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <div
              className={`flex justify-center items-center w-[20px] h-[20px] rounded-full ${
                passwordValidations.lowercase ? "bg-[#0E9F6E]" : "bg-[#D1D5DB]"
              }`}
            >
              <FaCheck className="text-white text-sm" />
            </div>
            <p className="text-[#6B7280] text-sm">
              Must contain at least one lowercase
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <div
              className={`flex justify-center items-center w-[20px] h-[20px] rounded-full ${
                passwordValidations.number ? "bg-[#0E9F6E]" : "bg-[#D1D5DB]"
              }`}
            >
              <FaCheck className="text-white text-sm" />
            </div>
            <p className="text-[#6B7280] text-sm">
              Must contain at least one number
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <div
              className={`flex justify-center items-center w-[20px] h-[20px] rounded-full ${
                passwordValidations.specialChar
                  ? "bg-[#0E9F6E]"
                  : "bg-[#D1D5DB]"
              }`}
            >
              <FaCheck className="text-white text-sm" />
            </div>
            <p className="text-[#6B7280] text-sm">
              Must contain at least one special character
            </p>
          </div>
        </div>

        <Button
          className="w-full bg-[#1A56DB] hover:bg-[#1A56DB] text-white rounded-lg py-2"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Reset password"}
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
