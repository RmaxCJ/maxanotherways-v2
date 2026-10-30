"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const telefono = (formData.get("telefono") as string) || "No proporcionado";
  const mensaje = formData.get("mensaje") as string;

  try {
    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: ["rogelio_max@hotmail.com"], // Tu correo destino
      subject: `Nuevo contacto desde el Portafolio: ${nombre}`,
      replyTo: email,
      // PLANTILLA HTML ELEGANTE
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0d1520; color: #ffffff; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #101924; border: 1px solid #22364a; border-radius: 16px; padding: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
              .header { border-b: 1px solid #22364a; padding-bottom: 16px; margin-bottom: 20px; }
              .title { color: #81ECF2; font-size: 20px; font-weight: bold; margin: 0; text-transform: uppercase; tracking-spacing: 1px; }
              .field { margin-bottom: 16px; }
              .label { font-size: 11px; text-transform: uppercase; color: #81ECF2; font-weight: bold; letter-spacing: 0.5px; }
              .value { font-size: 14px; color: #e2e8f0; margin-top: 4px; }
              .message-box { background: #172331; border: 1px solid #283d52; border-radius: 12px; padding: 16px; margin-top: 8px; white-space: pre-wrap; font-size: 14px; color: #ffffff; }
              .footer { border-top: 1px solid #22364a; margin-top: 24px; pt: 16px; font-size: 11px; color: #64748b; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 class="title">🚀 Nuevo Mensaje de Contacto</h2>
              </div>
              
              <div class="field">
                <div class="label">Nombre</div>
                <div class="value"><strong>${nombre}</strong></div>
              </div>

              <div class="field">
                <div class="label">Correo Electrónico</div>
                <div class="value"><a href="mailto:${email}" style="color: #81ECF2; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <div class="label">Teléfono / WhatsApp</div>
                <div class="value">${telefono !== "No proporcionado" ? `<a href="https://wa.me/${telefono.replace(/[^0-9]/g, "")}" target="_blank" style="color: #81ECF2; text-decoration: none;">${telefono} 📱 (Abrir WhatsApp)</a>` : telefono}</div>
              </div>

              <div class="field">
                <div class="label">Mensaje</div>
                <div class="message-box">${mensaje}</div>
              </div>

              <div class="footer">
                Enviado automáticamente desde maxanotherways.vercel.app
              </div>
            </div>
          </body>
        </html>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Error al enviar email:", error);
    return { success: false };
  }
}
