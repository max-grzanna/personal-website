export default function (req, res) {
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
  const mailData = {
    from: 'max.grzanna.tech@gmail.com',
    to: 'grzannamax@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
  res.send();
}
