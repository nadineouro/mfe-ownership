import React from "react";
import { QuantitySelector } from "./QuantitySelector";
import { BuyButton } from "./BuyButton";

interface PriceBoxProps {
  price: number;
  originalPrice: number;
}

export function PriceBox({ price, originalPrice }: PriceBoxProps) {
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
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          marginBottom: 6,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            minWidth: 100,
          }}
        >
          <span
            style={{
              fontSize: 15,
              color: "#9ca3af",
              textDecoration: "line-through",
              marginBottom: 2,
            }}
          >
            R$ {originalPrice.toFixed(2).replace(".", ",")}
          </span>
          <span style={{ fontSize: 24, fontWeight: 700, color: "#0a2540" }}>
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            minWidth: 60,
          }}
        >
          <QuantitySelector />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <BuyButton fullWidth>Comprar</BuyButton>
      </div>
    </div>
  );
}
