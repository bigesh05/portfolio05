import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-10 py-20 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="space-y-6 text-gray-400 text-lg"
      >
        <p>If you want to get in touch, feel free to reach out via:</p>

        <ul className="space-y-3">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:admin@shopemporia.store" className="underline hover:text-white">
              admin@shopemporia.store
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/bigeshpoudel" className="underline hover:text-white" target="_blank">
              linkedin.com/in/bigeshpoudel
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/bigeshpoudel" className="underline hover:text-white" target="_blank">
              github.com/bigeshpoudel
            </a>
          </li>
        </ul>

        <p className="mt-6">Looking forward to connecting!</p>
      </motion.div>
    </main>
  );
}
