import { SurveyBuilder } from "@/components/client/surveyCreator"
import "survey-core/defaultV2.min.css"
import "survey-creator-core/survey-creator-core.min.css"
import { getMongoRepoRSC } from "@/lib/mongo/repo"
import { ObjectId } from "mongodb"

export default async function SurveyCreatorPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { survey } = await getMongoRepoRSC()
  if (searchParams.id && typeof searchParams.id === "string") {
    const data = await survey.findOne({ _id: new ObjectId(searchParams.id) })
    return <SurveyBuilder data={JSON.stringify(data || {})} />
  }
  return <SurveyBuilder />
}
