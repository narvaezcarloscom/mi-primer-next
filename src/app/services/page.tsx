// src/app/services/page.tsx
import Link from "next/link";
import { services } from "../../lib/services"; // relativo desde /app/services

export default function ServicesPage() {
  return (
    <section style={{ maxWidth: 800, margin: "2rem auto" }}>
      <h1>Servicios</h1>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {services.map(s => (
          <li key={s.id} style={{ margin: "1rem 0", borderBottom: "1px solid #222", paddingBottom: "1rem" }}>
            <h2 style={{ margin: 0 }}>
              <Link href={`/services/${s.id}`}>{s.name}</Link>
            </h2>
            <p style={{ margin: "0.5rem 0 0" }}>{s.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}