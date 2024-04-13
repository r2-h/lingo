import { cache } from "react"
import db from "@/db/drizzle"
import { auth } from "@clerk/nextjs"
import { eq } from "drizzle-orm"
import { courses, userProgress } from "./schema"

export const getCourses = cache(async () => {
  return await db.query.courses.findMany()
})

export const getUserProgress = cache(async () => {
  const { userId } = await auth()

  if (!userId) {
    return null
  }
  return await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: { activeCourse: true },
  })
})

export const getCourseById = cache(async (courseId: number) => {
  return await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
  })
})
