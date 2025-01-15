const CrossIcon = ({ fill = "red" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 16 16"
    >
      <g
        fill="none"
        stroke="red"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5" />
        <circle cx="8" cy="8" r="6.25" />
      </g>
    </svg>
  );
};

export default CrossIcon;
