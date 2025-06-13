import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { eglise, email } = body;

  if (!eglise || !email) {
    return new Response(JSON.stringify({ message: "Champs requis manquants" }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host : 'smtpout.secureserver.net',
    port : 587,
    secure: false, 
    auth: {
      user: process.env.GODADDY_USER,
      pass: process.env.GODADDY_PASS,
    },
  });

  try {
    
    await transporter.sendMail({
      from: `"Church+ Waitlist" <${process.env.GODADDY_USER}>`,
      to: process.env.GODADDY_USER,
      subject: "Nouvelle inscription à la waitlist Church+",
      text: `Eglise: ${eglise}\nEmail: ${email}`,
      html: `<p><strong>Eglise:</strong> ${eglise}</p><p><strong>Email:</strong> ${email}</p>`,
    });

    
    await transporter.sendMail({
      from: `"Church+ Team" <${process.env.GODADDY_USER}>`,
      to: email,
      subject: "Confirmation d'inscription à la version bêta Church+",
      text: `Bonjour ${eglise},

        Merci pour votre inscription à la version bêta de Church+ !
        Vous recevrez prochainement toutes les informations pour accéder à l'application en avant-première.

        Que Dieu vous bénisse,
        L'équipe Church+`,
      html: `<p>Bonjour <strong>${eglise}</strong>,</p>
<p>Merci pour votre inscription à la version bêta de <strong>Church+</strong> !<br/>
Vous recevrez prochainement toutes les informations pour accéder à l'application en avant-première.</p>
<p>Que Dieu vous bénisse,<br/>L'équipe Church+</p>`,
    });

    return new Response(JSON.stringify({ message: "Mail envoyé" }), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail:", error);
    return new Response(JSON.stringify({ message: "Erreur lors de l'envoi du mail" }), { status: 500 });
  }
}