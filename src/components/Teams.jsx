import React from "react";
import { useNavigate } from "react-router-dom";
import { teams } from "../data/teams.js";
import SectionTitle from "./SectionTitle.jsx";

export default function Teams() {
  const navigate = useNavigate();

  return (
    <section id="teams" className="bg-black py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <SectionTitle
          eyebrow="Our Lineup"
          title="ROSO Teams"
          subtitle="From your top Esports title roster to academy and development teams."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <button
              key={team.slug}
              onClick={() => navigate(`/teams/${team.slug}`)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-red-700/40 bg-gradient-to-br from-black to-[#150000] p-5 text-left shadow-[0_0_25px_rgba(0,0,0,0.9)] hover:border-red-500 hover:shadow-redglow transition-all"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-wide text-neutral-50">
                  {team.name}
                </h3>
                <span className="rounded-full border border-red-700/60 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-red-400">
                  {team.level}
                </span>
              </div>
              <p className="mb-4 text-xs text-neutral-300">
                {team.description}
              </p>
              <span className="mt-auto text-[0.65rem] uppercase tracking-[0.2em] text-red-400/80">
                View roster
              </span>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-red-600 to-transparent" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
