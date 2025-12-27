"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-6"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>

      {/* FIX 1: desc vs description */}
      <p className="text-gray-400 mt-2">
        {project.description || project.desc}
      </p>

      {/* FIX 2: tech may not exist */}
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

      {/* FIX 3: link optional */}
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
