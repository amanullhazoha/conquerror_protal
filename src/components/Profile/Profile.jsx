import DepositForm from "./DepositForm";
import { DocumentPreview } from "./DocumentUpload";
import ProfileSection from "./ProfileSection";

export function UserProfile() {
    return (
        <div className="min-h-[calc(100vh-10rem)] py-4 flex flex-wrap items-start gap-10">
            <ProfileSection />
            <DepositForm />
            <DocumentPreview />
        </div>
      </div>
    </PrivateLayout>
  );
}
