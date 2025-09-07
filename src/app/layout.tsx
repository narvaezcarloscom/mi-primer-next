import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mi Primer Next.js",
  description: "Proyecto de prueba con estructura básica de páginas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "Mulish, sans-serif",
          minHeight: "100vh",       // 👇 pegamos el footer abajo
          display: "flex",
          flexDirection: "column",
          background: "#000",       // si tu contenido es oscuro, mantenemos coherencia
          color: "#fff",
        }}
      >
        <Navbar />
        <main style={{ padding: "2rem", flex: "1 0 auto" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
