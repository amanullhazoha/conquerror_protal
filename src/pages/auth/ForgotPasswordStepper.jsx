import CheckEmail from "./CheckEmail";
import ResetPassword from "./ResetPassword";
import { useEffect, useState } from "react";
import ForgotPassword from "./ForgotPassword";
import { Link, useSearchParams } from "react-router-dom";
import PublicLayout from "@/components/layouts/PublicLayout";
import PasswordResetConfirmation from "./PasswordResetConfirmation";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const ForgotPasswordStepper = () => {
  const [searchParams] = useSearchParams();

  const step = parseInt(searchParams.get("step"), 10) || 0;
  const token = searchParams.get("token");

  const [currentStep, setCurrentStep] = useState(step);
  const [resetEmail, setResetEmail] = useState("");

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <ForgotPassword nextStep={nextStep} setResetEmail={setResetEmail} />
        );
      case 1:
        return <CheckEmail nextStep={nextStep} resetEmail={resetEmail} />;
      case 2:
        return <ResetPassword nextStep={nextStep} token={token} />;
      case 3:
        return <PasswordResetConfirmation />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!isNaN(step)) {
      setCurrentStep(step);
    }
  }, [step]);

  return (
    <PublicLayout>
      <div className="flex justify-center items-center h-[83.5vh] px-4 py-32 lg:py-80">
        <div className="max-w-[450px] w-full">
          {renderStepContent()}

          <div className="flex flex-col gap-6 justify-center items-center text-sm mt-5">
            <Link
              className="text-[#6B7280] text-sm font-semibold"
              to={"/login"}
            >
              <p>← Back to login</p>
            </Link>

            <div className="flex gap-4">
              {steps.map((stepLabel, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 ${
                    currentStep === idx ? "bg-[#E3A008]" : "bg-[#E5E7EB]"
                  } rounded-full`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ForgotPasswordStepper;
