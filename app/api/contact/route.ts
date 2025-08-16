import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const nodemailer = (await import("nodemailer")).default;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Must be your Gmail
      replyTo: email,               // So replies go to the visitor
      to: process.env.EMAIL_USER,   // You receive mail here
      subject: `Portfolio Contact Form - Message from ${name}`,
      text: `
📩 New Contact Form Submission:

Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "❌ Failed to send email." },
      { status: 500 }
    );
  }
}
