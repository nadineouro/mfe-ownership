import React from "react";

export function ProductDetailsBlock({
  description,
  details,
}: {
  description: string;
  details: string;
}) {
  return (
    <>
      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "#222",
          marginBottom: 10,
        }}
      >
        {description}
      </div>
      <div style={{ color: "#222", fontSize: 16, opacity: 0.8 }}>{details}</div>
    </>
  );
}
