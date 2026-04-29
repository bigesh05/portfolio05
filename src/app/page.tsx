"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "TypeScript", "SQL", "C++", "Java", "React"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG", "Time Series Analysis"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "FastAPI"],
  },
  {
    title: "Cloud, Data & Deployment",
    skills: ["AWS", "Azure", "Hugging Face", "Database Design", "Git", "Deployment"],
  },
  {
    title: "Working Style",
    skills: ["Rapid Learning", "Fast Decision-Making", "Team Collaboration", "AI Tools & Automation"],
  },
];

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
            Building AI systems that combine machine learning, NLP, LLMs, automation, and data-driven decision support, with a strong interest in FinTech, intelligent products, and real-world problem solving.
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
      <Section id="about" title="Vision & Philosophy" className="-mt-14 md:-mt-20">
        &quot;I am a visionary technologist passionate about turning ambitious ideas into reality. Driven by the belief that innovation and collaboration can overcome any challenge, I leverage AI, Quant, FinTech, and blockchain to build intelligent, scalable systems that deliver measurable impact - empowering businesses, investors, and communities worldwide.&quot;
      </Section>

      <Section title="Education">
        <div className="flex flex-col gap-6">
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
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <ExpCard
          title="ShopEmporia LLC"
          role="Founder"
          desc="Founded and developed a US-registered fashion e-commerce platform, managing operations remotely while working with US vendors and China-based manufacturers to source, import, and sell products through the website and online marketplaces. Led business operations, digital marketing, team development, strategic decisions, financial planning, and performance tracking to support sustainable growth in a competitive market."
        />
      </Section>

      <Section id="projects" title="Projects">
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                {p.status && (
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300">
                    {p.status}
                  </span>
                )}
              </div>
              <p className="text-gray-400">{p.desc}</p>
              {p.tech && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {p.note && (
                <p className="mt-4 text-sm text-gray-400">{p.note}</p>
              )}
              {p.link && (
                <a
                  href={p.link}
                  className="inline-block mt-5 text-sm font-medium text-white underline underline-offset-4 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Collaboration">
        Open to meaningful collaborations across AI, FinTech, Web2, and Web3. I enjoy working with ambitious founders, builders, and multidisciplinary teams to turn complex ideas into intelligent products, from early concept and prototyping to deployment and real-world iteration.
      </Section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 relative z-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Contact</p>
              <h2 className="text-3xl font-semibold text-white mt-2">Let&apos;s connect</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Have an idea, collaboration, product discussion, or AI-focused opportunity? Send me a message and I&apos;ll get back to you.
            </p>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full flex flex-col gap-4" action="https://formspree.io/f/mjgbqbag" method="POST">
            <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
            <textarea name="message" placeholder="Your Message" required rows={6} className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none" />
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="mt-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold shadow-lg shadow-pink-500/40">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */
function Section({ id, title, children, className = "" }: { id?: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative z-10 pt-12 pb-16 px-8 max-w-4xl mx-auto ${className}`}>
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
