import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'

// const roboto = Roboto({ weight: '100', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "Aaron McMahan",
  description: 'Some ramblings of a software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"max-w-screen-md px-10 mx-auto " + inter.className}>
        <Header />
        <main id='content'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
