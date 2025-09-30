"use client";

import { TruckIcon, StoreIcon } from "../../icons";

interface Option {
  name: string;
  price: number;
  deliveryTime: string; // Ex: "2-3 dias úteis"
}

const formatPrice = (price?: number) => {
  if (price === undefined || price === null || isNaN(price) || price < 0) {
    return "Preço indisponível";
  }
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
};

export const DeliveryBox = ({ options }: { options: Option[] }) => {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        background: "#fff",
        width: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        marginBottom: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
        <span style={{ marginRight: 8 }}>
          <TruckIcon />
        </span>
        <span style={{ fontWeight: 600, fontSize: 18 }}>
          Receber no Endereço
        </span>
      </div>
      <div>
        {options.map((opt, idx) => {
          const isExpress = opt.name.toLowerCase().includes("express");
          return (
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
                position: "relative",
              }}
            >
              {isExpress && (
                <div
                  style={{
                    marginBottom: 6,
                    background: "#f59e42",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 13,
                    borderRadius: 6,
                    padding: "2px 10px 2px 6px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    width: "fit-content",
                    maxWidth: "100%",
                  }}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fff" />
                    <path
                      d="M12 7v5l3 3"
                      stroke="#f59e42"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Entrega Rápida
                </div>
              )}
              <span style={{ fontSize: 15, color: "#444", marginBottom: 2 }}>
                Receba em até {opt.deliveryTime}
              </span>
              <span style={{ fontWeight: 700, fontSize: 17, color: "#2563eb" }}>
                {formatPrice(opt.price)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
