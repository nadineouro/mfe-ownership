import React from "react";

export function ProductInfo({ name, brand }: { name: string; brand: string }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#222",
          textTransform: "uppercase",
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 16, color: "#222", marginTop: 2 }}>{brand}</div>
    </div>
  );
}
