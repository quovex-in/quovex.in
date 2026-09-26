import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, company, service, timeline, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: email,
        to: process.env.GMAIL_USER,
        subject: `New QuoVex enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nFocus: ${service || 'Not provided'}\nTimeline: ${timeline || 'Not provided'}\n\nProject context:\n${message}`
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false });
    }
  }
  res.status(405).json({ error: 'Method not allowed' });
}
