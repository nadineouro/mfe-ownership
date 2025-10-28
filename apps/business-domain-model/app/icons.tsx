export const StoreIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect x="4" y="10" width="16" height="8" rx="2" fill="#2563eb" />
    <rect x="6" y="6" width="12" height="4" rx="2" fill="#60a5fa" />
    <rect x="8" y="14" width="3" height="4" rx="1" fill="#fff" />
    <rect x="13" y="14" width="3" height="4" rx="1" fill="#fff" />
    <rect x="4" y="18" width="16" height="2" rx="1" fill="#e5e7eb" />
    <circle cx="7" cy="9" r="1" fill="#2563eb" />
    <circle cx="17" cy="9" r="1" fill="#2563eb" />
  </svg>
);

export const TruckIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect x="2" y="7" width="13" height="7" rx="2" fill="#2563eb" />
    <rect x="15" y="10" width="5" height="4" rx="1" fill="#60a5fa" />
    <circle cx="6" cy="17" r="2" fill="#2563eb" />
    <circle cx="18" cy="17" r="2" fill="#2563eb" />
  </svg>
);

export const SearchIcon = ({ size = 18, color = "#6b7280" }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="7" stroke={color} strokeWidth="2" />
    <line
      x1="15"
      y1="15"
      x2="19"
      y2="19"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ChevronDownIcon = ({ size = 12, color = "currentColor" }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const ExternalLinkIcon = ({ size = 12, color = "currentColor" }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export const CartIcon = ({ size = 28, color = "#1e40af" }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <circle cx="9" cy="20" r="2" fill={color} />
    <circle cx="17" cy="20" r="2" fill={color} />
    <path
      d="M5 6h2l1.68 9.39a2 2 0 0 0 2 1.61h6.72a2 2 0 0 0 2-1.61L21 8H7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
