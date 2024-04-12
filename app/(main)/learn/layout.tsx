import { ReactNode } from "react"
import { Sidebar } from "@/components/Sidebar"
import { MobileHeader } from "@/app/(main)/learn/_conponents/MobileHeader"

export default function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="bg-red-500 h-full">{children}</div>
      </main>
    </>
  )
}
