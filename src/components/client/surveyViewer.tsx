"use client"

import { Survey } from "survey-react-ui"
import { Model } from "survey-core"
import type { SurveyModel } from "@/lib/types"
import { api } from "../../utils/api"

export type Props = {
  surveyModel: SurveyModel
}

export const SurveyViewer = ({ surveyModel }: Props) => {
  const { mutateAsync } = api.survey.saveResponse.useMutation()

  const survey = new Model(surveyModel)
  survey.onComplete.add(async (sender, options) => {
    options.showSaveInProgress()
    try {
      await mutateAsync({
        surveyId: surveyModel._id?.toString() || "",
        data: sender.data as Record<string, any>,
      })
      options.showSaveSuccess()
    } catch (e) {
      console.error(e)
      options.showSaveError()
    }
  })
  return <Survey model={survey} />
}
