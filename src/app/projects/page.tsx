"use client";


import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-10 py-20">
      <h2 className="text-4xl font-bold mb-10 text-white">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </main>
  );
}
