import Header from "@/components/header"
import Hero from "@/components/hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Hafsa Abdullahi | Web Developer",
  description: "Portfolio of Hafsa Abdullahi, specializing in React, Next.js, and TypeScript",
}

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
