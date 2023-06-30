import { auth } from "@clerk/nextjs"
import { type NextPage } from "next"
import Link from "next/link"
import { Blobs } from "../components/server/blobs"

export const metadata = {
  title: "Surveyist - Home",
  description: "The best way to create surveys",
}

const Home: NextPage = () => {
  const { userId } = auth()
  return (
    <>
      <div className="flex flex-col items-center py-20">
        <h1 className="mt-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text py-2 text-6xl font-bold text-transparent">
          Welcome to Surveyist!
        </h1>

        {!userId && (
          <Link
            className="mt-12 text-3xl font-thin text-pink-700 hover:text-purple-300"
            href="/sign-up"
          >
            Get Started!
          </Link>
        )}

        {userId && (
          <div className="mt-20 flex gap-6">
            <LinkCard link="/surveys" text="View Surveys" />
            <LinkCard link="/creator?new=true" text="Create Survey" />
          </div>
        )}
        <Blobs />
      </div>
    </>
  )
}

export default Home

const LinkCard = ({ link, text }: { link: string; text: string }) => (
  <Link href={link}>
    <div className="m-4 rounded-lg bg-white px-4 py-8 text-center shadow-md hover:bg-pink-100">
      <h1>{text}</h1>
    </div>
  </Link>
)
