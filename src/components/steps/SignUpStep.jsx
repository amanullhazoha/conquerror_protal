import AgentStep from "./AgentSter";
import EmployStepper from "./EmployStepper";
import AgentDocumentForm from "../signup/AgentDocumentForm";
import EmployAddressForm from "../signup/EmployAddressForm";
import AgentActiveIcon from "@/assets/icons/AgentActiveIcon";
import EmployPassportForm from "../signup/EmployPassportForm";
import EmployDocumentForm from "../signup/EmployDocumentForm";
import EmployActiveIcon from "@/assets/icons/EmployActiveIcon";
import AgentContactInfoForm from "../signup/AgentContactInfoForm";

const SignUpStep = ({ step, setStep, accountType }) => {
  return (
    <div className="bg-white rounded-lg w-[856px] py-[48px] mx-auto">
      <div className="border border-[#E5E5E5] border-t-0 border-l-0 border-r-0 px-[48px] flex flex-col justify-center items-center">
        {accountType === "agent" ? <AgentActiveIcon /> : <EmployActiveIcon />}

        <div className="w-full text-center mt-[15px]">
          <p className="text-2xl font-medium mb-1.5 text-[#3F83F8]">
            {accountType === "agent" ? "Agent" : "Employ"}
          </p>

          <p className={`h-1.5 w-full rounded-t-full bg-blue-600`}></p>
        </div>
      </div>

      {accountType === "agent" ? (
        <AgentStep activeStep={step} />
      ) : (
        <EmployStepper activeStep={step} />
      )}

      {accountType === "agent" ? (
        <>
          {step === 2 && <AgentContactInfoForm setStep={setStep} />}
          {step === 3 && <AgentDocumentForm setStep={setStep} />}
        </>
      ) : (
        <>
          {step === 2 && <EmployPassportForm setStep={setStep} />}
          {step === 3 && <EmployAddressForm setStep={setStep} />}
          {step === 4 && <EmployDocumentForm setStep={setStep} />}
        </>
      )}
    </div>
  );
};

export default SignUpStep;
