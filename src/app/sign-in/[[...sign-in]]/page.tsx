import { SignIn } from "@clerk/nextjs"
import { CenterLayout } from "@/layouts/center"

export default function Page() {
  return (
    <CenterLayout>
      <SignIn />
    </CenterLayout>
  )
}
