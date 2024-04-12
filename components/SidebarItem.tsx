"use client"

import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

type Props = {
  label: string
  iconSrc: string
  href: string
}
export const SidebarItem = ({ iconSrc, label, href }: Props) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Button
      asChild
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
    >
      <Link href={href}>
        <Image src={iconSrc} alt={label} className="mr-5" height={32} width={32} />
        {label}
      </Link>
    </Button>
  )
}
