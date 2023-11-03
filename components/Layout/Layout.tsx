import NavBar from "@components/Layout/NavBar/NavBar"

interface LayoutType {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutType) {
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        <NavBar />
        <main className="">{children}</main>
      </div>
    </>
  )
}