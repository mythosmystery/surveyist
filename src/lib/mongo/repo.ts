import type { MongoClient } from "mongodb"
import clientPromise from "."
import type { SurveyModel } from "../types"

export const getMongoRepo = (client: MongoClient) => {
  const db = client.db("surveyist")

  const survey = db.collection<SurveyModel>("survey")
  const response = db.collection("response")

  return {
    survey,
    response,
  }
}

export const getMongoRepoRSC = async () => {
  const client = await clientPromise
  return getMongoRepo(client)
}

export type MongoRepo = ReturnType<typeof getMongoRepo>
