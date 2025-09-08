// src/app/services/layout.tsx
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ minHeight: "50vh" }}>
      {children}
    </section>
  );
}