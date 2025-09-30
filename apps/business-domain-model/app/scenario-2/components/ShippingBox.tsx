"use client";

import { TruckIcon } from "../../icons";

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
        background: "#d9d9d9",
        borderRadius: 18,
        padding: "28px 18px 24px 18px",
        marginBottom: 18,
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        minWidth: 220,
        maxWidth: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", marginBottom: 16 }}>
        <span style={{ fontWeight: 600, fontSize: 18 }}>Opções de Frete</span>
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
              fontSize: 14,
              borderBottom:
                idx < options.length - 1 ? "1px solid #ccc" : "none",
            }}
          >
            <span>
              <b>{opt.name}:</b> {opt.deliveryTime} - {formatPrice(opt.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
