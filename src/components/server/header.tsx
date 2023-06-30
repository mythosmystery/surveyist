import { UserButton, auth } from "@clerk/nextjs"
import Link from "next/link"

export const Header = () => {
  const { userId } = auth()
  const isSignedIn = !!userId
  return (
    <>
      <header className="fixed top-0 flex w-full items-center justify-between p-6">
        <Link href="/" className="text-xl text-pink-500 hover:text-pink-900">
          Surveyist
        </Link>
        <UserButton afterSignOutUrl="/" />
        {!isSignedIn && (
          <Link
            href="/sign-in"
            className=" rounded-xl bg-pink-100 px-6 py-4 hover:text-pink-400"
          >
            Sign In
          </Link>
        )}
      </header>
      <div className="h-16" />
    </>
  )
}
