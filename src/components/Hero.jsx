import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-md-dark text-white h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Bienvenido a MarketDigital
        </h1>
        <p className="text-lg md:text-xl text-md-blue-pastel animate-fade-in">
          El futuro del consumo digital está acá
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="btn-primary mt-6"
        >
          Conocé más
        </motion.button>
      </motion.div>

      <div className="absolute inset-0 z-0">
        <div className="gradient-animate w-full h-full opacity-10" />
      </div>
    </section>
  );
}