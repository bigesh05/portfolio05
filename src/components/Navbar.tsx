"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // only render motion after client mounts
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-xl bg-white/10
        border border-white/20
        rounded-2xl px-6 py-3
        shadow-lg shadow-black/30
      "
    >
      <ul className="flex items-center gap-6 text-sm md:text-base text-gray-200">
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
