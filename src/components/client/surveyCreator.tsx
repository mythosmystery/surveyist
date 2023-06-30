"use client"

import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react"
import { api } from "@/utils/api"
import type { RouterInputs } from "@/utils/api"

type CreateSurvey = RouterInputs["survey"]["saveSurvey"]

export const SurveyBuilder = () => {
  const { mutate } = api.survey.saveSurvey.useMutation()
  const creator = new SurveyCreator()

  creator.text =
    window.localStorage.getItem("survey-json") || JSON.stringify({})

  creator.saveSurveyFunc = (
    saveNo: string,
    callback: (s: string, res: boolean) => void
  ) => {
    window.localStorage.setItem("survey-json", creator.text)
    console.log(creator.text)
    mutate(JSON.parse(creator.text) as CreateSurvey)
    callback(saveNo, true)
  }
  return <SurveyCreatorComponent creator={creator} />
}
