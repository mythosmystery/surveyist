"use client"

import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

export const NavButton = ({
  path,
  children,
}: {
  path: string
  children: ReactNode
}) => {
  const router = useRouter()
  return <div onClick={() => router.push(path)}>{children}</div>
}
