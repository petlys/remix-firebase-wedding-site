import { getFunctions, httpsCallable } from 'firebase/functions'

export const sendEmail = (text: string) => {
  return httpsCallable(getFunctions(), 'sendEmail')({ text })
}
