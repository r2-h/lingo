import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { InfinityIcon } from "lucide-react"
import { courses, userProgress } from "@/db/schema"

type Props = {
  activeCourse: typeof courses.$inferSelect
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

export const UserProgress = ({ activeCourse, hasActiveSubscription, points, hearts }: Props) => {
  console.log(activeCourse)
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="defaultOutline">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
            className="rounded-md border"
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="defaultOutline" className="text-orange-500">
          <Image src="/points.svg" alt="points" width={28} height={28} className="mr-2" />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="defaultOutline" className="text-rose-500">
          <Image src="/heart.svg" alt="hearts" width={28} height={28} className="mr-2" />
          {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3px]" /> : hearts}
        </Button>
      </Link>
    </div>
  )
}
