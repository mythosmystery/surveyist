import { RingLoader } from "react-spinners"

export const Loader = ({ text = "Loading..." }) => {
  return (
    <>
      <h1 className="text-4xl font-thin">{text}</h1>
      <RingLoader size={150} className="my-32" />
    </>
  )
}
