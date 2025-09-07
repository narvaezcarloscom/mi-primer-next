export default function ContactTemplate({
  children,
}: { children: React.ReactNode }) {
  return (
    <section style={{
      maxWidth: 600,
      margin: "2rem auto",
      padding: "2rem",
      border: "1px solid #ddd",
      borderRadius: 8,
      background: "#fff",
      color: "#111"
    }}>
      <h2 style={{ marginBottom: "1rem" }}>📩 Contáctanos</h2>
      {children}
    </section>
  );
}
