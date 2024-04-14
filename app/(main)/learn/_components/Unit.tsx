import { lessons, units } from "@/db/schema"
import { UnitBanner } from "./UnitBanner"

type Props = {
  id: number
  order: number
  description: string
  title: string
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[]
  activeLesson: (typeof lessons.$inferSelect & { unit: typeof units.$inferSelect }) | undefined
  activeLessonPercentage: number
}
export const Unit = ({
  activeLesson,
  activeLessonPercentage,
  description,
  id,
  lessons,
  order,
  title,
}: Props) => {
  return (
    <>
      <UnitBanner description={description} title={title} />
    </>
  )
}
