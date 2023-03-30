import { useFetcher } from '@remix-run/react'
import { sendEmail } from '~/services/mailService'

const textFieldClass = 'rounded-lg border border-green-900'

export const action = async ({ request }: { request: Request }) => {
  try {
    const formData = await request.formData()
    const name = formData.get('name')
    const info = formData.get('info')
    const rsvp = formData.get('rsvp')
    const song = formData.get('song')
    const overnatting = formData.get('overnatting')
    const transport = formData.get('transport')

    sendEmail(`RSVP fra ${name}, info: ${info}, rsvp: ${rsvp}, song: ${song}, overnatting: ${overnatting}, transport: ${transport}`)

    return { result: rsvp === 'yes' ? 'yay' : 'nay' }
  } catch (error) {
    return { error }
  }
}

export default () => {
  const fetcher = useFetcher()

  return (
    <div className="animate-fadeIn">
      <fetcher.Form method="post" className="space-y-8 flex flex-col">
        {!fetcher.data && (
          <>
            <input type="text" required placeholder="Navn *" name="name" className={textFieldClass} />
            <input type="text" placeholder="Allergier eller andre hensyn?" name="info" className={textFieldClass} />
            <input type="text" placeholder="Sangønske for senere på kvelden? 💃🕺" name="song" className={textFieldClass} />
            <input type="email" placeholder="Epost adresse ved ønsket overnatting" name="overnatting" className={textFieldClass} />

            <div className="flex items-center space-x-2">
              <input type="checkbox" name="transport" />
              <p>Ønsker transport</p>
            </div>

            <div className="sm:flex sm:justify-around">
              <div>
                <input required type="radio" id="radioYes" name="rsvp" value="yes" />
                <label htmlFor="radioYes" className="ml-1 text-green-700">
                  Deltar med glede
                </label>
              </div>

              <div>
                <input required type="radio" id="radioNo" name="rsvp" value="no" />
                <label htmlFor="radioNo" className="ml-1 text-red-600">
                  Kan dessverre ikke komme
                </label>
              </div>
            </div>

            <button type="submit" disabled={fetcher.state === 'loading' || fetcher.state === 'submitting'} className="bg-gray-100 rounded-lg p-5">
              Send
            </button>
          </>
        )}

        {fetcher.data?.error && (
          <p className="p-5 bg-red-100 rounded-lg text-center animate-fadeIn">
            Huff da, her gikk visst noe galt! 😢 Du får sende oss en epost i stedet 👏
          </p>
        )}
        {fetcher.data?.result === 'nay' && (
          <p className="p-5 bg-green-900 rounded-lg text-center text-white animate-fadeIn">Så leit, men takk for din respons 😊</p>
        )}
        {fetcher.data?.result === 'yay' && (
          <p className="p-5 bg-green-900 rounded-lg text-center text-white animate-fadeIn">Hurra, vi gleder oss til å se deg/dere! 🥂</p>
        )}
      </fetcher.Form>
    </div>
  )
}
