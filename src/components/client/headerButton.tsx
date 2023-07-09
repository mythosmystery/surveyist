"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const HeaderButton = () => {
  const pathname = usePathname()

  if (pathname?.includes("/creator")) {
    return (
      <Link
        href="/surveys"
        className="text-xl text-pink-500 hover:text-pink-900"
      >
        see surveys
      </Link>
    )
  }

  return null
}
