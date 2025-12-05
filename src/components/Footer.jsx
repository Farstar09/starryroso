import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-red-900/40 bg-black/90 py-6 text-[0.7rem] text-neutral-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
        <span>
          © {new Date().getFullYear()} ROSO Esports · Where Talent Blooms
        </span>
        <span className="text-neutral-600">
          Built for Star · Structure inspired by NRG.gg
        </span>
      </div>
    </footer>
  );
}
