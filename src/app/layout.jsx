import './globals.css'
import { Inter } from 'next/font/google'
import { AnimatedLink } from '@/components/AnimatedLink'
import { Theme } from '@/components/Theme'
import { Timer } from '@/components/Timer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TransitionGround',
  description: 'Copy and paste your favorite transition view animation',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className + 'mx-auto dark:bg-zinc-900'}>
        <header className='flex items-center pt-12 flex-col w-full justify-center'>
          <AnimatedLink href='/'>
            <h1 className='font-bold text-3xl text-blue-400 text-center'>Transitionground</h1>
          </AnimatedLink>
          <Theme />
          <Timer />
        </header>
        <main className="flex flex-col m-auto items-center justify-center p-3 pt-6 w-full sm:p-24 sm:pt-8 max-w-4xl">
          {children}
        </main>
        <footer className=' flex justify-center dark:text-sky-200'>
          <p>
            Desarrollado con 💚 por <a href="https://github.com/renansalazar" className='underline' target="_blank" rel="noreferrer">Renan Salazar</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
