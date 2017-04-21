const Mailgun = require('mailgun').Mailgun;

module.exports.sendMail = (bodyText, recipents, callback) => {
  var mg = new Mailgun('key-9379c4aa11ce3ea8e13a3371b34fa770');
  mg.sendText('PictShare <noreply@androidappfactory.nl>', recipents,
    'I: Test mailtje',
    `Dit is een testmeeltje verzonden door mailgun.\nEn dit is de inhoud\n${bodyText}`,
    'noreply@androidappfactory.nl', {}, (err) => {
      if (err) {
        callback(`Oops Error: ${err}`);
      } else {
        callback('Mail sent successful');
      }
    });
}
