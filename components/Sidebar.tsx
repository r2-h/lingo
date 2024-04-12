import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { SidebarItem } from "@/components/SidebarItem"
import { Loader } from "lucide-react"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"

const SIDEBAR_ITEMS = [
  { label: "Learn", href: "/learn", iconSrc: "/learn.svg" },
  { label: "Leaderboard", href: "/leaderboard", iconSrc: "/leaderboard.svg" },
  { label: "Quests", href: "/quests", iconSrc: "/quests.svg" },
  { label: "Shop", href: "/shop", iconSrc: "/shop.svg" },
]

type Sidebar = {
  className: string
}
export const Sidebar = ({ className }: Sidebar) => {
  return (
    <aside
      className={cn(
        "flex-col  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 ",
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={"/mascot.svg"} alt="logo" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            href={item.href}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="animate-spin text-muted-foreground h-5 w-5" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </aside>
  )
}
