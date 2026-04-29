export type Project = {
  title: string;
  desc: string;
  tech?: string[];
  status?: string;
  link?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "FounderAI",
    desc: "AI-powered founder support and investor matching platform that helps founders build structured profiles, receive LLM evaluation, track progress, and get role-aware guidance. Investors can define their thesis and discover better-fit founders through transparent match percentages and reasoning.",
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "Supabase Postgres", "Hugging Face API", "LLM Evaluation", "Matching Engine", "Vercel", "Render"],
    status: "Active prototype",
    link: "https://founder-ai-pi.vercel.app/",
  },
  {
    title: "Nexus Chat",
    desc: "Messaging platform for companies and organizations where multiple admins can manage client and user conversations from one shared workspace. Built for organized communication, team-based handling, and centralized client support.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    status: "Recent project",
    link: "https://nexus-chat-tan.vercel.app/",
  },
  {
    title: "STOXIFY",
    desc: "AI-powered finance learning and paper-trading platform with an LLM financial assistant, stock forecasting concepts, reward systems, and simulated trading. Designed to help users learn market behavior without risking real capital.",
    tech: ["AI Assistant", "FinTech", "Paper Trading", "Forecasting"],
    link: "https://tradeintelligence.co/",
    note: "Completed with one contributor.",
  },
  {
    title: "Stock Market Analysis and Prediction",
    desc: "Time-series forecasting project using ARIMA, Prophet, and LSTM to analyze market trends and compare model behavior. Focused on prediction workflows, trend detection, and volatility-aware financial analysis.",
    tech: ["ARIMA", "Prophet", "LSTM", "Python", "Time Series"],
    status: "MSc project",
  },
  {
    title: "Academic Search Engine",
    desc: "Academic research paper search engine built as a master's group project to help users find relevant papers more easily. Used semantic retrieval with BERT to improve discovery beyond simple keyword matching.",
    tech: ["BERT", "NLP", "Semantic Search", "Information Retrieval"],
    status: "Academic project",
  },
  {
    title: "RWA Tokenization Platform",
    desc: "Blockchain MVP for real estate tokenization using Ethereum testnets and Hardhat. Built around practical real-world asset workflows with compliance-aware thinking in mind.",
    tech: ["Ethereum", "Hardhat", "Blockchain", "Real Estate Tokenization"],
    status: "Private",
  },
];
