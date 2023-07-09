import { getMongoRepoRSC } from "@/lib/mongo/repo"
import type { SurveyModel } from "@/lib/types"
import Link from "next/link"
import { GoPencil, GoPlus } from "react-icons/go"
import { SurveyDeleteButton } from "../../components/client/surveyDeleteButton"
import { cache } from "react"

const getSurveys = cache(async () => {
  const { survey } = await getMongoRepoRSC()
  return await survey.find().toArray()
})

const SurveyPage = async () => {
  const surveys = await getSurveys()

  console.log(surveys)

  if (!surveys.length) {
    return <div>No surveys found</div>
  }

  return (
    <div className="m-12 flex">
      {surveys.map((s) => (
        <SurveyCard key={s._id.toString()} survey={s} />
      ))}
      {/* <Blobs /> */}
    </div>
  )
}

export default SurveyPage

const SurveyCard = ({ survey }: { survey: SurveyModel }) => {
  const id = survey._id?.toString() || ""
  return (
    <div className="mt-12">
      <a
        className="fixed right-20 top-24 rounded-full bg-slate-100/75 p-2 hover:bg-pink-400/50"
        href="/creator?new=true"
      >
        <GoPlus className="h-8 w-8" />
      </a>
      <Link href={`/survey/${id}`}>
        <div className="m-4 rounded-lg bg-white px-4 py-8 text-center shadow-md hover:bg-pink-100">
          <h2>{survey.title}</h2>
          <p>{survey.description}</p>
          <p>{survey.pages.length} page(s)</p>
        </div>
      </Link>
      <div className="flex">
        <Link href={`/creator?id=${id}`} className="grow">
          <div className="mx-4 my-2 flex items-center gap-2 rounded-md border-b bg-white p-3 hover:bg-yellow-100">
            <GoPencil />
            <p className="lg:text-lg">Edit</p>
          </div>
        </Link>
        <SurveyDeleteButton id={id} />
      </div>
    </div>
  )
}
