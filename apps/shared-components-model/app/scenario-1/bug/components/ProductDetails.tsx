import React from "react";

export function ProductDetailsBlock({
  description,
  details,
  price,
}: {
  description: string;
  details: string;
  price: number;
}) {
  return (
    <>
      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "#1e40af",
          marginBottom: 8,
        }}
      >
        {description}
      </div>
      <div style={{ color: "#374151", fontSize: 15, marginBottom: 8 }}>
        {details}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#1e40af",
          marginBottom: 8,
        }}
      >
        R$ {price.toFixed(2).replace(".", ",")}
      </div>
    </>
  );
}
