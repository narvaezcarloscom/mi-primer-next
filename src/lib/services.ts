// src/lib/services.ts
export const services = [
  { id: "web-design", name: "Web Design", summary: "Sitios rápidos y optimizados.", content: "Diseño y desarrollo con foco en performance y SEO técnico." },
  { id: "seo",        name: "SEO",        summary: "Mejor ranking en Google.",     content: "Auditoría, on-page, estructura y contenidos por intención de búsqueda." },
  { id: "ads",        name: "Paid Ads",   summary: "Campañas rentables.",          content: "Estrategia y optimización continua en Google Ads y Meta Ads." },
];

export function getService(id: string) {
  return services.find(s => s.id === id);
}