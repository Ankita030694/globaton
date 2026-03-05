import nodemailer from "nodemailer";
import path from "path";

const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
    },
});

export async function sendConsultationEmail(name: string, email: string) {
    const pdfPath = path.join(process.cwd(), "public", "Founders Compliance Checklist for 2026.pdf");

    await transporter.sendMail({
        from: `"Globaton" <${process.env.ZOHO_EMAIL}>`,
        to: email,
        subject: "Your Founder's Compliance Checklist (+ a small surprise)",
        html: `
      <div style="font-family: Arial, sans-serif; font-size: 15px; color: #222; max-width: 600px;">
        <p>Hi ${name},</p>

        <p>Starting a business is hard. Keeping it legal shouldn't be.</p>

        <p>
          You've just taken the first step toward building a bulletproof foundation for your company.
          You can access your copy of the <strong>2026 Founder's Bulletproof Compliance Checklist</strong> here
          <em>(See Attached)</em>.
        </p>

        <p>
          A quick tip: If you incorporated in the last 30 days, your most urgent task is the
          <strong>Appointment of the First Auditor</strong>. Missing this one deadline can lead to
          complications with the ROC before you've even made your first sale.
        </p>

        <p>
          If you're feeling overwhelmed by the paperwork, don't worry &mdash; that's exactly why we built Globaton.
        </p>

        <br/>
        <p>Warm regards,<br/><strong>Team Globaton</strong></p>
      </div>
    `,
        attachments: [
            {
                filename: "2026-Founders-Compliance-Checklist.pdf",
                path: pdfPath,
            },
        ],
    });
}
