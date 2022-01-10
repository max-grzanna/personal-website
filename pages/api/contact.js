import React from 'react';

export default function (req, res) {
  const password = process.env.PASSWORD;

  // eslint-disable-next-line global-require
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'max.grzanna.tech@gmail.com',
      pass: password,
    },
    secure: true,
  });

  const mailData = {
    from: 'max.grzanna.tech@gmail.com',
    to: 'grzannamax@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
  res.send();
}
