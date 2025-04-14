// contact.js
import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tucorreo@gmail.com",
        pass: "tu_app_password_seguro",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "tucorreo@gmail.com",
      subject: `Nuevo mensaje de ${nombre}`,
      text: mensaje,
    });

    res.status(200).json({ success: true, message: "Correo enviado exitosamente" });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
});

export default router;
