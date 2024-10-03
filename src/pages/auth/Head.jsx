const Head = ({ title, subtitle, description, logo, width="w-[65%]" }) => {
	return (
		<div className="flex flex-col justify-center items-center mb-6">
			<img src={logo} alt="logo" className="w-[150px] h-auto mb-3" />
			<p className="text-2xl text-[#111928] font-bold mb-1">{title}</p>
			<p className={`text-sm text-[#6B7280] text-center ${width}`}>{subtitle}</p>

      {description && <p className="text-sm font-semibold text-[#6B7280]">{description}</p>}
			
		</div>
	);
};

export default Head;
