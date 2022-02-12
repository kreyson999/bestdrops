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
      from: `"BESTDROPS.PL Support" <${email}>`,
      to: 'contact@bestdrops.pl, kamil@bestdrops.pl, mizer@bestdrops.pl',
      subject: `Nowa wiadomość od: ${name}`,
      html: `<p>Masz nową wiadomość z formularza na stronie BESTDROPS.PL</p>
      <p><strong>Imię: </strong> ${name} </p>
      <p><strong>E-mail użytkownika: </strong> ${email} </p><br>
      <p><strong>Wiadomość: </strong> ${message} </p><br>
      `,
    });
    console.log(emailRes)
    console.log('Message Sent');
    res.status(200).json(emailRes);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
}