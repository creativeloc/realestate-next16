import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import RegisterModal from "@/components/modals/RegisterModal"
import LoginModal from "@/components/modals/LoginModal"

const roboto = Roboto({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: "Next Estate",
  description: "A Real Estate website built with Nextjs 16 and React 19"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.className} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col bg-background"
        cz-shortcut-listen="true"
      >
        {children}
        <RegisterModal />
        <LoginModal />
      </body>
    </html>
  )
}
