import Header from "@/components/header"
import Footer from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Projects | Hafsa Abdullahi",
  description: "Portfolio projects showcasing web development expertise",
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "bookify | Booking App",
      description:
        "Full-stack booking app for Meeting room booking application built with Next.js, Appwrite, and Tailwind CSS. Features user authentication, room availability, and booking management.",
      technologies: ["Next.js", "Appwrite", "Tailwind CSS"],
      link: "https://bookify-one-beta.vercel.app/",
      github: "https://github.com/haphuu5056/bookify",
      image: "/images/screen.png",
    },
    {
      title: "Personal Blog ",
      description:
        "A modern blog website built with Next.js and MDX to support rich markdown content and components. It includes category filtering, formatted dates, and animations using Framer Motion. The site is statically generated for performance and SEO.",
      technologies: ["React", "Next.js", "MDX", "Framer Motion","shadcn/ui","tailwindcss","typescript"],
      link: "https://personal-blog-chi-eight.vercel.app/",
      github: "#",
      image: "/images/blog.png",
    },
    {
      title: "Service Booking Platform",
      description:
        "A dynamic service-booking platform where users can find local service providers. It uses Firebase for authentication to differentiate between customers and providers. Verified providers are redirected to their dashboard, while customers can book services directly from the provider dashboard. The app includes various dynamic features to enhance the user experience.",
      technologies: ["Next.js", "Firebase Auth", "Tailwind CSS", "App Router", "Typescript", "Shadcn", "Booking System"],
      link: "https://somcity-services.vercel.app/",
      github: "#",
      image: "/images/somcity.png",
    },
    
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing projects and skills with smooth animations and modern design principles. Optimized for performance and SEO with dark mode support.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#",
      image: "/portfolio-website-design.png",
    },
    
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated selection of web development projects showcasing my expertise in React, Next.js, and modern web
            technologies.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side: Content */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-base">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Right side: Image */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
