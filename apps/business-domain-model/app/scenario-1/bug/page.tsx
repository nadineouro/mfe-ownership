"use client";

import { useEffect, useState } from "react";
// Versão sem tratamento de preço inválido
import { ShippingBox } from "./components/ShippingBox";
import { ProductImages } from "./components/ProductImages";
import { ProductInfo } from "./components/ProductInfo";
import { ProductDetailsBlock } from "./components/ProductDetails";
import { QuantitySelector } from "./components/QuantitySelector";
import { AddToCartButton } from "./components/AddToCartButton";

export interface Product {
  sku: string;
  name: string;
  brand: string;
  description: string;
  details: string;
  images: string[];
  price: number;
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

  return (
    <div
      style={{
        display: "flex",
        gap: 40,
        maxWidth: 900,
        margin: "40px auto",
        padding: "0 16px",
      }}
    >
      <div style={{ flex: 1, minWidth: 280 }}>
        <ProductImages images={product.images} name={product.name} />
        <ProductInfo name={product.name} brand={product.brand} />
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 320,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <ProductDetailsBlock
          description={product.description}
          details={product.details}
          price={product.price}
        />
        <QuantitySelector />
        <AddToCartButton />
        <div style={{ marginTop: 16 }}>
          <ShippingBox options={shippingOptions} />
        </div>
      </div>
    </div>
  );
}
