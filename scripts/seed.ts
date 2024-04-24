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
      {
        order: 2,
        title: "Verbs",
        unitId: 1,
        id: 2,
      },
      {
        order: 3,
        title: "Something",
        unitId: 1,
        id: 3,
      },
      {
        order: 4,
        title: "Something",
        unitId: 1,
        id: 4,
      },
      {
        order: 5,
        title: "Something",
        unitId: 1,
        id: 5,
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
      {
        lessonId: 1,
        order: 2,
        question: '"the man" ?',
        type: "ASSIST",
        id: 2,
      },
      {
        lessonId: 1,
        order: 3,
        question: 'Which one of these is "the robot" ?',
        type: "SELECT",
        id: 3,
      },
    ])

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        correct: true,
        text: "el hombre",
        audioSrc: "es_man.mp3",
        imageSrc: "/man.svg",
      },
      {
        challengeId: 1,
        correct: false,
        text: "la mujer",
        audioSrc: "es_woman.mp3",
        imageSrc: "/woman.svg",
      },
      {
        challengeId: 1,
        correct: false,
        text: "el robot",
        audioSrc: "es_robot.mp3",
        imageSrc: "/robot.svg",
      },
    ])
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        correct: true,
        text: "el hombre",
        audioSrc: "es_man.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "la mujer",
        audioSrc: "es_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "el robot",
        audioSrc: "es_robot.mp3",
      },
    ])
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        correct: false,
        text: "el hombre",
        audioSrc: "es_man.mp3",
        imageSrc: "/man.svg",
      },
      {
        challengeId: 3,
        correct: false,
        text: "la mujer",
        audioSrc: "es_woman.mp3",
        imageSrc: "/woman.svg",
      },
      {
        challengeId: 3,
        correct: true,
        text: "el robot",
        audioSrc: "es_robot.mp3",
        imageSrc: "/robot.svg",
      },
    ])

    console.log("Seeding finished")
  } catch (error) {
    console.log(error)
    throw new Error("Failed to seed the database")
  }
}
main()
