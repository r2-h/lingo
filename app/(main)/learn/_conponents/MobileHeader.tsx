import { MobileSidebar } from "@/components/MobileSidebar"
import { FunctionComponent } from "react"

export const MobileHeader: FunctionComponent = () => {
  return (
    <header className="fixed top=0 w-full z-50 h-[50px] border-b flex items-center bg-green-500 px-6 lg:hidden ">
      <MobileSidebar />
    </header>
  )
}
