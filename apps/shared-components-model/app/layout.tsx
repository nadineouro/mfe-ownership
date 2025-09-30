import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #e5e7eb",
            marginBottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            background: "#fff",
          }}
        >
          {/* Nome da loja */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#1e40af",
              minWidth: 140,
            }}
          >
            Minha Loja
          </div>

          {/* Barra de busca */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
              maxWidth: 320,
            }}
          >
            <input
              type="text"
              placeholder="Buscar produtos..."
              style={{
                width: "100%",
                padding: "8px 36px 8px 12px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 15,
                outline: "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "#6b7280",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#6b7280" strokeWidth="2" />
                <line
                  x1="15"
                  y1="15"
                  x2="19"
                  y2="19"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          {/* Links */}
          <nav style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#1e40af",
                fontWeight: 500,
              }}
            >
              Home
            </a>
            <a
              href="/shopping"
              style={{
                textDecoration: "none",
                color: "#1e40af",
                fontWeight: 500,
              }}
            >
              Shopping
            </a>
            <a
              href="/account"
              style={{
                textDecoration: "none",
                color: "#1e40af",
                fontWeight: 500,
              }}
            >
              Account
            </a>
          </nav>

          {/* Ícone carrinho */}
          <div style={{ marginLeft: 18 }}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <circle cx="9" cy="20" r="2" fill="#1e40af" />
              <circle cx="17" cy="20" r="2" fill="#1e40af" />
              <path
                d="M5 6h2l1.68 9.39a2 2 0 0 0 2 1.61h6.72a2 2 0 0 0 2-1.61L21 8H7"
                stroke="#1e40af"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </header>
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
