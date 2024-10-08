// User name card
export const InfoCard = ({ title, content }) => {
	return (
		<div className="border-b-2 border-b-[#F9FAFB] pb-4 mb-4">
			<p className="text-[#9CA3AF] pb-2">{title}</p>
			<p>{content}</p>
		</div>
	);
};
