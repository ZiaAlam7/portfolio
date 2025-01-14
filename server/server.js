require('dotenv').config();
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
    origin: ['https://ziaalam.vercel.app'],
    methods: ['GET', 'POST']
  };


app.use(bodyParser.json());
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'codetime38@gmail.com',
        to: 'ziaalam.dev@gmail.com',
        subject: 'New Message Portfolio Form',
        text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
        html: `
        <p><strong>Name:</strong> <span style="color: #4169E1;">${name}</span></p>
        <p><strong>Email:</strong> <span style="color: #4169E1;">${email}</span></p>
        <p><strong>Message:</strong> <span style="color: #4169E1;">${message}</span></p>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email', error });
        }
        res.status(200).json({ message: 'Email sent successfully!', info });
    });
});

app.get('/', (req, res) =>{
    res.json('Server is Running')
})


app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
});
