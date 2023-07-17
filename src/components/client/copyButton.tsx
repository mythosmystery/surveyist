"use client"
import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { GoLink } from "react-icons/go"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const CopyButton = ({
  value,
  caption,
}: {
  value: string
  caption?: string
}) => {
  const copyValue = () => {
    const succ = copy(value)
    if (succ) return toast.success("Copied!")
    toast.error("Error copying")
  }
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <button
              data-tooltip-target="tooltip-default"
              onClick={copyValue}
              className="rounded-md border-b bg-white p-4 text-center hover:bg-purple-100"
            >
              <GoLink />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{caption || "Copy to clipboard"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
