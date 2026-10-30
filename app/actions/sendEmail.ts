"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const mensaje = formData.get("mensaje") as string;

  try {
    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: ["rogelio_max@hotmail.com"], // Tu correo destino
      subject: `Nuevo contacto desde el Portafolio: ${nombre}`,
      replyTo: email,
      text: `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
    });
    return { success: true };
  } catch (error) {
    console.error("Error al enviar email:", error);
    return { success: false };
  }
}
