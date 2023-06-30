import { UserButton, auth } from "@clerk/nextjs"
import Link from "next/link"

export const Header = () => {
  const { userId } = auth()
  const isSignedIn = !!userId
  return (
    <header className="fixed flex w-full items-center justify-between p-6">
      <Link href="/" className="text-xl text-pink-500 hover:text-pink-900">
        Surveyist
      </Link>
      <div className="mt-9">
        <UserButton afterSignOutUrl="/" />
        {!isSignedIn && (
          <Link href="/sign-in" className=" text-pink-100 hover:text-pink-300">
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}
