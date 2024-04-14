import { StickyWrapper } from "@/components/StickyWrapper"
import { FeedWrapper } from "@/components/FeedWrapper"

import { UserProgress } from "@/components/UserProgress"
import { FeedHeader } from "@/app/(main)/learn/_components/FeedHeader"
import { getUnits, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { Unit } from "./_components/Unit"

const LearnPage = async () => {
  const [userProgress, units] = await Promise.all([getUserProgress(), getUnits()])

  if (!userProgress || !userProgress.activeCourseId || !userProgress.activeCourse) {
    redirect("/courses")
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <FeedHeader title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div className="mb-10" key={unit.id}>
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={undefined}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}
export default LearnPage
