import "dotenv/config"

import * as schema from "../db/schema"
import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database")
    await db.delete(schema.courses)
    await db.delete(schema.userProgress)
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)

    await db.insert(schema.courses).values([
      { title: "Croatian", imageSrc: "/hr.svg", id: 1 },
      { title: "Spanish", imageSrc: "/es.svg", id: 2 },
      { title: "Japanese", imageSrc: "/jp.svg", id: 3 },
      { title: "French", imageSrc: "/fr.svg", id: 4 },
      { title: "Italian", imageSrc: "/it.svg", id: 5 },
    ])

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 2,
        description: "Learn the basics of Spanish",
        order: 1,
        title: "Unit 1",
      },
    ])

    await db.insert(schema.lessons).values([
      {
        order: 1,
        title: "Nouns",
        unitId: 1,
        id: 1,
      },
    ])

    await db.insert(schema.challenges).values([
      {
        lessonId: 1,
        order: 1,
        question: 'Which one of these is "the man" ?',
        type: "SELECT",
        id: 1,
      },
    ])

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        correct: true,
        text: "el hombre",
        audioSrc: "es_man.mp3",
        imageSrc: "/man.svg",
        id: 1,
      },
      {
        challengeId: 1,
        correct: false,
        text: "la mujer",
        audioSrc: "es_woman.mp3",
        imageSrc: "/woman.svg",
        id: 2,
      },
      {
        challengeId: 1,
        correct: false,
        text: "el robot",
        audioSrc: "es_robot.mp3",
        imageSrc: "/robot.svg",
        id: 3,
      },
    ])

    console.log("Seeding finished")
  } catch (error) {
    console.log(error)
    throw new Error("Failed to seed the database")
  }
}
main()
