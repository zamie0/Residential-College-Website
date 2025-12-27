import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Residential College K10 UPM',
  description: 'Residential College K10, Universiti Putra Malaysia — a vibrant living-learning community providing safe accommodation, study support and student life programs for undergraduates.',
  keywords: 'K10, Residential College, UPM, Universiti Putra Malaysia, student accommodation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
