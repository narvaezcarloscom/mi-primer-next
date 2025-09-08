// src/app/services/[id]/page.tsx
import { notFound } from "next/navigation";
import { getService, services } from "../../../lib/services";

type Params = { id: string };
type Props = { params: Promise<Params> }; // 👈 params asíncrono (Next 15)

export function generateStaticParams() {
  return services.map(s => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params; // 👈 await
  const svc = getService(id);
  return {
    title: svc ? `${svc.name} | Servicios` : "Servicio no encontrado",
    description: svc?.summary ?? "Detalle de servicio",
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { id } = await params; // 👈 await
  const svc = getService(id);
  if (!svc) return notFound();

  return (
    <article style={{ maxWidth: 800, margin: "2rem auto" }}>
      <h1>{svc.name}</h1>
      <p>{svc.content}</p>
    </article>
  );
}
