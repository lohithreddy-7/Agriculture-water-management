import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lohithreddyg2004@gmail.com',
    pass: process.env.email_pass
  }
});

export const sendEmail = async (subject, text) => {
  const mailOptions = {
    from: 'lohithreddyg2004@gmail.com',
    to: 'lohithreddyg2004@gmail.com',
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};