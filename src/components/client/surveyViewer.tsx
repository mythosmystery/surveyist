"use client"

import { Survey } from "survey-react-ui"
import { Model } from "survey-core"
import type { SurveyModel } from "@/lib/types"
import { api } from "../../utils/api"
import { toast } from "react-hot-toast"
import { useAuth } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export type Props = {
  surveyModel: SurveyModel
}

export const SurveyViewer = ({ surveyModel }: Props) => {
  const router = useRouter()
  const { mutate } = api.survey.saveResponse.useMutation()
  const { isSignedIn } = useAuth()

  const survey = new Model(surveyModel)
  survey.onComplete.add((sender) => {
    toast("Saving response...", {
      duration: 600,
    })
    mutate(
      {
        surveyId: surveyModel._id?.toString() || "",
        data: sender.data as Record<string, any>,
      },
      {
        onError: () =>
          toast.error(
            isSignedIn
              ? "Failed to save response"
              : "Please sign in to save your response"
          ),
        onSuccess: () => {
          toast.success("Response saved")
          router.push("/results")
        },
      }
    )
  })
  return <Survey model={survey} />
}
