import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#1a0000,_#000)] pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center">
        <motion.div
          className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] border border-red-600/80 bg-black/60 shadow-redglow"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-4xl font-extrabold tracking-[0.35em] text-red-500 glitch-text">
            ROSO
          </span>
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-red-900/50 mix-blend-screen" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="mb-3 text-4xl font-extrabold uppercase tracking-[0.25em] text-neutral-50 sm:text-5xl">
            Where <span className="text-red-500">Talent</span> Blooms
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-neutral-300 sm:text-base">
            ROSO Esports is a competitive Valorant organization bringing
            together grinders, creators, and staff under one polished brand.
            From Royal to Kyngz, every roster is built to win.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <a
            href="#teams"
            className="glitch-on-hover rounded-full border border-red-600 bg-red-600/20 px-8 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-300 hover:bg-red-600/40"
          >
            View Teams
          </a>
          <a
            href="#staff"
            className="rounded-full border border-neutral-600/60 px-8 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 hover:border-red-600 hover:text-red-300"
          >
            Meet Staff
          </a>
        </motion.div>
      </div>
    </section>
  );
}
