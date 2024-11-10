import { useState } from "react";
import PublicLayout from "@/components/layouts/PublicLayout";
import SignupStepOne from "@/components/signup/SignupStepOne";
import SignUpStep from "@/components/steps/SignUpStep";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [accountType, setAccountType] = useState("agent");

  return (
    <PublicLayout>
      <div className="flex justify-center items-center px-4">
        <div className="container mx-auto py-[72px]">
          {/* <SignupStepOne
            accountType={accountType}
            setAccountType={setAccountType}
          /> */}

          <SignUpStep />
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignUp;
