import type { MetaFunction, LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { initializeApp } from 'firebase/app'
import { Layout } from './Layout'
import stylesheet from '~/index.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }]

initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  databaseURL: ''
})

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Wedding!',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
