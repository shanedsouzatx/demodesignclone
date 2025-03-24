import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getRecipientEmail } from '@/components/Contact/emailMapping';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const recipientEmail = getRecipientEmail(
      formData.get('location') as string,
      formData.get('job') as string
    );

    // Create email content
    const emailContent = `
      New Contact Form Submission

      Name: ${formData.get('firstName')} ${formData.get('lastName')}
      Email: ${formData.get('email')}
      Phone: ${formData.get('phone')}
      Location: ${formData.get('location')}
      Job Interest: ${formData.get('job')}
      Message: ${formData.get('message')}
    `;

    // Configure email transport
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: 'New Contact Form Submission',
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}