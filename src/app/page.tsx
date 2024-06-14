import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from './components/Hero'
import Info from './components/Info'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
    }}>
      <Hero/>
      <Info/>
    </main>
  )
}
