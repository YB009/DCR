const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'] }))

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, vehicle, message } = req.body || {}
  if(!name || !email || !message){
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  const text = `New website enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nService: ${service || '-'}\nVehicle: ${vehicle || '-'}\n\nMessage:\n${message}\n`

  const hasSMTP = !!process.env.SMTP_HOST

  if (hasSMTP) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: String(process.env.SMTP_SECURE || 'false') === 'true',
        auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
      })

      const info = await transporter.sendMail({
        from: process.env.CONTACT_FROM || 'website@dcr-autoelectrics.co.uk',
        to: process.env.CONTACT_TO || 'owner@dcr-autoelectrics.co.uk',
        subject: 'New enquiry — DCR Auto Electrics',
        text
      })
      return res.json({ ok: true, id: info.messageId })
    } catch (err) {
      console.error('Email send failed:', err)
      return res.status(500).json({ error: 'Failed to send email.' })
    }
  } else {
    console.log('\n— New enquiry —\n' + text)
    return res.json({ ok: true, note: 'No SMTP configured; logged to server.' })
  }
})

// Serve client in production
if (process.env.NODE_ENV === 'production') {
  const dist = path.resolve(__dirname, '../client/dist')
  app.use(express.static(dist))
  app.get('*', (_, res) => res.sendFile(path.join(dist, 'index.html')))
}

app.listen(PORT, () => console.log(`API listening on :${PORT}`))