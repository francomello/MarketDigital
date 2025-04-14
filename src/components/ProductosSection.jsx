// src/components/ProductosSection.jsx

import React from "react";
import { motion } from "framer-motion";
import botellaImg from "../assets/botella_refill.png";
import igniteV250Img from "../assets/ignite_v250.png";
import igniteV150Img from "../assets/ignite_v150pro.png";
import stanleyImg from "../assets/vaso_stanley.png";

const productos = [
  {
    nombre: "Botella Refill 1Lt",
    precioUSD: 12,
    descripcion: "Disponible en varios degradé. Con sabores para elegir.",
    imagen: botellaImg,
  },
  {
    nombre: "Ignite V250 😮‍💨",
    precioUSD: 25,
    descripcion: "Sabores intensos, gran duración. Pack desde 3 unidades con descuento.",
    imagen: igniteV250Img,
  },
  {
    nombre: "Ignite V150 PRO 🥷🔥",
    precioUSD: 18,
    descripcion: "Tecnología PRO con sabores premium. ¡Consultá por precios mayoristas!",
    imagen: igniteV150Img,
  },
  {
    nombre: "Quencher Stanley 1.2Lt ‼️",
    precioUSD: 20,
    descripcion: "El vaso térmico más resistente. Ideal para todo el día.",
    imagen: stanleyImg,
  },
];

export default function ProductosSection() {
  return (
    <section id="productos" className="relative z-10 py-28 px-6 bg-black text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-md-blue-light mb-6">Nuestros Productos</h2>
        <p className="text-md-blue-pastel mb-10">
          Precios en dólares. Si deseás pagar en pesos, se toma la cotización del dólar blue del día 💱.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {productos.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 text-left backdrop-blur-md shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={prod.imagen}
                alt={prod.nombre}
                className="w-full max-h-64 object-contain mx-auto mb-4 drop-shadow-md"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{prod.nombre}</h3>
              <p className="text-md-blue-pastel mb-2">{prod.descripcion}</p>
              <p className="text-cyan-400 font-semibold text-lg">💲USD {prod.precioUSD}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
