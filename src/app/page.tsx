"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ---------- BACKGROUND NETWORK ---------- */
function BackgroundNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodeCount = 60;
    const nodes = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: 2 + Math.random() * 3,
      color: `hsl(${Math.random() * 360}, 100%, 65%)`,
    }));

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.shadowBlur = 4;
            ctx.shadowColor = "rgba(255, 255, 255, 0.2)";
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
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

/* ---------- HOME PAGE ---------- */
export default function HomePage() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-gray-700 to-black text-white">
      {/* BACKGROUND */}
      <BackgroundNetwork />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }} className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Bigesh Poudel</h1>
          <p className="text-xl text-gray-300">AI Engineer | FinTech & Blockchain Enthusiast</p>
          <p className="text-gray-400 leading-relaxed">
            Building AI-driven financial systems, trading engines, and real-world asset tokenization platforms — merging deep research with real-world execution.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black font-semibold">View Projects</a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-white/30 text-white">Contact Me</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/20 backdrop-blur-xl">
          <Image src="/profile.jpg" alt="Bigesh Poudel" fill className="object-cover object-top" />
        </motion.div>
      </section>

      {/* SECTIONS */}
      <Section id="about" title="Vision & Philosophy">
        "I am a visionary technologist passionate about turning ambitious ideas into reality. Driven by the belief that innovation and collaboration can overcome any challenge, I leverage AI, Quant, FinTech, and blockchain to build intelligent, scalable systems that deliver measurable impact - empowering businesses, investors, and communities worldwide."
      </Section>

      <Section title="Education">
        <EduCard
          degree="MSc Artificial Intelligence (NLP)"
          subjects="Machine Learning, Deep Learning, Natural Language Processing, Neural Networks, Information Retrieval"
          details="PyTorch, Numpy, Pandas, Scikit-Learn, TensorFlow, Keras, AWS, Azure."
        />
        <EduCard
          degree="BTech Computer Science Engineering"
          subjects="Data Structures & Algorithms, Computer Architecture, AI, Blockchain, Parallel & Distributed Computing, Digital Forensics"
          details="Java, C++, Python, R, MATLAB"
        />
      </Section>

      <Section title="Experience">
        <ExpCard
          title="ShopEmporia LLC"
          role="Founder"
          desc="Worked as a Founder of a US-registered e-commerce platform for more than 2 years operating remotely. Led engineering, finance, and product development while building scalable web applications and managing cross-functional teams."
        />
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition">
              <h3 className="text-2xl font-semibold mb-3 text-white">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Collaboration">
        Open to impactful collaborations in AI, Web2, Web3, and FinTech. With a strong multidisciplinary team, we can design and deliver production-grade systems from concept to launch.
      </Section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 flex flex-col items-center gap-6 relative z-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white">Contact Me</h2>
          <p className="text-white mt-2 max-w-xl mx-auto">Interested in collaborating or have a project idea? Drop a message and I’ll get back to you!</p>
        </div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full max-w-xl flex flex-col gap-4 mt-6" action="https://formspree.io/f/mjgbqbag" method="POST">
          <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
          <textarea name="message" placeholder="Your Message" required rows={5} className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="mt-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold shadow-lg shadow-pink-500/40">
            Send Message
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */
function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 pt-12 pb-16 px-8 max-w-4xl mx-auto">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold mb-6 text-white">
        {title}
      </motion.h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }} className="text-gray-300 leading-relaxed">
        {children}
      </motion.div>
    </section>
  );
}

function EduCard({ degree, subjects, details }: { degree: string; subjects: string; details: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
      <h3 className="font-semibold text-xl text-white">{degree}</h3>
      <p className="text-gray-300 mt-1">{subjects}</p>
      <p className="text-sm text-gray-400 mt-1">{details}</p>
    </div>
  );
}

function ExpCard({ title, role, desc }: { title: string; role: string; desc: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
      <h3 className="font-semibold text-xl text-white">{title}</h3>
      <p className="text-gray-300 mt-1">{role}</p>
      <p className="text-sm text-gray-400 mt-1">{desc}</p>
    </div>
  );
}
