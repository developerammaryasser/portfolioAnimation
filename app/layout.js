import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Ammar portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-neutral-300 bg-neutral-950 overflow-x-hidden ${inter.className}`}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Navbar />
        <main className='h-fit'>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
