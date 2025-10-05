import Navbar from "@/components/navbar"

interface childProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: childProps) {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  )
}
