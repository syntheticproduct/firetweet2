var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'firetweetcs24@gmail.com',
    pass: 'goblinshark'
  }
});

var mailOptions = {
  from: 'firetweetcs24@gmail.com',
  to: 'camille.lambert@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


module.exports.transporter = 