import { StickyWrapper } from "@/components/StickyWrapper"
import { FeedWrapper } from "@/components/FeedWrapper"

import { UserProgress } from "@/components/UserProgress"
import { FeedHeader } from "@/app/(main)/learn/_components/FeedHeader"

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={10}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <FeedHeader title="Spanish" />
        <div className="space-y-4">
          <div className="h-[700px] bg-blue-500 w-full" />
          <div className="h-[700px] bg-blue-500 w-full" />
        </div>
      </FeedWrapper>
    </div>
  )
}
export default LearnPage
