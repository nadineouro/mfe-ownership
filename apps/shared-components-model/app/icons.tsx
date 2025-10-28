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
