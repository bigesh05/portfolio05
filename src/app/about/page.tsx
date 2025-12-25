"use client";

import { motion } from "framer-motion";


export default function AboutPage() {
return (
<main className="min-h-screen px-10 py-20 max-w-5xl mx-auto">
<motion.h2
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl font-bold mb-8"
>
About Me
</motion.h2>


<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.2, duration: 0.8 }}
className="space-y-6 text-gray-400 text-lg"
>
<p>
I am <strong>Bigesh Poudel</strong>, an AI Engineer with a strong focus on <strong>FinTech, trading systems, and real-world asset tokenization</strong>. I completed my MSc in Artificial Intelligence at Queen Mary University of London in September 2024.
</p>


<p>
My academic journey allowed me to explore advanced methodologies in <strong>AI, deep learning, and time-series forecasting</strong>, and apply them in practical financial projects, including stock market prediction using ARIMA, Prophet, and LSTM models.
</p>


<p>
As an entrepreneur and active member of the <strong>Nepalese Young Entrepreneur Forum (NYEF)</strong>, I have invested in and supported innovative ventures, including Organic Mushroom Pvt Ltd, and have built products like <strong>STOXIFY</strong> — a stock trading simulator — and an <strong>RWA invoice tokenization MVP</strong>.
</p>


<p>
I strive to bridge the gap between academic AI research and real-world financial applications, building scalable systems that leverage data-driven insights for trading, investment, and fintech solutions.
</p>
</motion.div>
</main>
);
}