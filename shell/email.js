const nodemailer = require('nodemailer');
const dayjs = require('dayjs');
const argv = require('minimist')(process.argv.slice(2));

let transporter = nodemailer.createTransport({
  host:'smtp.exmail.qq.com',
  port: 465,
  secureConnection: true,
  auth: {
    user: 'service@wangxuedong.com',
    pass: argv.pass,
  }
});

const html = `
网站于<b>${dayjs().format('YYYY年MM月DD日 HH:mm:ss')}</b>部署成功。
`

let mailOptions = {
  from: '"Service" <service@wangxuedong.com>',
  to: 'email@wangxuedong.com',
  subject: '网站部署成功通知',
  html
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});