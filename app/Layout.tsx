import { Link, NavLink } from '@remix-run/react'
import flowerBlue from './images/flower-blue.png'

export const Layout = ({ children }: { children: any }) => (
  <div className="sm:px-10 px-5 py-20 max-w-2xl m-auto animate-fadeIn">
    <img src={flowerBlue} alt="flower" className="sm:w-[30vw] w-[50vw] absolute top-0 right-0" />
    <img src={flowerBlue} alt="flower" className="sm:w-[30vw] w-[50vw] absolute -top-4 left-0 -rotate-90" />

    <Link to="/">
      <h1 className="font-italianno sm:text-8xl text-7xl text-center mb-10 text-cyan-900">Kari & Ola 01/01/24</h1>
    </Link>

    <div className="w-full flex justify-around my-10 bg-gray-100 text-cyan-800 p-5 rounded-xl sm:text-base text-sm font-sans">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'border-b-2 border-green-900 font-bold' : '')}>
        Hjem
      </NavLink>

      <NavLink to="info" className={({ isActive }) => (isActive ? 'border-b-2 border-green-900 font-bold' : '')}>
        Praktisk
      </NavLink>

      <NavLink to="rsvp" className={({ isActive }) => (isActive ? 'border-b-2 border-green-900 font-bold' : '')}>
        RSVP
      </NavLink>

      <NavLink to="wishlist" className={({ isActive }) => (isActive ? 'border-b-2 border-green-900 font-bold' : '')}>
        Ønskeliste
      </NavLink>
    </div>

    {children}
  </div>
)
