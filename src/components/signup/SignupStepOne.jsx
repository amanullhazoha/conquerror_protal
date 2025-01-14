import AgentForm from "./AgentForm";
import EmployForm from "./EmployForm";
import agent from "@/assets/images/agent_bg.png";
import AgentIcon from "@/assets/icons/AgentIcon";
import employ from "@/assets/images/employ_bg.png";
import EmployIcon from "@/assets/icons/EmployIcon";
import AgentActiveIcon from "@/assets/icons/AgentActiveIcon";
import EmployActiveIcon from "@/assets/icons/EmployActiveIcon";

const SignupStepOne = ({ accountType, setAccountType, setStep }) => {
  const activeAccountType = (type) => {
    return type === accountType ? true : false;
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <div className="grid grid-cols-2 justify-center">
          <div
            className={`flex flex-col gap-2 px-12 pt-12 items-center rounded-lg hover:bg-white cursor-pointer ${
              activeAccountType("agent")
                ? "rounded-b-none bg-white border border-[#E5E5E5] border-b-0"
                : " border border-transparent"
            }`}
            onClick={() => setAccountType("agent")}
          >
            {activeAccountType("agent") ? <AgentActiveIcon /> : <AgentIcon />}

            <div className="w-full text-center">
              <p
                className={`text-2xl font-medium mb-1.5 ${
                  activeAccountType("agent")
                    ? "text-[#3F83F8]"
                    : "text-[#6B7280]"
                }`}
              >
                Agent
              </p>

              <p
                className={`h-1.5 w-full rounded-t-full ${
                  activeAccountType("agent") ? "bg-blue-600" : "bg-transparent"
                }`}
              ></p>
            </div>
          </div>

          <div
            className={`flex flex-col gap-2 px-12 pt-12 items-center rounded-lg hover:bg-white cursor-pointer ${
              activeAccountType("employ")
                ? "rounded-b-none bg-white border border-[#E5E5E5] border-b-0"
                : " border border-transparent"
            }`}
            onClick={() => setAccountType("employ")}
          >
            {activeAccountType("employ") ? (
              <EmployActiveIcon />
            ) : (
              <EmployIcon />
            )}

            <div className="w-full text-center">
              <p
                className={`text-2xl font-medium mb-1.5 ${
                  activeAccountType("employ")
                    ? "text-[#3F83F8]"
                    : "text-[#6B7280]"
                }`}
              >
                Employ
              </p>

              <p
                className={`h-1.5 w-full rounded-t-full ${
                  activeAccountType("employ") ? "bg-blue-600" : "bg-transparent"
                }`}
              ></p>
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg border border-[#E5E5E5] px-8 py-8 ${
            activeAccountType("employ") ? "rounded-r-none" : "rounded-l-none"
          }`}
        >
          <h2 className="mb-5 font-bold text-2xl text-[#111928]">
            Create your Free Account
          </h2>

          {activeAccountType("agent") ? (
            <AgentForm setStep={setStep} />
          ) : (
            <EmployForm setStep={setStep} />
          )}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          alt="banner image"
          src={accountType === "agent" ? agent : employ}
        />
      </div>
    </div>
  );
};

export default SignupStepOne;
