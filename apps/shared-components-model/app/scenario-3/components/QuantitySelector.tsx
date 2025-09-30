import React from "react";

export function QuantitySelector() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ fontWeight: 500 }}>Quantidade:</span>
      <input type="number" min={1} defaultValue={1} style={{ width: 60, padding: "6px 8px", borderRadius: 6, border: "1px solid #e5e7eb", fontSize: 16 }} />
    </div>
  );
}
