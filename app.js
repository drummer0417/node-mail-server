const mailHelper = require('./util/mailHelper');

var recipents = ['drummer0417@gmail.com', 'hans.vanmeurs@gmail.com'];
var bodyText = 'Stukje meel. Doe er iets leuks mee\n\nTot ziens!!\n\nKind regards,\nHans';

console.log('before call to mailHelper');
mailHelper.sendMail(bodyText, recipents, (result) => {
  console.log(result);
});
console.log('after call to mailHelper');
