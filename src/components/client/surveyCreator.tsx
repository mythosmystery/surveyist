"use client"

import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react"
import { api } from "@/utils/api"
import type { RouterInputs } from "@/utils/api"
import { toast } from "react-hot-toast"
import { useEffect, useMemo } from "react"

type CreateSurvey = RouterInputs["survey"]["saveSurvey"]

export const SurveyBuilder = ({
  data,
  newSurvey,
}: {
  data?: string
  newSurvey?: boolean
}) => {
  const { mutate } = api.survey.saveSurvey.useMutation()

  const creator = useMemo(() => new SurveyCreator(), [])

  useEffect(() => {
    if (newSurvey) {
      creator.text = JSON.stringify({})
    } else if (!!data) {
      creator.text = data
    } else {
      creator.text = window.localStorage.getItem("survey-json") || "{}"
    }
  }, [newSurvey, creator, data])

  creator.saveSurveyFunc = (
    saveNo: string,
    callback: (s: string, res: boolean) => void
  ) => {
    toast("Saving survey...", { duration: 700 })
    window.localStorage.setItem("survey-json", creator.text)
    console.log(creator.text)
    mutate(JSON.parse(creator.text) as CreateSurvey, {
      onSuccess: () => toast.success("Survey saved!"),
      onError: () => toast.error("Error saving survey"),
    })
    callback(saveNo, true)
  }
  return <SurveyCreatorComponent creator={creator} />
}
