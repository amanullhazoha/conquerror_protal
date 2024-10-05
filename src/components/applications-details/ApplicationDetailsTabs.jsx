import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApplicantBasicInfo from "./ApplicantBasicInfo";
import ApplicationContactInfo from "./ApplicationContactInfo";
import ApplicationNidInfo from "./ApplicationNidInfo";

const ApplicationDetailsTabs = () => {
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
          <ApplicantBasicInfo />
        </TabsContent>
        <TabsContent value="Contact">
          <ApplicationContactInfo />
        </TabsContent>
        <TabsContent value="NID/CNIC">
          <ApplicationNidInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApplicationDetailsTabs;
