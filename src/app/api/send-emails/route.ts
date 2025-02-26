
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phone, message, location } = req.body;

      // Map the selected location to a recipient email
      let recipient = '';
      switch (location) {
        case 'Bala Cynwyd Office':
          recipient = 'email1@example.com';
          break;
        case 'Philadelphia Office':
          recipient = 'email2@example.com';
          break;
        case 'South Philadelphia Satellite Office':
          recipient = 'email3@example.com';
          break;
        default:
          recipient = 'email4@example.com';
      }

      const msg = {
        to: recipient,
        from: process.env.SENDGRID_SENDER as string,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `Phone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
        // If you add file attachments later, process and add them here.
      };

      await sgMail.send(msg);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
