import Header from "./Header/Header"

interface LayoutType {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutType) {
  return (
    <>
      <div className="relative w-full min-h-screen bg-white">
        <Header />
        {children}
      </div>
    </>
  )
}