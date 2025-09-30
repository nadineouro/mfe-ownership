"use client";

import { TruckIcon, StoreIcon } from "../../icons";

interface Option {
  name: string;
  price: number;
  deliveryTime: string; // Ex: "2-3 dias úteis"
}

interface StorePickup {
  storeName: string;
  address: string;
  isOpen: boolean;
  hours: string;
}

interface ShippingBoxProps {
  options: Option[];
  pickups?: StorePickup[];
}

const formatPrice = (price?: number) => {
  if (price === undefined || price === null || isNaN(price) || price < 0) {
    return "Preço indisponível";
  }
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
};

export const ShippingBox = ({ options, pickups = [] }: ShippingBoxProps) => {
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
      {pickups.length > 0 && (
        <>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              {/* Novo ícone de loja: fachada simples */}
              <span style={{ marginRight: 8 }}>
                <StoreIcon />
              </span>
              <span style={{ fontWeight: 600, fontSize: 18 }}>
                Retirar na Loja
              </span>
            </div>
            {pickups.map((pickup, idx) => (
              <div key={idx} style={{ marginBottom: 10, color: "#222" }}>
                {pickup.storeName} - {pickup.address} (
                {pickup.isOpen ? "Aberta" : "Fechada"}, {pickup.hours})
              </div>
            ))}
          </div>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e5e7eb",
              margin: "16px 0",
            }}
          />
        </>
      )}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
        <span style={{ marginRight: 8 }}>
          <TruckIcon />
        </span>
        <span style={{ fontWeight: 600, fontSize: 18 }}>
          Receber no Endereço
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
