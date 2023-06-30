"use client"

import type { NextPage, NextPageContext } from "next"
import { HorizontalCenterLayout } from "../layouts/horizontal-center"
import { BsFillCloudDrizzleFill } from "react-icons/bs"

const ErrorPage: NextPage = () => {
  return (
    <HorizontalCenterLayout>
      <BsFillCloudDrizzleFill size={100} className="my-12 text-blue-300" />
      <h1 className="text-4xl font-thin">Oopies!</h1>
      <h4 className="pt-2">Something went wrong</h4>
    </HorizontalCenterLayout>
  )
}

export default ErrorPage
