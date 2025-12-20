export default function ServiceTrayIcon({ size = 28, color = "#1D3557" }) {
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
      <path d="M3 17h18" />
      <path d="M4 13h16l-2 4H6l-2-4z" />
      <path d="M12 3a4 4 0 0 1 4 4v1H8V7a4 4 0 0 1 4-4z" />
    </svg>
  );
}