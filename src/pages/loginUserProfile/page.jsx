import PrivateLayout from "@/components/layouts/PrivateLayout";
import AgentContactInfoForm from "@/components/form/profile/agent/AgentContactInfo";
import AgentPersonalInfoForm from "@/components/form/profile/agent/AgentPersonalInfo";
import ApplicantLicenseInfo from "@/components/applications/applications-details/ApplicantLicenseInfo";
import EmployeeDocument from "@/components/form/profile/employee/EmployeeDocument";
import AgentDocument from "@/components/form/profile/agent/AgentDocument";
import EmployeePersonalInfoForm from "@/components/form/profile/employee/EmployeePersonalInfo";
import EmployeeContactInfoForm from "@/components/form/profile/employee/EmployeContactInfo";

const LoginUserProfile = ({ user = "agent" }) => {
  return (
    <PrivateLayout>
      <section>
        <h1 className="text-2xl font-medium text-[#111928] mb-6">My Profile</h1>

        {user === "agent" && (
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <AgentPersonalInfoForm />
              <AgentContactInfoForm />
            </div>

            <AgentDocument />
          </div>
        )}

        {user === "employee" && (
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <EmployeePersonalInfoForm />
              <EmployeeContactInfoForm />
            </div>

            <EmployeeDocument />
          </div>
        )}
      </section>
    </PrivateLayout>
  );
};

export default LoginUserProfile;
