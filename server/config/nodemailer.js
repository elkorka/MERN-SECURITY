import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host : '',
    port : 587,
    auth : {
        user: process.env.SMTP_USER,
        user: process.env.SMTP_PASS,
    }
});


export default transporter ;