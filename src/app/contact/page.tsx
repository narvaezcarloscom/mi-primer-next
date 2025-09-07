"use client";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Gracias ${name}, recibimos tu mensaje.`);
    setName(""); setEmail(""); setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" required />
      <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo" required />
      <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tu mensaje" required />
      <button type="submit" style={{ padding: "0.5rem 1rem", background: "#111", color: "#fff", border: "none", cursor: "pointer" }}>
        Enviar
      </button>
    </form>
  );
}
