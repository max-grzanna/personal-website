export default async function (req, res) {
  // eslint-disable-next-line global-require
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'max.grzanna.tech@gmail.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
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
