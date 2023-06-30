import type { ObjectId } from "mongodb"

export type SurveyModel = {
  _id?: ObjectId | string
  title: string
  description: string
  userId: string
  pages: any[]
}
