import React from "react";

interface BuyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

export function BuyButton({ children, onClick, fullWidth }: BuyButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "linear-gradient(90deg,#0a2540 0%,#174e63 100%)",
        color: "#fff",
        border: "none",
        borderRadius: 24,
        padding: "16px 0",
        fontSize: 18,
        fontWeight: 700,
        width: fullWidth ? "100%" : undefined,
        marginTop: 22,
        boxShadow: "0 2px 8px rgba(10,37,64,0.08)",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      {children}
    </button>
  );
}
