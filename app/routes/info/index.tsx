import hotelSrc from '~/images/scandic.jpeg'
import planSrc from '~/images/plan.jpg'

export default () => (
  <div className="space-y-8 text-center animate-fadeIn">
    <img src={hotelSrc} alt="hotel" className="rounded-lg" />

    <p className="font-bold text-4xl text-orange-300 font-italianno">Middag</p>
    <p>
      Etter vielse bærer det videre til et hotell hvor vi nyter velkomstdrink og koser oss med litt billedtaking og mingling før middag rundt 1830.
    </p>

    <p className="font-bold text-4xl text-orange-300 font-italianno">Toastmaster</p>
    <p>Dersom du ønsker å tegne deg på talelisten eller vil bidra med sang eller annet, ta kontakt med toastmaster Ola Normann på tlf 999 99 999.</p>

    <p className="font-bold text-4xl text-orange-300 font-italianno">Parkering</p>
    <p>Det er både gratis uteparkering nedenfor hotellet, samt betalt parkering i parkeringshus under hotellet.</p>

    <p className="font-bold text-4xl text-orange-300 font-italianno">Overnatting</p>
    <p>
      For de som ønsker overnatting tilbyr hotellet rom for 1750 kr inkludert frokost. Vennligst oppgi om du ønsker det under RSVP, så tar bruden
      kontakt med deg.
    </p>

    <img src={planSrc} alt="plan" />
  </div>
)
