import { ReactNode } from "react"

export const StickyWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hidden lg:block sticky bottom-6 w-[368px] self-end">
      <div className="sticky top-6 min-h-[calc(100vh-48px)] ">{children}</div>
    </div>
  )
}
