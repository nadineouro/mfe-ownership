import React from "react";

export function QuantitySelector() {
  return (
    <select
      style={{
        minWidth: 60,
        padding: "6px 8px",
        borderRadius: 6,
        border: "1px solid #e5e7eb",
        fontSize: 16,
      }}
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  );
}
