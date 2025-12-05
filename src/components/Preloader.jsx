import React from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative flex flex-col items-center gap-4">
        <motion.div
          className="flex h-32 w-32 items-center justify-center rounded-3xl border border-red-600 shadow-redglow"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{
            scale: [0.9, 1.05, 0.95, 1],
            opacity: [0.5, 1, 0.7, 1],
            rotate: [0, -2, 2, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: 2,
            repeatType: "mirror",
          }}
        >
          <motion.span
            className="text-3xl font-extrabold tracking-[0.4em] text-red-500 glitch-text"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 1, 0.4, 1] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            ROSO
          </motion.span>
        </motion.div>

        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-neutral-400"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Booting Systems
        </motion.p>
      </div>
    </motion.div>
  );
}
