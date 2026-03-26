"use client"
import { useState } from "react"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "VisionIQ AI Surveillance",
      desc: "Real-time AI monitoring using YOLO + RTSP streams with threat detection",
      tech: ["AI", "Next.js", "Node"],
      category: "ai"
    },
    {
      id: 2,
      title: "Web3 Trading Platform",
      desc: "Modern decentralized dashboard with wallet integration",
      tech: ["Web3", "React"],
      category: "web"
    },
    {
      id: 3,
      title: "Event Manager",
      desc: "Manage hackathons, registrations, and analytics",
      tech: ["Next.js", "MongoDB"],
      category: "web"
    }
  ]

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen  text-white px-6 py-12">

      {/* HERO */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight">
          Our <span className="text-gray-400">Projects</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl">
          A collection of ideas turned into real products. Built by VClub members.
        </p>

        {/* FILTER */}
        <div className="flex gap-3 mt-8">
          {["all", "ai", "web"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                filter === f
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {filtered.map(project => (
          <div
            key={project.id}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:scale-[1.02] transition duration-300"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>

              <p className="text-gray-400 mt-3 text-sm">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <button className="mt-6 text-sm font-medium text-white/80 hover:text-white transition">
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-20">
          No projects found 👀
        </p>
      )}
    </div>
  )
}