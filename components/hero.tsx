"use client";
import img from "@/public/images/hafs.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center ">
          <div className="relative w-80 h-100 rounded-full overflow-hidden shadow-2xl">
            <img
              src={img.src}
              alt="Hafsa Abdullahi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Hello
            </h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              A bit about me{" "}
            </h3>
            <p className=" leading-relaxed">
              I am Hafsa Abdullahi, a passionate web developer specializing in
              creating dynamic and responsive web applications. With a strong
              foundation in both <b>front-end and back-end</b> technologies, I strive
              to build seamless user experiences and efficient solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="/resume"
              className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Resume
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
