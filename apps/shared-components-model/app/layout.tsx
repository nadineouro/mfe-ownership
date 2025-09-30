import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protótipo B",
  description: "Modelo de Componentes Compartilhados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
