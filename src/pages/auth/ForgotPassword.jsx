import Head from "./Head";
import { useEffect } from "react";
import useToast from "@/hooks/useToast";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { IoMailOutline } from "react-icons/io5";
import logo from "../../assets/images/conqueror_logo.png";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";

const ForgotPassword = ({ nextStep, setResetEmail }) => {
  const { showSuccess, showError } = useToast();

  const [
    forgotPassword,
    { data: response, isLoading, isSuccess, isError, error },
  ] = useForgotPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    const data = {
      email: formData.email,
    };

    setResetEmail(formData.email);
    forgotPassword(data);
  };

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
        title={"Forgot password?"}
        subtitle={"No worries, we’ll send you reset instructions."}
        logo={logo}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg"
      >
        <div>
          <label className="text-[#111928] text-sm" htmlFor="email">
            Email
          </label>

          <div className="relative flex flex-col items-center">
            <input
              className={`w-full p-2 border rounded-lg mt-1 pl-8 outline-none ${
                errors.email && "border-red-500"
              }`}
              type="text"
              name="email"
              id="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
            />

            <div className="absolute left-2 top-[40%]">
              <IoMailOutline className="text-sm text-[#6B7280]" />
            </div>
          </div>

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <Button
          className="w-full bg-[#1A56DB] hover:bg-[#1A56DB] text-white rounded-lg py-2"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
