export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1000px] px-4 min-h-screen">
        {children}
      </div>
    </div>
  )
}
