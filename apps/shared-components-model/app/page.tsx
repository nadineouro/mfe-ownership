"use client";

import { ExternalLinkIcon } from "./icons";

export default function HomePage() {
  const scenarios = [
    {
      id: 1,
      title: "Cenário 1 - Correção de Bug no Componente de Frete",
      description:
        'Erro crítico causava quebra total da aplicação quando o preço de uma modalidade de entrega retornava undefined do backend. O cenário demonstra o processo de identificação e correção do bug, desde o estado com erro até a solução implementada exibindo "Preço indisponível" para o usuário.',
      variants: [
        { name: "Bug", path: "/scenario-1/bug", status: "bug" },
        { name: "Fixed", path: "/scenario-1/fixed", status: "fixed" },
      ],
    },
    {
      id: 2,
      title: "Cenário 2 - Aplicação de Novo Design Visual",
      description:
        "Implementação de nova identidade visual na página de produto (tipografia, cores, espaçamentos). O cenário demonstra o processo de atualização do design e como a consistência visual é alcançada entre diferentes componentes da página.",
      variants: [
        {
          name: "Inconsistent",
          path: "/scenario-2/inconsistent",
          status: "warning",
        },
        { name: "Fixed", path: "/scenario-2/fixed", status: "fixed" },
      ],
    },
    {
      id: 3,
      title: 'Cenário 3 - Nova Funcionalidade "Compre e Retire"',
      description:
        'Adição de nova funcionalidade permitindo retirada do produto em lojas físicas. O cenário apresenta a integração de duas modalidades: "Receber no Endereço" (entregas convencionais) e "Retirar na Loja" (com endereços e horários das lojas físicas disponíveis).',
      variants: [
        { name: "Implementação", path: "/scenario-3", status: "default" },
      ],
    },
    {
      id: 4,
      title: "Cenário 4 - Alteração Visual Imposta pelo Time de Logística",
      description:
        'Melhorias no layout do componente de frete incluindo separação visual entre modalidades de entrega e retirada, badge destacando "Entrega Rápida", indicadores de status das lojas (Aberta/Fechada) e hierarquia visual aprimorada para melhor experiência do usuário.',
      variants: [
        { name: "Implementação", path: "/scenario-4", status: "default" },
      ],
    },
  ];

  const statusConfig = {
    bug: { color: "#ef4444", bg: "#fef2f2", icon: "🐛" },
    fixed: { color: "#10b981", bg: "#f0fdf4", icon: "✅" },
    warning: { color: "#f59e0b", bg: "#fffbeb", icon: "⚠️" },
    default: { color: "#3b82f6", bg: "#eff6ff", icon: "📦" },
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{ textAlign: "center", marginBottom: 48, color: "white" }}
          >
            <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>
              Shared Components Model
            </h1>
            <p style={{ fontSize: 20, maxWidth: 600, margin: "0 auto" }}>
              Explore cenários de uso de componentes compartilhados e
              bibliotecas externas
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {scenarios.map((scenario) => (
              <div
                key={scenario.id}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}
                  >
                    {scenario.title}
                  </h3>
                  <p
                    style={{ marginBottom: 16, lineHeight: 1.6, fontSize: 14 }}
                  >
                    {scenario.description}
                  </p>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {scenario.variants.map((variant) => {
                    const { color, bg, icon } =
                      statusConfig[
                        variant.status as keyof typeof statusConfig
                      ] || statusConfig.default;

                    return (
                      <a
                        key={variant.name}
                        href={variant.path}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "10px 16px",
                          borderRadius: 8,
                          textDecoration: "none",
                          fontWeight: 600,
                          fontSize: 14,
                          color,
                          background: bg,
                          border: `2px solid ${color}20`,
                        }}
                      >
                        {icon}
                        <span>{variant.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <a
              href={process.env.NEXT_PUBLIC_OTHER_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 32px",
                background: "white",
                textDecoration: "none",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              <span>🏢</span>
              Ir para Business Domain Model
              <ExternalLinkIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
