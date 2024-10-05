const ArrowLeftIcon = ({ className }) => {
  return (
    <svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M2 6H11H2Z" fill="#111928" />
      <path
        d="M5.5 9.5L2 6M2 6L5.5 2.5M2 6H11"
        stroke="#111928"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
