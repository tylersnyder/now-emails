import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  service: process.env.SERVICE || 'Gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD
  }
})

export const sendMail = (options) => {
  return new Promise(resolve => (
    transport.sendMail(options, (err, info) => {
      if (err) {
        throw err
      }

      resolve(info)
    })
  )
)}