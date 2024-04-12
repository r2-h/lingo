import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"

type Props = {
  title: string
  id: number
  imageSrc: string
  disabled?: boolean
  active?: boolean
  onClick: (id: number) => void
}
export const Card = ({ active, disabled, id, imageSrc, title, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 flex flex-col items-center justify-between cursor-pointer active:border-b-2 hover:bg-black/5 p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <div className="min-w-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        width={93.33}
        height={70}
        alt={title}
        className="rounded-lg drop-shadow-md border object-cover "
      />
      <p className="text-neutral-700 text-center font-bold mt-3">{title}</p>
    </div>
  )
}
