import nodemailer from 'nodemailer';

export default async function email(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      pass: process.env.NEXT_PUBLIC_CONTACT_PASS,
    }
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'contact@bestdrops.pl, kamil@bestdrops.pl, mizer@bestdrops.pl',
      subject: `BESTDROPS.PL - Support ${name}`,
      html: `<p>Masz nową wiadomość z formularza na stronie BESTDROPS.PL</p><br>
      <p><strong>Imię: </strong> ${name} </p><br>
      <p><strong>E-mail użytkownika: </strong> ${email} </p><br>
      <p><strong>Wiadomość: </strong> ${message} </p><br>
      `,
    });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}