export default function ChefHatIcon({ size = 28, color = "#1D3557" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14v5h16v-5" />
      <path d="M7 14v-2a5 5 0 1 1 10 0v2" />
    </svg>
  );
}