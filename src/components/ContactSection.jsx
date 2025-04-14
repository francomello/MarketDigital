import { useState } from "react";

export default function ContactSection() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { nombre, email, mensaje };

    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Mensaje enviado correctamente");
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        alert("❌ Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Falló la conexión con el servidor");
    }
  };

  return (
    <section id="contacto" className="relative z-10 py-28 px-6 bg-black text-center text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-md-blue-light mb-6">📬 Contactanos</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/10 backdrop-blur text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/10 backdrop-blur text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Tu mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            rows="5"
            className="p-3 rounded-lg bg-white/10 backdrop-blur text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
