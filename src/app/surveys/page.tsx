import { getMongoRepoRSC } from "@/lib/mongo/repo"
import type { SurveyModel } from "@/lib/types"

const SurveyPage = async () => {
  const { survey } = await getMongoRepoRSC()

  const surveys = await survey.find().toArray()

  console.log(surveys)

  if (!surveys.length) {
    return <div>No surveys found</div>
  }

  return (
    <>
      {surveys.map((s) => (
        <SurveyCard key={s._id.toString()} survey={s} />
      ))}
    </>
  )
}

export default SurveyPage

const SurveyCard = ({ survey }: { survey: SurveyModel }) => {
  const id = survey._id?.toString() || ""
  return (
    <a href={`/survey/${id}`}>
      <div className="m-4 max-w-md rounded-lg px-4 py-8 text-center shadow-md hover:bg-slate-100">
        <h2>{survey.title}</h2>
        <p>{survey.description}</p>
        <p>{survey.pages.length} pages</p>
      </div>
    </a>
  )
}
