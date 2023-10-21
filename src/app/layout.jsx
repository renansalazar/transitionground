import './globals.css'
import { Inter } from 'next/font/google'
import { AnimatedLink } from '@/components/AnimatedLink'
import { Theme } from '@/components/Theme'

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
        </header>
        <main className="flex flex-col m-auto items-center justify-center p-3 pt-6 w-full sm:p-24 max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  )
}
