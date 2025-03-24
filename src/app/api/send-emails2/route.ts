import { NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@getbrevo/brevo';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY || '');

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.subject = 'New Contact Form Submission';
    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.get('firstName')} ${formData.get('lastName')}</p>
          <p><strong>Email:</strong> ${formData.get('email')}</p>
          <p><strong>Phone:</strong> ${formData.get('phone')}</p>
          <p><strong>Location:</strong> ${formData.get('location')}</p>
          <p><strong>Job Interest:</strong> ${formData.get('job')}</p>
          <p><strong>Message:</strong> ${formData.get('message')}</p>
        </body>
      </html>
    `;

    sendSmtpEmail.sender = { name: 'Contact Form', email: 'noreply@yourdomain.com' };
    sendSmtpEmail.to = [{ email: formData.get('location') === 'Philadelphia' ? 'chantellebosier@batp.org' : 'chantellebosier@batp.org' }];
    sendSmtpEmail.replyTo = { email: formData.get('email') as string };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}