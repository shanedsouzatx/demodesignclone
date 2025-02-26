import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Include cvBase64 along with other fields.
      const { firstName, lastName, email, phone, message, location, address, jobRole, cvBase64 } = req.body;

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

      // Construct email text including additional fields
      const emailText = `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Address: ${address}
Job Role: ${jobRole}
Location: ${location}
Message: ${message}
      `;

      // Build the message object, adding attachments if cvBase64 is provided.
      const msg: any = {
        to: recipient,
        from: process.env.SENDGRID_SENDER as string,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: emailText,
      };

      if (cvBase64) {
        msg.attachments = [
          {
            content: cvBase64, // Base64 encoded file content
            filename: 'cv.pdf', // Adjust filename and extension as needed
            type: 'application/pdf', // Adjust MIME type if necessary
            disposition: 'attachment',
          },
        ];
      }

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
