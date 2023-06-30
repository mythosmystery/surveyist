import { UserButton, auth } from "@clerk/nextjs"
import Link from "next/link"

export const Header = () => {
  const { userId } = auth()
  const isSignedIn = !!userId
  return (
    <header className="flex items-center justify-between p-6">
      <Link href="/" className="text-xl text-blue-500 hover:text-blue-900">
        Surveyist
      </Link>
      <UserButton afterSignOutUrl="/" />
      {!isSignedIn && (
        <Link href="/sign-in" className="text-blue-500 hover:text-blue-900">
          Sign In
        </Link>
      )}
    </header>
  )
}
