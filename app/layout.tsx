import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import {  Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/provider/modal-provider'
import ToastProvider from '@/provider/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider/>
        <ModalProvider/>
        <Navbar/>
        {children}
        <Footer />
        
        </body>
    </html>
  )
}
