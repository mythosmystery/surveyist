import { auth } from "@clerk/nextjs"
import { type NextPage } from "next"
import Link from "next/link"

export const metadata = {
  title: "Surveyist - Home",
  description: "The best way to create surveys",
}

const Home: NextPage = () => {
  const { userId } = auth()
  return (
    <>
      <div className="flex flex-col items-center py-20">
        <h1 className="mt-24 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text py-2 text-6xl font-bold text-transparent">
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
        <div className="fixed right-8 top-64 -z-10 h-3/4 w-3/4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ec4899"
              d="M36.8,-60.5C48.6,-49.7,59.5,-41,64.6,-29.6C69.7,-18.2,68.9,-4.2,64.8,7.8C60.8,19.9,53.5,29.9,43.6,33.4C33.7,36.8,21.3,33.6,12.9,29.2C4.6,24.9,0.2,19.5,-7.1,19.5C-14.5,19.5,-24.8,25,-35.6,24.3C-46.5,23.6,-57.9,16.8,-57.8,9.1C-57.8,1.4,-46.2,-7.2,-37,-12.5C-27.8,-17.8,-20.8,-19.7,-15.1,-33.2C-9.3,-46.7,-4.6,-71.7,3.9,-77.9C12.5,-84,25,-71.2,36.8,-60.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="absolute -left-8 -top-10 -z-10 h-1/2 w-1/2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ec4899"
              d="M42.6,-59.8C51.4,-52.2,52.1,-34.7,52.5,-20.2C52.9,-5.7,52.9,5.8,49.9,16.6C46.9,27.4,40.8,37.6,32,49.5C23.2,61.3,11.6,74.7,0.4,74.1C-10.7,73.5,-21.5,58.9,-30.6,47.2C-39.8,35.5,-47.5,26.7,-52.8,15.9C-58,5,-60.9,-7.9,-57.3,-18.5C-53.7,-29.1,-43.5,-37.5,-32.8,-44.5C-22.2,-51.6,-11.1,-57.3,2.9,-61.3C16.9,-65.2,33.8,-67.5,42.6,-59.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="fixed -right-32 -top-24 -z-10 h-1/3 w-1/3">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ec4899"
              d="M18.4,-28.3C23.4,-28.9,26.9,-23.2,27.4,-17.5C27.9,-11.7,25.5,-5.8,24.6,-0.5C23.8,4.9,24.5,9.7,26.4,19.7C28.4,29.7,31.5,44.9,27.3,47C23.1,49.2,11.6,38.2,-1.7,41.2C-15,44.1,-29.9,60.9,-42.9,63.9C-55.8,66.8,-66.8,55.8,-70.5,42.9C-74.1,29.9,-70.5,15,-69.2,0.7C-68,-13.5,-69,-27,-63.7,-37C-58.3,-47.1,-46.6,-53.7,-34.9,-49.3C-23.2,-44.8,-11.6,-29.4,-2.5,-25.1C6.7,-20.9,13.3,-27.7,18.4,-28.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
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
