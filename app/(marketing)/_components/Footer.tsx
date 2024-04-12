import { Button } from "@/components/ui/button"
import Image from "next/image"

const FLAGS = [
  { title: "Croatian", src: "/hr.svg" },
  { title: "Spanish", src: "/es.svg" },
  { title: "Japanese", src: "/jp.svg" },
  { title: "French", src: "/fr.svg" },
  { title: "Italian", src: "/it.svg" },
]
export const Footer = () => {
  return (
    <footer className="hidden lg:block w-full h-20 border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {FLAGS.map((flag) => (
          <Button size="lg" variant="defaultOutline" className="w-full" key={flag.title}>
            <Image
              src={flag.src}
              alt={flag.title}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {flag.title}
          </Button>
        ))}
      </div>
    </footer>
  )
}
