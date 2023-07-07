import './globals.css'
import {Poppins} from 'next/font/google';
import { Inter } from 'next/font/google'
import Header from './components/Header';
const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ['400','700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next App',
  description: 'Nextjs tutorial',
  keywords:'web development, web design , javascript, react, node, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
          </main>
        </body>
    </html>
  )
}
