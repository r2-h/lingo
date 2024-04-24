import { lessons, units } from "@/db/schema"
import { UnitBanner } from "./UnitBanner"
import { LessonButton } from "./LessonButton"

type Props = {
  id: number
  order: number
  description: string
  title: string
  lessons: (typeof lessons.$inferSelect & { completed: boolean; challenges: any[] })[]
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
  console.log(lessons[0].challenges, lessons[0])

  return (
    <>
      <UnitBanner description={description} title={title} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id == activeLesson?.id
          const isLocked = !lesson.completed && !isCurrent

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              percentage={activeLessonPercentage}
              totalCount={lessons.length}
              current={isCurrent}
              locked={isLocked}
            />
          )
        })}
      </div>
    </>
  )
}
