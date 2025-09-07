// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#111",
        padding: "1rem",
        display: "flex",
        gap: "1.5rem",
      }}
    >
      <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
      <Link href="/about-us" style={{ color: "#fff", textDecoration: "none" }}>
        About Us
      </Link>
      <Link href="/services" style={{ color: "#fff", textDecoration: "none" }}>
        Services
      </Link>
      <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}
