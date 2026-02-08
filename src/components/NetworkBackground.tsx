"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Node = { x: number; y: number };

export default function NetworkBackground({ count = 40 }: { count?: number }) {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setNodes(
      Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0">
      {/* Connecting lines */}
      {nodes.map((node, i) =>
        nodes.map((target, j) =>
          i < j && Math.hypot(node.x - target.x, node.y - target.y) < 200 ? (
            <div
              key={`${i}-${j}`}
              className="absolute bg-white/20"
              style={{
                left: node.x,
                top: node.y,
                width: Math.hypot(node.x - target.x, node.y - target.y),
                height: 0.5,
                transformOrigin: "top left",
                transform: `rotate(${Math.atan2(target.y - node.y, target.x - node.x)}rad)`,
              }}
            />
          ) : null
        )
      )}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-400/70 shadow-lg shadow-purple-400/40"
          initial={{ x: node.x, y: node.y }}
          animate={{ y: [node.y, node.y + 20] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3 + Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
