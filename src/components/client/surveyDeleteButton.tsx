"use client"

import { GoTrash } from "react-icons/go"
import { api } from "../../utils/api"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const SurveyDeleteButton = ({ id }: { id: string }) => {
  const router = useRouter()
  const { mutate } = api.survey.deleteSurvey.useMutation({
    onSuccess: () => {
      toast.success("Survey deleted")
      router.refresh()
    },
    onError: () => toast.error("Error deleting survey"),
  })

  const handleClick = () => mutate({ surveyId: id })

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <button
            className="mx-4 my-2 flex items-center gap-2 rounded-md border-b bg-white p-4 hover:bg-red-100"
            onClick={handleClick}
          >
            <GoTrash />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-red-400">Delete survey</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
