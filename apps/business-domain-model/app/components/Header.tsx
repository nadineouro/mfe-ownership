"use client";

import { useState } from "react";
import {
  SearchIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  CartIcon,
} from "../icons";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scenarios = [
    { name: "Cenário 1: Bug", href: "/scenario-1/bug" },
    { name: "Cenário 1: Fixed", href: "/scenario-1/fixed" },
    { name: "Cenário 2", href: "/scenario-2" },
    { name: "Cenário 3", href: "/scenario-3" },
    { name: "Cenário 4", href: "/scenario-4" },
  ];

  const otherProjectUrl = process.env.NEXT_PUBLIC_OTHER_PROJECT_URL;
  const otherProjectName = "Shared Components";

  const dropdownStyles = {
    container: {
      position: "relative" as const,
    },
    menu: {
      position: "absolute" as const,
      top: "100%",
      left: 0,
      background: "white",
      borderRadius: 8,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
      border: "1px solid #e5e7eb",
      minWidth: 220,
      zIndex: 1000,
      marginTop: 4,
      opacity: 0,
      visibility: "hidden" as const,
      transform: "translateY(-10px)",
      transition: "all 0.2s ease",
    },
    menuVisible: {
      opacity: 1,
      visibility: "visible" as const,
      transform: "translateY(0)",
    },
    item: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 16px",
      textDecoration: "none",
      color: "#374151",
      transition: "background-color 0.15s ease",
      borderBottom: "1px solid #f3f4f6",
    },
    itemLast: {
      borderBottom: "none",
    },
  };

  return (
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
      <a
        href="/"
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#1e40af",
          minWidth: 140,
          textDecoration: "none",
        }}
      >
        Business Domain
      </a>

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
          disabled
          style={{
            width: "100%",
            padding: "8px 36px 8px 12px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            fontSize: 15,
            outline: "none",
            backgroundColor: "#f9fafb",
            color: "#6b7280",
            cursor: "not-allowed",
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
          <SearchIcon />
        </span>
      </div>

      <nav style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <div
          style={dropdownStyles.container}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: "#1e40af",
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 16,
            }}
          >
            Cenários
            <ChevronDownIcon />
          </button>

          <div
            style={{
              ...dropdownStyles.menu,
              ...(isDropdownOpen ? dropdownStyles.menuVisible : {}),
            }}
          >
            {scenarios.map((scenario, index) => (
              <a
                key={scenario.href}
                href={scenario.href}
                style={{
                  ...dropdownStyles.item,
                  ...(index === scenarios.length - 1
                    ? dropdownStyles.itemLast
                    : {}),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {scenario.name}
              </a>
            ))}
          </div>
        </div>

        <a
          href={otherProjectUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#1e40af",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 12px",
            borderRadius: 6,
            border: "1px solid #e0e7ff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#e0e7ff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          {otherProjectName}
          <ExternalLinkIcon />
        </a>
      </nav>

      {/* Ícone carrinho */}
      <div
        style={{
          marginLeft: 18,
          cursor: "not-allowed",
          opacity: 0.7,
        }}
      >
        <CartIcon />
      </div>
    </header>
  );
}
