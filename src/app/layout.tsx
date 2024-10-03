import { Inter } from 'next/font/google'
import { ThemeProvider  } from "next-themes"
import {Header} from '@/components/header'
import {Footer} from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Faiz Shaikh - Full-Stack Web Developer',
  description: 'Portfolio of Faiz Shaikh, a Full-Stack Web Developer specializing in Next.js, React.js, and TypeScript.',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen p-4">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}