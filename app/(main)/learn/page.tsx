import { StickyWrapper } from "@/components/StickyWrapper"
import { FeedWrapper } from "@/components/FeedWrapper"

import { UserProgress } from "@/components/UserProgress"
import { FeedHeader } from "@/app/(main)/learn/_components/FeedHeader"
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { Unit } from "./_components/Unit"

const LearnPage = async () => {
  const [userProgress, units, courseProgress, lessonPercentage] = await Promise.all([
    getUserProgress(),
    getUnits(),
    getCourseProgress(),
    getLessonPercentage(),
  ])

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
              activeLesson={courseProgress?.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}
export default LearnPage
