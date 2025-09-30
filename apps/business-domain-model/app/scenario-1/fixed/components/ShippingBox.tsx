"use client";

import { TruckIcon } from "../../../icons";

interface Option {
  name: string;
  price: number;
  deliveryTime: string; // Ex: "2-3 dias úteis"
}

interface ShippingBoxProps {
  options: Option[];
}

const formatPrice = (price?: number) => {
  if (price === undefined || price === null || isNaN(price) || price < 0) {
    return "Preço indisponível";
  }
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
};

export const ShippingBox = ({ options }: ShippingBoxProps) => {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        background: "#fff",
        width: "100%",
        boxSizing: "border-box",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
        {/* Caminhão SVG */}
        <span style={{ marginRight: 8 }}>
          <TruckIcon />
        </span>
        <span style={{ fontWeight: 600, fontSize: 18 }}>
          Frete & Prazo de Entrega
        </span>
      </div>
      <div>
        {options.map((opt, idx) => (
          <div
            key={idx}
            style={{
              padding: "10px 0",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <span>
              {opt.name}: {opt.deliveryTime} - {formatPrice(opt.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
