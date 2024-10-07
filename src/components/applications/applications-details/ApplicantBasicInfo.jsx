import EditButtons from "@/components/EditButtons";
import { useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantBasicInfo = () => {
	const [isEdit, setIsEdit] = useState(false);
	const { register, handleSubmit, setValue } = useForm({
		defaultValues: {
			firstName: "Anik",
			lastName: "Molla",
			fatherName: "Anika",
			motherName: "Anika",
			dob: "1998-06-05", // Use YYYY-MM-DD format for date inputs
			gender: "male",
			nationality: "Pakistan",
			position: "Rider",
			referenceNumber: "4552212",
		},
	});

	const onSubmit = (data) => {
		console.log(data); // Handle form submission
		// Here you can send the data to your API or handle it accordingly
	};

	return (
		<div className="grid grid-cols-2 gap-6">
			<form onSubmit={handleSubmit(onSubmit)} className="flex-1">
				{/* Header */}
				<div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
					<div className="flex items-center justify-between mb-[24px]">
						<h2 className="text-[18px] leading-[27px] font-semibold">
							Basic Information
						</h2>

						<EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
					</div>

					{/* Main component */}
					{isEdit ? (
						<div></div>
					) : (
						<div>
							<div className="grid grid-cols-2 border-b-2 border-b-[#F9FAFB] pb-4 mb-4">
								<div>
									<p className="text-[#9CA3AF] pb-2">First Name</p>
									<p>Anik</p>
								</div>

								<div>
									<p className="text-[#9CA3AF] pb-2">Last Name</p>
									<p>Molla</p>
								</div>
							</div>

							<InfoCard title="Father Name" content="Test Name" />
							<InfoCard title="Mother Name" content="Test Name" />
							<InfoCard title="Date of Birth" content="5-June-1998" />
							<InfoCard title="Gender" content="Male" />
							<InfoCard title="Nationality" content="Bangladeshi" />
							<InfoCard title="Position" content="Rider" />
							<InfoCard title="Reference Number" content="12345678" />
						</div>
					)}
				</div>
			</form>

			<div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
				<h2 className="text-[18px] leading-[27px] font-semibold mb-5">
					Documents
				</h2>

				<ApplicantPhoto title="Applicant Photo" />
			</div>
		</div>
	);
};

// User name card
const InfoCard = ({ title, content }) => {
	return (
		<div className="border-b-2 border-b-[#F9FAFB] pb-4 mb-4">
			<p className="text-[#9CA3AF] pb-2">{title}</p>
			<p>{content}</p>
		</div>
	);
};

export default ApplicantBasicInfo;
