import RadioInput from "../inputs/RadioInput";
import CountryInput from "../inputs/CountryInput";
import InputFieldNew from "../inputs/InputFielNew";
import { Formik, Form, ErrorMessage } from "formik";
import InputFieldRadio from "../inputs/InputFieldRadio";
import AgentActiveIcon from "@/assets/icons/AgentActiveIcon";
import PhoneNumberInputField from "../inputs/PhoneNumberInputField";
import { countryCode, countries } from "@/assets/staticData/countryInfo";
import AgentContactInfoForm from "../signup/AgentContactInfoForm";
import EmployPassportForm from "../signup/EmployPassportForm";
import GreenCheckStepper from "@/assets/icons/GreenCheckSteper";

const INITIALVALUES = {
  email: "",
  gender: "",
  last_name: "",
  first_name: "",
  mother_name: "",
  position_id: "",
  nationality: "",
  date_of_birth: "",
  contact_number: "",
  whatsapp_number: "",
  applicant_image: "",
  hiring_position: "",
};

const SignUpStep = ({ children }) => {
  return (
    <div className="bg-white rounded-lg w-[856px] py-[48px] mx-auto">
      <div className="border border-[#E5E5E5] border-t-0 border-l-0 border-r-0 px-[48px] flex flex-col justify-center items-center">
        <AgentActiveIcon />

        <div className="w-full text-center mt-[15px]">
          <p className="text-2xl font-medium mb-1.5 text-[#3F83F8]">Agent</p>
          <p className={`h-1.5 w-full rounded-t-full bg-blue-600`}></p>
        </div>
      </div>

      <div class="flex items-center justify-center px-1 mt-4">
        <div className="flex items-center justify-between">
          <div class="flex items-center space-x-2 w-fit">
            <GreenCheckStepper />

            <span class="text-gray-700">Personal Info</span>
          </div>

          <div class="w-[64px] h-0.5 bg-gray-200"></div>
        </div>

        <div class="flex items-center space-x-2">
          <div class="flex items-center space-x-2 w-fit">
            <GreenCheckStepper />

            <span class="text-gray-700">Personal Info</span>
          </div>

          <div class="w-[60px] h-0.5 bg-gray-200"></div>
        </div>

        <div class="flex items-center">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 font-bold">
              3
            </div>

            <span class="text-gray-500">Documents</span>
          </div>
        </div>
      </div>

      {/* <div class="flex items-center justify-center px-1 mt-4">
        <div className="flex items-center justify-between">
          <div class="flex items-center space-x-2 w-fit">
            <GreenCheckStepper />

            <span class="text-gray-700">Personal Info</span>
          </div>

          <div class="w-[64px] h-0.5 bg-gray-200"></div>
        </div>

        <div class="flex items-center space-x-2">
          <div class="flex items-center space-x-2 w-fit">
            <GreenCheckStepper />

            <span class="text-gray-700">Family & Passport</span>
          </div>

          <div class="w-[36px] h-0.5 bg-gray-200"></div>
        </div>

        <div class="flex items-center">
          <div class="flex items-center space-x-2 w-full">
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">
              3
            </div>

            <span class="text-gray-700">Address & Reference</span>
          </div>

          <div class="w-[22px] h-0.5 bg-gray-200"></div>
        </div>

        <div class="flex items-center">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 font-bold">
              4
            </div>

            <span class="text-gray-500">Documents & Job</span>
          </div>
        </div>
      </div> */}

      {/* <AgentContactInfoForm /> */}

      <EmployPassportForm />
    </div>
  );
};

export default SignUpStep;
