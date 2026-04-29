"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-black/30 border border-black/40 rounded-2xl px-6 py-3 shadow-lg shadow-black/30"
    >
      <ul className="flex items-center gap-6 text-sm md:text-base text-gray-300">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-white transition font-medium"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
