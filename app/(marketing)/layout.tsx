import { ReactNode } from "react"

import { Footer } from "./_components/Footer"
import { Header } from "./_components/Header"

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">{children}</main>
      <Footer />
    </div>
  )
}
