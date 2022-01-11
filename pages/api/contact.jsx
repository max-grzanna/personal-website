export default async function (req, res) {
  // eslint-disable-next-line global-require
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'max.grzanna.tech@gmail.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take messages');
        resolve(success);
      }
    });
  });
  const mailData = {
    from: 'max.grzanna.tech@gmail.com',
    to: 'grzannamax@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) reject(err);
      else {
        res.status(200).json({ status: 'OK' });
        res.send();
        resolve(info);
      }
    });
  });
}
