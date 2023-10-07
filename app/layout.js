import { Header } from './components/Header'
import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'AniMi - твое аниме',
  description: 'Посмотри аниме на AniMi - здесь ты найдешь огромное количество релизов с озвучкой от любимых студий и современный дизайн, а также многое другое. Присоединяйся прямо сейчас, просто зарегистрируйся!',
  keywords: 'мультфильмы, аниме, смотреть, онлайн, видео, серии, сезоны, эпизоды',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <main className='relative h-[calc(100vh-69px)] [overflow-y:overlay]'>
          {children}
        </main>
      </body>
    </html>
  )
}