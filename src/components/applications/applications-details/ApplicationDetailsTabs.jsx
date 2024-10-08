import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApplicantBasicInfo from "./ApplicantBasicInfo";
import ApplicantLicenseInfo from "./ApplicantLicenseInfo";
import ApplicantPassportInfo from "./ApplicantPassportInfo";
import ApplicationContactInfo from "./ApplicationContactInfo";
import ApplicationNidInfo from "./ApplicationNidInfo";

const ApplicationDetailsTabs = ({ application }) => {
	return (
		<div className="w-full">
			<h2 className="mb-[28px] text-2xl text-gray-900 font-semibold">
				Application Details
			</h2>

			<Tabs defaultValue="Basic" className="max-w-full">
				<TabsList>
					<TabsTrigger value="Basic">Basic</TabsTrigger>
					<TabsTrigger value="Contact">Contact</TabsTrigger>
					<TabsTrigger value="NID/CNIC">NID/CNIC</TabsTrigger>
					<TabsTrigger value="Passport">Passport</TabsTrigger>
					<TabsTrigger value="License">License</TabsTrigger>
				</TabsList>
				<TabsContent value="Basic" className="mt-[24px]">
					<ApplicantBasicInfo application={application} />
				</TabsContent>
				<TabsContent value="Contact" className="mt-[24px]">
					<ApplicationContactInfo application={application} />
				</TabsContent>
				<TabsContent value="NID/CNIC" className="mt-[24px]">
					<ApplicationNidInfo application={application} />
				</TabsContent>
				<TabsContent value="Passport" className="mt-[24px]">
					<ApplicantPassportInfo application={application} />
				</TabsContent>
				<TabsContent value="License" className="mt-[24px]">
					<ApplicantLicenseInfo application={application} />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default ApplicationDetailsTabs;
