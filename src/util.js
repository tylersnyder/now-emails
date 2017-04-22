const { createTransport } = require('nodemailer')
const { SERVICE_PROVIDER, AUTH_EMAIL, AUTH_PASSWORD } = process.env

const transport = createTransport({
  service: SERVICE_PROVIDER || 'Gmail',
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASSWORD
  }
})

module.exports.sendMail = sendMail

function sendMail(options) {
  return new Promise(resolve => (
    transport.sendMail(options, (err, info) => {
      if (err) {
        throw err
      }

      resolve(info)
    })
  )
)}