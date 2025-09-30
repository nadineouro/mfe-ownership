import React from "react";

export function AddToCartButton() {
  return (
    <button style={{
      marginTop: 8,
      padding: "12px 0",
      background: "#1e40af",
      color: "#fff",
      fontWeight: 700,
      fontSize: 17,
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(30,64,175,0.08)"
    }}>
      ADICIONAR AO CARRINHO
    </button>
  );
}
