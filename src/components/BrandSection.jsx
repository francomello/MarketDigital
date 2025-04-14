import { motion } from "framer-motion";
import { LightBulbIcon, UsersIcon, GlobeAltIcon, BoltIcon, ChatBubbleBottomCenterTextIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const brandInfo = [
  {
    title: "Innovación Constante",
    description: "Siempre buscamos lo nuevo para traértelo primero.",
    icon: LightBulbIcon,
  },
  {
    title: "Cultura Digital",
    description: "Somos una comunidad joven, real y conectada.",
    icon: UsersIcon,
  },
  {
    title: "Alcance Global",
    description: "No hay límites, llevamos tu estilo a donde estés.",
    icon: GlobeAltIcon,
  },
];

const benefits = [
  {
    title: "Atención 24/7",
    description: "Siempre disponibles para ayudarte.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Envíos rápidos",
    description: "Llega a tu casa en menos de 24hs.",
    icon: BoltIcon,
  },
  {
    title: "Productos originales",
    description: "100% confiables y certificados.",
    icon: ShieldCheckIcon,
  },
];

export default function BrandSection() {
  return (
    <>
      <section className="section-padding text-white bg-md-blue-dark">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Quiénes somos?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-md-blue-pastel mb-10"
          >
            MarketDigital no es solo una tienda, es una forma de vivir lo digital.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {brandInfo.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-left"
              >
                <Icon className="w-10 h-10 text-md-blue-pastel mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-md-blue-pastel">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding text-white bg-md-dark">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Por qué elegirnos?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-left"
              >
                <Icon className="w-10 h-10 text-md-blue-pastel mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-md-blue-pastel">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}