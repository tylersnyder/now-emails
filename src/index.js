import micro, { send } from 'micro'
import { parse } from 'url'
import { sendMail } from './util'

const server = micro(async(req, res) => {
  try {
    const { query } = parse(req.url, true)
    const { to, subject, text, html } = query

    if (!to) {
      throw new Error('missing to address')
    }
    
    if (!subject) {
      throw new Error('missing subect')
    }
    
    if (!text && !html) {
      throw new Error('missing text and html')
    }

    const from = query.from || process.env.AUTH_EMAIL
    
    const options = {
      from,
      to,
      subject,
      text,
      html
    }

    const info = await sendMail(options)
    send(res, 200, info.response)
  } catch(err) {
    send(res, 200, err.message)
  }
})

server.listen(3000)
console.log('listening on port 3000')
