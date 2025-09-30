import React from "react";

export function ProductInfo({ name, brand }: { name: string; brand: string }) {
  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ fontSize: 28, fontWeight: 700, color: "#1e293b" }}>{name}</div>
      <div style={{ fontSize: 16, color: "#6b7280", marginTop: 4 }}>
        Marca: <span style={{ fontWeight: 600, color: "#1e40af", fontSize: 18 }}>{brand}</span>
      </div>
    </div>
  );
}
