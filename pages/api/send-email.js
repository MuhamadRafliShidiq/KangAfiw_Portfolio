
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    try {
        // Konfigurasi transportasi email
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Sesuaikan dengan provider email
            auth: {
                user: 'ainadanshidiq@gmail.com', // Ganti dengan email kamu
                pass: 'veyllapdowizpxwh', // Ganti dengan password email kamu (gunakan App Password jika perlu)
            },
        });

        // Kirim email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'ainadanshidiq@gmail.com', // Ganti dengan email tujuan (email kamu)
            subject: subject,
            text: message,
        });

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });

    }
}