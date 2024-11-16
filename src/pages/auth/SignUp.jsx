import { useState } from "react";
import SignUpStep from "@/components/steps/SignUpStep";
import PublicLayout from "@/components/layouts/PublicLayout";
import SignupStepOne from "@/components/signup/SignupStepOne";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("employ");

  return (
    <PublicLayout>
      <div className="flex justify-center items-center px-4">
        <div className="container mx-auto py-[72px]">
          {step <= 1 && (
            <SignupStepOne
              setStep={setStep}
              accountType={accountType}
              setAccountType={setAccountType}
            />
          )}

          {step > 1 && (
            <SignUpStep
              step={step}
              setStep={setStep}
              accountType={accountType}
            />
          )}
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignUp;
