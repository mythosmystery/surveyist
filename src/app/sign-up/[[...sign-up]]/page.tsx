import { SignUp } from "@clerk/nextjs"
import { CenterLayout } from "@/layouts/center"

export default function Page() {
  return (
    <CenterLayout>
      <SignUp />
    </CenterLayout>
  )
}
