const nodemailer = require("nodemailer");


const sendEmail= async (req, resp)=>{
    const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'bettye.bayer8@ethereal.email',
            pass: 'rTzYTTKsqcK5xPqvAS'
        }
    });

    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "ytsafik2@gmail.com", // list of receivers
        subject: "Hello  Safik Mahammad ✔", // Subject line
        text: "How are you wish u have a good journey", // plain text body
        html: "<b>Hello world?</b>", // html body
      });


      console.log("Message sent: %s", info.messageId);

    resp.json(info)
}
module.exports = sendEmail