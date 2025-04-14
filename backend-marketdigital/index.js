import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import contactRoute from "./contact.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Necesario para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Ruta raíz
app.get("/", (req, res) => {
  res.send("✅ Backend de MarketDigital funcionando correctamente.");
});

// Ruta para suscripción
app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  console.log("📩 Nuevo suscriptor:", email);

  // Acá podrías guardar en una base de datos, enviar email, etc.

  // Redireccionar a página de agradecimiento
  res.redirect("/thankyou.html");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});


app.use(cors());
app.use(express.json());

app.use("/api", contactRoute);

app.listen(3001, () => {
  console.log("Servidor backend en http://localhost:3001");
});

