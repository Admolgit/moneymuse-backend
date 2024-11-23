import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string, html?: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: `"MoneyMuse" <${process.env.EMAIL_USER}>`, // Sender email
        to,
        subject,
        text,
        html, // Optional: for HTML-formatted emails
      });
      console.log(`Email sent to ${to}`);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}