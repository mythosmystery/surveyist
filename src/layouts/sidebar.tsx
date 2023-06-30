export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full gap-8 p-8">
      <div className="w-1/4">sidebar</div>
      <div className="grow">{children}</div>
    </div>
  )
}
