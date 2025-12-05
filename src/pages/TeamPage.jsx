import React from "react";
import { useParams, Link } from "react-router-dom";
import { teams } from "../data/teams.js";
import { playersByTeam } from "../data/players.js";
import PlayerCard from "../components/PlayerCard.jsx";

export default function TeamPage() {
  const { slug } = useParams();
  const team = teams.find((t) => t.slug === slug);

  if (!team) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black pt-24">
        <p className="mb-4 text-sm text-neutral-400">
          Team not found or not configured yet.
        </p>
        <Link
          to="/"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 hover:text-red-300"
        >
          ← Back to home
        </Link>
      </div>
    );
  }

  const players = playersByTeam[slug] || [];

  return (
    <main className="min-h-screen bg-black pt-24 text-white">
      <section className="bg-[radial-gradient(circle_at_top,_#210000,_#000)] py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4">
          <div className="text-[0.7rem] uppercase tracking-[0.3em] text-red-400">
            ROSO · {team.level}
          </div>
          <h1 className="text-3xl font-bold tracking-wide sm:text-4xl">
            {team.name}
          </h1>
          <p className="max-w-2xl text-sm text-neutral-300">
            {team.longDescription || team.description}
          </p>

          <Link
            to="/"
            className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-red-400 hover:text-red-300"
          >
            ← Back to home
          </Link>
        </div>
      </section>

      <section className="bg-black py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Starting Roster
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {players.length > 0 ? (
              players.map((p) => <PlayerCard key={p.name} player={p} />)
            ) : (
              <p className="text-xs text-neutral-500">
                Roster placeholders are set. Edit{" "}
                <code className="rounded bg-neutral-900 px-1 py-0.5 text-[0.65rem]">
                  src/data/players.js
                </code>{" "}
                to add your real players for this team.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
