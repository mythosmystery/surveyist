import type { ReactNode } from "react"

export const HorizontalCenterLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return <div className="flex flex-col items-center py-20">{children}</div>
}
