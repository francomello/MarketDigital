import { useEffect, useRef } from "react";
import { loadBasic } from "tsparticles-basic";
import Particles from "react-tsparticles";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import img_hero from "./assets/logo_market_3d.png";
import ilustracion from "./assets/futuristic_illustration.png";
import ThreeDHeader from "./components/ThreeDHeader";
import ContactSection from "./components/ContactSection";
import ProductosSection from "./components/ProductosSection";
import HeaderLinks from "./components/HeaderLinks";
import HamburgerMenu from "./components/HamburgerMenu";
import FAQSection from "./components/FAQSection";
import { useState } from "react";


export default function App() {
  const tiltRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const particlesInit = async (engine) => {
    await loadBasic(engine);
  };

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          background: { color: "#000" },
          fpsLimit: 60,
          particles: {
            number: { value: 150 },
            color: { value: "#7ab3d8" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 2 },
            move: {
              enable: true,
              direction: "bottom",
              speed: 0.3,
              outModes: { default: "out" },
            },
          },
        }}
      />

      <ThreeDHeader />

      <section id="inicio" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <img ref={tiltRef} src={img_hero} alt="MarketDigital Logo" className="w-72 md:w-96 mb-8" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-md-blue-light">Bienvenido a MarketDigital</h1>
        <p className="text-md-blue-pastel mt-4 text-lg md:text-xl max-w-xl">Tu conexión con el futuro de las compras digitales.</p>
      </section>

      <ProductosSection />

      <section id="sobre-market" className="relative z-10 py-24 px-6 bg-black text-center md:text-left">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-md-blue-light mb-6">🧠 Sobre MarketDigital</h2>
            <p className="text-md-blue-pastel text-lg md:text-xl mb-6 leading-relaxed">
              En MarketDigital no vendemos solo productos. <strong>Creamos una experiencia.</strong><br /><br />
              Nacimos con una visión clara: <strong>cambiar la forma en que las personas se conectan con la tecnología</strong>.<br /><br />
              Nuestro enfoque no es tradicional. Mezclamos diseño, velocidad y evolución constante para ofrecerte algo único.<br /><br />
              No somos una tienda más, <strong>somos una plataforma viva, que se adapta, que aprende y que crece con vos</strong>.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full h-64 bg-gradient-to-br from-cyan-400/20 to-cyan-300/10 rounded-xl backdrop-blur-xl border border-cyan-400/20 shadow-inner flex items-center justify-center"
            >
              <p className="text-md-blue-pastel text-lg italic">“Think beyond the screen.”</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full rounded-2xl bg-white/10 backdrop-blur-lg border border-cyan-400/30 p-6 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl text-white font-semibold mb-2">🌐 Una experiencia inmersiva</h3>
              <p className="text-md-blue-pastel">
                Cada sección, cada animación, cada detalle... está pensado para llevarte a un futuro donde comprar no es una tarea: es una experiencia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisor Futurista */}
      <div className="relative w-full h-32 flex items-center justify-center overflow-hidden z-10">
        <div className="absolute top-1/2 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-white to-cyan-500 animate-glowline" />
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      </div>


      {/* BENEFICIOS */}
      <section className="relative z-10 py-20 px-6" id="beneficios">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-md-blue-light mb-12">¿Por qué elegir MarketDigital?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {[
              { emoji: "🚀", title: "Entregas Rápidas", desc: "Recibí tus productos en tiempo récord, estés donde estés." },
              { emoji: "🛡️", title: "Garantía Digital", desc: "Productos certificados con garantía y soporte personalizado." },
              { emoji: "🌐", title: "Tecnología Global", desc: "Accedé a lo último en tecnología de todo el mundo." },
              { emoji: "💳", title: "Pagos Flexibles", desc: "Pagá como quieras: cuotas, transferencias o cripto." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative w-full p-8 min-h-[160px] flex flex-col justify-center text-left rounded-2xl bg-white/5 border border-cyan-400/30 backdrop-blur-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border-cyan-300 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 z-0 rounded-2xl bg-cyan-400/10 opacity-0 group-hover:opacity-10 transition-all duration-300 blur-2xl" />
                <h3 className="text-2xl font-semibold text-white mb-2 z-10 relative">{item.emoji} {item.title}</h3>
                <p className="text-md-blue-pastel z-10 relative">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="relative w-full h-32 flex items-center justify-center overflow-hidden z-10">
        <div className="absolute top-1/2 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-white to-cyan-500 animate-glowline" />
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      </div>

      {/* SECCIÓN VISUAL + TEXTO */}
      <section className="relative z-10 py-28 px-6 bg-black text-center md:text-left" id="vision">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-md-blue-light mb-6">
              El Futuro Está Aquí
            </h2>
            <p className="text-md-blue-pastel text-lg md:text-xl mb-8">
              MarketDigital no es solo un emprendimiento, es una revolución en la forma de comprar. Conectamos innovación, velocidad y estilo digital en una experiencia única.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/10 backdrop-blur-lg border border-cyan-400/30 p-6 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl text-white font-semibold mb-2">🌌 Todo en un solo lugar</h3>
              <p className="text-md-blue-pastel">
                Desde lo más nuevo en tecnología hasta productos que expresan tu estilo digital. Navegá sin límites.
              </p>
            </motion.div>
          </motion.div>

          <motion.img
            src={ilustracion}
            alt="Futuro Digital"
            className="w-full max-w-md mx-auto rounded-xl shadow-xl border border-cyan-400/30"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </section>
      {/* DIVISOR */}
      <div className="relative w-full h-32 flex items-center justify-center overflow-hidden z-10">
        <div className="absolute top-1/2 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-white to-cyan-500 animate-glowline" />
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      <FAQSection />
      {/* DIVISOR */}
      <div className="relative w-full h-32 flex items-center justify-center overflow-hidden z-10">
        <div className="absolute top-1/2 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-white to-cyan-500 animate-glowline" />
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      <ContactSection />
      {/* FOOTER */}
      <footer
        className="relative z-10 bg-black border-t border-cyan-500/20 pt-20 pb-10 px-6 text-white"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2013/07/12/15/37/space-149736_1280.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* LOGO + DESCRIPCIÓN */}
          <div>
            <img src={img_hero} alt="MarketDigital Logo" className="w-24 mx-auto md:mx-0 mb-4" />
            <p className="text-md-blue-pastel text-sm">
              MarketDigital es la evolución del comercio digital. Conectamos tecnología, velocidad y experiencia.
            </p>
          </div>

          {/* FORMULARIO DE SUSCRIPCIÓN */}
          <div>
            <h4 className="text-md-blue-light font-bold mb-4">Suscribite al Boletín</h4>
            <form action="http://localhost:4000/subscribe" method="POST" className="flex flex-col items-center md:items-start gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Tu email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-cyan-500 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
              <button
                type="submit"
                className="bg-cyan-500 text-black px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition"
              >
                Suscribirme
              </button>
            </form>
          </div>

          {/* CONTACTO + REDES */}
          <div>
            <h4 className="text-md-blue-light font-bold mb-4">Contacto</h4>
            <p className="text-md-blue-pastel text-sm">Email: contacto@marketdigital.com</p>
            <p className="text-md-blue-pastel text-sm">WhatsApp: +54 9 11 5555 1234</p>

            <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
              {[
                { icon: "🌐", href: "https://marketdigital.com" },
                { icon: "📷", href: "https://instagram.com" },
                { icon: "🎥", href: "https://tiktok.com" },
                { icon: "📘", href: "https://facebook.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-transform transform hover:scale-125"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea y créditos */}
        <div className="mt-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-glowline" />
        <p className="text-center text-xs text-md-blue-pastel mt-4">
          © {new Date().getFullYear()} MarketDigital. Todos los derechos reservados.
        </p>
      </footer>

      <style>{`
        .text-md-blue-light { color: #7ab3d8; }
        .text-md-blue-pastel { color: #cbe8ff; }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes glowline {
          0% { transform: scaleX(0); opacity: 0.2; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0.2; }
        }
        .animate-glowline {
          animation: glowline 6s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}

