import "dotenv/config"

import * as schema from "../db/schema"
import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const courses = [
  { title: "Croatian", imageSrc: "/hr.svg", id: 1 },
  { title: "Spanish", imageSrc: "/es.svg", id: 2 },
  { title: "Japanese", imageSrc: "/jp.svg", id: 3 },
  { title: "French", imageSrc: "/fr.svg", id: 4 },
  { title: "Italian", imageSrc: "/it.svg", id: 5 },
]

const main = async () => {
  try {
    console.log("Seeding database")
    await db.insert(schema.courses).values(courses)

    console.log("Seeding finished")
  } catch (error) {
    console.log(error)
    throw new Error("Failed to seed the database")
  }
}
main()
