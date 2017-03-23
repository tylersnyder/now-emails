import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  service: process.env.SERVICE || 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD
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