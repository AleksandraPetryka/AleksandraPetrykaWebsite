import './globals.css'
import { Rubik } from 'next/font/google'
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
    title: 'Aleksandra Petryka',
    description: 'Aleksandra Petryka website',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
