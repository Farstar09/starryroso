import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 nav-blur border-b border-red-700/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-600 shadow-redglow">
            <span className="text-lg font-bold text-red-500">R</span>
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-sm font-semibold tracking-[0.2em] text-red-500">
              ROSO
            </span>
            <span className="text-[0.6rem] uppercase text-neutral-300">
              Where Talent Blooms
            </span>
          </div>
        </button>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative transition-colors hover:text-red-400 ${
                isActive ? "text-red-500" : "text-neutral-200"
              }`
            }
          >
            Home
          </NavLink>

          <button
            onClick={() => {
              const el = document.getElementById("teams");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-neutral-200 hover:text-red-400 transition-colors text-sm"
          >
            Teams
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("staff");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-neutral-200 hover:text-red-400 transition-colors text-sm"
          >
            Staff
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("social");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-neutral-200 hover:text-red-400 transition-colors text-sm"
          >
            Social
          </button>

          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-red-600 bg-red-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 hover:bg-red-600/20"
          >
            Join Discord
          </a>
        </nav>
      </div>
    </header>
  );
}
