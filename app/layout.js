import CustomCursor from '@/components/CustomCursor'
import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Samuel Osei',
  description: "Samuel Osei's portfolio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <CustomCursor/>
      </body>
    </html>
  )
}
