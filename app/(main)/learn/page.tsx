import { StickyWrapper } from "@/components/StickyWrapper"
import { FeedWrapper } from "@/components/FeedWrapper"

import { UserProgress } from "@/components/UserProgress"
import { FeedHeader } from "@/app/(main)/learn/_components/FeedHeader"
import { getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"

const LearnPage = async () => {
  const userProgress = await getUserProgress()

  if (!userProgress || !userProgress.activeCourseId || !userProgress.activeCourse ) {
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
        <div className="space-y-4">
          <div className="h-[700px] bg-blue-500 w-full" />
          <div className="h-[700px] bg-blue-500 w-full" />
        </div>
      </FeedWrapper>
    </div>
  )
}
export default LearnPage
