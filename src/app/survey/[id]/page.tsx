import { getMongoRepoRSC } from "@/lib/mongo/repo"
import { ObjectId } from "mongodb"
import { SurveyViewer } from "@/components/client/surveyViewer"
import "survey-core/defaultV2.min.css"

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params: { id } }: Props) {
  const repo = await getMongoRepoRSC()

  const survey = await repo.survey.findOne({ _id: new ObjectId(id) })

  if (!survey) {
    return <div>Survey not found</div>
  }

  console.log(survey)

  survey._id = survey._id?.toString()

  return <SurveyViewer surveyModel={survey} />
}
