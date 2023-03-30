import { Link } from 'react-router-dom'
import { InfoTooltip } from '../shared/InfoTooltip'

export default () => {
  return (
    <div className="space-y-8 flex flex-col items-center animate-fadeIn text-center">
      <div>
        <p>Vi har gleden av å invitere dere til vårt bryllup lørdag 01.01.2024 klokken 16</p>
        <p className="text-sm">(Det settes pris på at alle inntar sine plasser senest 10 minutter før vielsen)</p>
      </div>

      <p className="font-bold text-xl">Vielsen finner sted i</p>
      <h2 className="font-italianno text-5xl text-orange-300">En Kirke</h2>

      <p className="font-bold text-xl">Middag arrangeres på</p>
      <h2 className="font-italianno text-5xl text-orange-300">En restaurant</h2>

      <p className="font-bold text-xl">Antrekk</p>
      <div className="flex items-center space-x-2">
        <h2 className="font-italianno text-5xl text-orange-300">Mørk Dress</h2>
        <InfoTooltip content="Menn: Mørk dress. Kvinner: Knelang eller lang kjole." />
      </div>

      <div>
        <p>
          Svar utbedes innen 01.01.2024
          <span className="underline ml-2 font-bold">
            <Link to="rsvp">her</Link>
          </span>
        </p>
        <p>Vennligst oppgi eventuelle allergier sammen med svaret.</p>
        <p>Vi håper du vil være med å feire den store dagen med oss.</p>
        <p>Varme klemmer fra brudeparet med foreldre.</p>
      </div>
    </div>
  )
}
