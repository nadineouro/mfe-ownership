"use client";

import { StoreIcon } from "../icons";

interface StorePickup {
  storeName: string;
  address: string;
  isOpen: boolean;
  hours: string;
}

export function PickupBox({ pickups }: { pickups: StorePickup[] }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        marginBottom: 24,
      }}
    >
      <div style={{ display: "flex", marginBottom: 10 }}>
        <span style={{ marginRight: 8 }}>
          <StoreIcon />
        </span>
        <span style={{ fontWeight: 600, fontSize: 18 }}>Retirar na Loja</span>
      </div>
      {pickups.map((pickup, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            padding: "12px 14px",
            marginBottom: 12,
            background: "#f9fafb",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <div style={{ fontWeight: 500, fontSize: 16 }}>
            {pickup.storeName}
          </div>
          <div style={{ fontSize: 15, color: "#444" }}>{pickup.address}</div>
          <div
            style={{
              fontSize: 13,
              color: pickup.isOpen ? "#059669" : "#ef4444",
              marginTop: 8,
              borderTop: "1px solid #e5e7eb",
              paddingTop: 6,
            }}
          >
            {pickup.isOpen ? "Aberta" : "Fechada"} • {pickup.hours}
          </div>
        </div>
      ))}
    </div>
  );
}
