"use client"

import { useExitModal } from "@/store/use-exit-modal"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import Image from "next/image"
import { DialogClose } from "@radix-ui/react-dialog"

export const ExitModal = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { isOpen, close } = useExitModal()

  useEffect(() => setIsClient(true), [])

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/mascot_sad.svg" height={80} width={80} alt="Mascot" />
          </div>
          <DialogTitle className="font-bold text-center text-2xl">Wait, don&apos;t go</DialogTitle>
          <DialogDescription className="text-center text-base">
            You&apos;re about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button variant="primary" className="w-full" size="lg" onClick={close}>
              Keep learning
            </Button>
            <DialogClose>
              <Button
                variant="dangerOutline"
                className="w-full"
                size="lg"
                onClick={() => {
                  close
                  router.push("/learn")
                }}
              >
                End session
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
