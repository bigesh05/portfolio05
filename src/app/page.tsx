"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* BACKGROUND GRID */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff15_1px,transparent_0)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Bigesh Poudel
          </h1>

          <p className="text-xl text-gray-300">
            AI Engineer · FinTech & Blockchain Enthusiast
          </p>

          <p className="text-gray-400 leading-relaxed">
            Building AI-driven financial systems, trading engines, and real-world
            asset tokenization platforms — merging deep research with real-world execution.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black font-semibold">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-white/30 text-white">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/20 backdrop-blur-xl"
        >
          <Image
            src="/profile.jpg"
            alt="Bigesh Poudel"
            fill
            className="object-cover object-top"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <Section title="Vision & Philosophy">
        I am a visionary technologist driven by the belief that nothing is impossible
        when commitment meets collaboration. My work focuses on building intelligent,
        scalable systems across AI, finance, and blockchain that create measurable impact.
      </Section>

      {/* EDUCATION */}
      <Section title="Education">
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <h3 className="font-semibold text-xl text-white">MSc Artificial Intelligence (NLP)</h3>
            <p className="text-gray-300 mt-1">
              Machine Learning, Deep Learning, Neural Networks, Information Retrieval
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Academic Search Engine using BERT · Thesis: Stock Market Prediction using ARIMA, Prophet & LSTM
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <h3 className="font-semibold text-xl text-white">BTech Computer Science Engineering </h3>
            <p className="text-gray-300 mt-1">
              Data Structures, Algorithms, AI, Parallel Computing, Digital Forensics
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Java, C++, Python, R, MATLAB
            </p>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience">
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <h3 className="font-semibold text-xl text-white">
              ShopEmporia LLC
            </h3>
            <p className="text-gray-300 mt-1">
              Founder
            </p>
            <p className="text-sm text-gray-400 mt-1">
            Worked as a Founder of a US-registered e-commerce platform for more than 2 years operating remotely.
            Led engineering, finance, and product development while building scalable
            web applications and managing cross-functional teams.
            </p>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 py-28 px-8 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-14 text-center text-white"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COLLABORATION */}
      <Section title="Collaboration">
        Open to impactful collaborations in AI, Web2, Web3, and FinTech.
        With a strong multidisciplinary team, we can design and deliver
        production-grade systems from concept to launch.
      </Section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-16 flex flex-col items-center gap-6 relative z-20"
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white">
            Contact Me
          </h2>

          <p className="text-white mt-2 max-w-xl mx-auto">
            Interested in collaborating or have a project idea? Drop a message and I’ll get back to you!
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-xl flex flex-col gap-4 mt-6"
          action="https://formspree.io/f/mjgbqbag"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold shadow-lg shadow-pink-500/40"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="relative z-10 py-28 px-8 max-w-4xl mx-auto">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-4xl font-bold mb-6 text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="text-gray-300 leading-relaxed"
      >
        {children}
      </motion.div>
    </section>
  );
}

/* ---------- PROJECTS DATA ---------- */
const projects = [
  {
    title: "STOXIFY",
    desc: "AI-powered finance learning and paper-trading platform featuring LLM financial assistant, stock forecasting, reward systems, and simulated trading.",
  },
  {
    title: "Stock Market Prediction",
    desc: "Time-series analysis and forecasting using ARIMA, Prophet, and LSTM for trend detection and volatility modeling.",
  },
  {
    title: "Academic Search Engine",
    desc: "Semantic academic retrieval system using BERT for context-aware search.",
  },
  {
    title: "RWA Tokenization Platform",
    desc: "Blockchain MVP for real-world asset tokenization using Ethereum testnets and Hardhat, built with regulatory compliance in mind.",
  },
];
