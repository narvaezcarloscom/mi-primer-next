// src/app/services/[id]/page.tsx
import { notFound } from "next/navigation";
import { getService, services } from "../../../lib/services";

type Props = { params: { id: string } };

// Pre-render estático de cada servicio (SSG)
export function generateStaticParams() {
  return services.map(s => ({ id: s.id }));
}

// Metadata por servicio
export function generateMetadata({ params }: Props) {
  const svc = getService(params.id);
  return {
    title: svc ? `${svc.name} | Servicios` : "Servicio no encontrado",
    description: svc?.summary ?? "Detalle de servicio"
  };
}

export default function ServiceDetail({ params }: Props) {
  const svc = getService(params.id);
  if (!svc) return notFound();

  return (
    <article style={{ maxWidth: 800, margin: "2rem auto" }}>
      <h1>{svc.name}</h1>
      <p>{svc.content}</p>
    </article>
  );
}