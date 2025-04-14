import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos pagos con tarjeta, transferencia, efectivo, criptomonedas y cuotas sin interés según promociones vigentes.",
  },
  {
    question: "¿Puedo comprar al por mayor?",
    answer: "¡Sí! Tenemos precios mayoristas y promociones especiales según cantidad. Consultanos para más info.",
  },
  {
    question: "¿Realizan envíos a todo el país?",
    answer: "Hacemos envíos a todo Argentina por correo o moto express en CABA y alrededores.",
  },
  {
    question: "¿Cómo puedo saber si un producto está en stock?",
    answer: "Todos los productos disponibles se actualizan en tiempo real. Si tenés dudas, podés consultarnos directamente por WhatsApp.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 py-24 px-6 text-center bg-black">
      <h2 className="text-4xl font-extrabold text-md-blue-light mb-12">Preguntas Frecuentes</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-cyan-400/20 rounded-xl bg-white/5 backdrop-blur-lg overflow-hidden shadow-lg hover:border-cyan-300 transition-all"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-6 py-4 text-lg font-semibold text-md-blue-pastel hover:text-cyan-300 transition flex justify-between items-center"
            >
              {item.question}
              <span className="ml-2 text-cyan-400">{openIndex === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-left text-white text-sm"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
