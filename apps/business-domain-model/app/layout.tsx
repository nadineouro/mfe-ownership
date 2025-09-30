import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protótipo A",
  description: "Modelo de Responsabilidade por Domínio de Negócio",
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
