import * as functions from 'firebase-functions'
import nodemailer from 'nodemailer'

export const sendEmail = functions.https.onCall(async (data, context) => {
  const sendEmail = (text: string) =>
    nodemailer
      .createTransport({
        service: 'gmail',
        auth: {
          user: 'your@email.com',
          pass: 'your-password'
        }
      })
      .sendMail({
        from: 'your@email.com',
        to: 'other@email.com',
        subject: 'Some topic',
        text: text
      })

  try {
    sendEmail(data.text)
  } catch (error: any) {
    throw new functions.https.HttpsError('internal', error.message)
  }
})
