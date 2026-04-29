"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.status && (
          <span className="text-xs bg-black/40 px-3 py-1 rounded-full text-gray-300">
            {project.status}
          </span>
        )}
      </div>

      <p className="text-gray-400 mt-2">
        {project.desc}
      </p>

      {Array.isArray(project.tech) && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-sm bg-black/40 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {project.note && (
        <p className="mt-3 text-sm text-gray-400">{project.note}</p>
      )}

      {project.link && (
        <a
          href={project.link}
          className="inline-block mt-4 text-sm underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </motion.div>
  );
}
