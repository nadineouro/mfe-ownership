"use client";

import { useEffect, useState } from "react";
import { Scenario2InconsistentShippingBox as ShippingBox } from "@nadineouro/shipping-components";
import { ProductImages } from "./components/ProductImages";
import { ProductInfo } from "./components/ProductInfo";
import { ProductDetailsBlock } from "./components/ProductDetails";
import { PriceBox } from "./components/PriceBox";

export interface Product {
  sku: string;
  name: string;
  brand: string;
  description: string;
  details: string;
  images: string[];
  price: number;
  originalPrice?: number;
}

export interface ShippingOption {
  name: string;
  price: number;
  deliveryTime: string;
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const api = process.env.NEXT_PUBLIC_API_URL;
        const prodRes = await fetch(`${api}/product`);
        const prodData = await prodRes.json();
        setProduct(prodData);
        const shipRes = await fetch(`${api}/shipping`);
        const shipData = await shipRes.json();
        setShippingOptions(shipData.options);
      } catch (err) {
        setProduct(null);
        setShippingOptions([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (!product) return <div>Produto não encontrado.</div>;

  // Simulação de preço original para desconto
  const originalPrice = product.originalPrice ?? product.price * 1.2;
  return (
    <div
      style={{
        background: "#cdcdcd",
        minHeight: "100vh",
        padding: "0 0 40px 0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 0.9fr",
          gap: 32,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "56px 16px",
          alignItems: "flex-start",
        }}
        className="product-grid-responsive"
      >
        {/* Coluna 1: Fotos */}
        <div
          style={{
            minWidth: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "520px",
          }}
        >
          <ProductImages images={product.images} name={product.name} />
        </div>
        {/* Coluna 2: Info e detalhes (sem preço) */}
        <div
          style={{
            minWidth: 320,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            justifyContent: "center",
          }}
        >
          <ProductInfo name={product.name} brand={product.brand} />
          <ProductDetailsBlock
            description={product.description}
            details={product.details}
          />
        </div>
        {/* Coluna 3: Preço, quantidade, botão, shipping */}
        <div
          style={{
            minWidth: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <PriceBox price={product.price} originalPrice={originalPrice} />
          <div style={{ marginTop: 28, width: "100%" }}>
            <ShippingBox options={shippingOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
