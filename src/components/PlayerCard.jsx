import React from "react";

export default function PlayerCard({ player }) {
  return (
    <div className="flex flex-col rounded-2xl border border-red-800/50 bg-[#080000] p-4 hover:border-red-500 hover:shadow-redglow transition-all">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-neutral-50">
            {player.name}
          </div>
          <div className="text-[0.65rem] uppercase tracking-[0.2em] text-red-400">
            {player.role}
          </div>
        </div>
      </div>
      {player.notes && (
        <p className="mt-1 text-[0.7rem] text-neutral-400">{player.notes}</p>
      )}
    </div>
  );
}
