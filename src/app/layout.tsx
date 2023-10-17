import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s'
  },
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div>
          <Header />
          {children}
          <Footer />
        </div>


      </body>
    </html>
  )
}

