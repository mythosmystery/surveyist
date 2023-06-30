"use client"

import { useRouter } from "next/navigation"
import { GoPencil } from "react-icons/go"

export const EditSurveyButton = ({ id }: { id: string }) => {
  const router = useRouter()

  return (
    <button
      className="z-50 rounded-full p-2 shadow-sm hover:bg-yellow-200"
      onClick={() => router.push(`/creator?id=${id}`)}
    >
      <GoPencil />
    </button>
  )
}
