import { getMongoRepoRSC } from "@/lib/mongo/repo"
import type { SurveyModel } from "@/lib/types"
import Link from "next/link"
import { GoPencil, GoPlus } from "react-icons/go"
import { SurveyDeleteButton } from "../../components/client/surveyDeleteButton"
import { cache } from "react"
import { auth } from "@clerk/nextjs"
import { CopyButton } from "../../components/client/copyButton"
import { env } from "../../env.mjs"

const getSurveys = cache(async (userId: string) => {
  const { survey } = await getMongoRepoRSC()
  return await survey.find({ userId }).toArray()
})

const SurveyPage = async () => {
  const { userId } = auth()
  console.log(userId)
  const surveys = await getSurveys(userId!)

  console.log(surveys)

  if (!surveys.length) {
    return <NoSurveys />
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

const NoSurveys = () => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="">
        <h2 className="text-2xl font-thin">No surveys found</h2>
        <Link href="/creator?new=true">
          <p className="mt-8 rounded-md border-b bg-white p-3 text-center hover:bg-yellow-100">
            Create one now!
          </p>
        </Link>
      </div>
    </div>
  )
}

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
      <div className="flex items-center">
        <Link href={`/creator?id=${id}`} className="grow">
          <div className="mx-4 my-2 flex items-center gap-2 rounded-md border-b bg-white p-3 hover:bg-yellow-100">
            <GoPencil />
            <p className="lg:text-lg">Edit</p>
          </div>
        </Link>
        <CopyButton
          value={`${env.NEXT_PUBLIC_APP_URL}/survey/${id}`}
          caption="Copy shareable link"
        />
        <SurveyDeleteButton id={id} />
      </div>
    </div>
  )
}
