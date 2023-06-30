import { getMongoRepoRSC } from "@/lib/mongo/repo"
import type { SurveyModel } from "@/lib/types"
import Link from "next/link"
import { GoPencil } from "react-icons/go"
import { EditSurveyButton } from "../../components/client/editSurveyButton"
import { NavButton } from "../../components/client/navButton"

const SurveyPage = async () => {
  const { survey } = await getMongoRepoRSC()

  const surveys = await survey.find().toArray()

  console.log(surveys)

  if (!surveys.length) {
    return <div>No surveys found</div>
  }

  return (
    <div className="m-12 flex">
      {surveys.map((s) => (
        <SurveyCard key={s._id.toString()} survey={s} />
      ))}
    </div>
  )
}

export default SurveyPage

const SurveyCard = ({ survey }: { survey: SurveyModel }) => {
  const id = survey._id?.toString() || ""
  return (
    <div>
      <Link href={`/survey/${id}`}>
        <div className="m-4 rounded-lg px-4 py-8 text-center shadow-md hover:bg-pink-100">
          <h2>{survey.title}</h2>
          <p>{survey.description}</p>
          <p>{survey.pages.length} pages</p>
        </div>
      </Link>
      <Link href={`/creator?id=${id}`}>
        <div className="mx-4 my-2 flex items-center gap-2 rounded-md border-b p-3 hover:bg-yellow-100">
          <GoPencil />
          <p className="text-lg">Edit Survey</p>
        </div>
      </Link>
    </div>
  )
}
