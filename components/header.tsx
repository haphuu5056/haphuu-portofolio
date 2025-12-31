"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-semibold text-primary-foreground text-sm">
            HA
          </div>
          <div>
            <h1 className="font-semibold text-lg text-foreground">Hafsa Abdullahi</h1>
            <p className="text-xs text-muted-foreground">Web Developer</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/resume"
            className="  text-muted-foreground hover:text-foreground transition-colors border-r-2 pr-4 border-border  "
          >
            Resume
          </Link>
          <Link
            href="/projects"
            className="  text-muted-foreground hover:text-foreground transition-colors border-r-2 pr-4 border-border   "
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="  text-muted-foreground hover:text-foreground transition-colors "
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
