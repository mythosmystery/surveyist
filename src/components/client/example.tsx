"use client"

import { api } from "../../utils/api"

export const Example = () => {
  const { data } = api.example.hello.useQuery({ text: "from client" })
  const { data: data2 } = api.example.protectedHello.useQuery({
    text: "from client",
  })
  return (
    <div>
      <h1>Example</h1>
      <div>{data?.greeting}</div>
      <div>{data2?.greeting}</div>
    </div>
  )
}
