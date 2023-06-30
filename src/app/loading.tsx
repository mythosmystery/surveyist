import { Loader } from "@/components/server/loader"
import { HorizontalCenterLayout } from "@/layouts/horizontal-center"

export default function Page() {
  return (
    <HorizontalCenterLayout>
      <Loader />
    </HorizontalCenterLayout>
  )
}
