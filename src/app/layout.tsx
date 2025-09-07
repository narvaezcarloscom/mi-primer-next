import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Mi Primer Next.js",
  description: "Proyecto de prueba con estructura básica de páginas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Mulish, sans-serif" }}>
        {/* Navbar */}
        <nav style={{
          background: "#111",
          padding: "1rem",
          display: "flex",
          gap: "1.5rem"
        }}>
          <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
          <Link href="/about-us" style={{ color: "#fff", textDecoration: "none" }}>About Us</Link>
          <Link href="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
          <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </nav>

        {/* Contenido dinámico */}
        <main style={{ padding: "2rem" }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{
          marginTop: "3rem",
          padding: "1rem",
          background: "#f1f1f1",
          textAlign: "center"
        }}>
          <p>© {new Date().getFullYear()} NarvaezCarlos. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
