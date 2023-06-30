import { type NextPage } from "next"
import Link from "next/link"

export const metadata = {
  title: "Surveyist - Home",
  description: "The best way to create surveys",
}

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center py-20">
        <h1 className="text-4xl font-thin">Welcome to Surveyist!</h1>

        <Link className="text-blue-500 hover:text-blue-900" href="/sign-up">
          Get Started
        </Link>
      </div>
    </>
  )
}

export default Home
