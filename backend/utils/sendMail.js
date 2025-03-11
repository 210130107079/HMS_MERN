import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure: true,
    auth: {
        user:'admnx130507@gmail.com',
        pass:'azdg yvyu hulr zidj'    
    }
})

export async function sendMail(email,firstName){
    const info = await transporter.sendMail({
    from:process.env.ADMIN_EMAIL,
    to: email,
    subject: "Successful Registration",
    html: `<!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Registration Successful</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #333;
                            text-align: center;
                        }
                        p {
                            color: #555;
                            font-size: 16px;
                            line-height: 1.5;
                        }
                        .button {
                            display: block;
                            width: 200px;
                            text-align: center;
                            background-color: #28a745;
                            color: #ffffff;
                            padding: 12px;
                            border-radius: 5px;
                            text-decoration: none;
                            font-size: 16px;
                            margin: 20px auto;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            font-size: 14px;
                            color: #777;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>Registration Successful 🎉</h2>
                        <p>Dear ${firstName},</p>
                        <p>Congratulations! You have successfully registered on our platform. We are excited to have you on board.</p>
                        <p>You can now log in and start exploring our features.</p>
                        <p>If you have any questions, feel free to contact our support team.</p>
                        <p class="footer">Thank you for joining us! <br> &copy; 2025 HMS9898. All rights reserved.</p>
                    </div>
                </body>
                </html>
                `,
    });
}