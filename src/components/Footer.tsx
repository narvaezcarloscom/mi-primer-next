export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "1rem",
        background: "#f1f1f1",
        textAlign: "center",
        color: "#111",              // 👈 texto oscuro para que contraste
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <p>© {new Date().getFullYear()} NarvaezCarlos. Todos los derechos reservados.</p>
    </footer>
  );
}
