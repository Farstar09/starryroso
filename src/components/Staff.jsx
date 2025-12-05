import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import { staff } from "../data/staff.js";

export default function Staff() {
  return (
    <section id="staff" className="bg-[#050000] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <SectionTitle
          eyebrow="Staff & Leadership"
          title="The People Behind ROSO"
          subtitle="Ownership, direction, and administration keeping the org moving forward."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-red-700/50 bg-black/70 p-5 shadow-redglow/20">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Owners
            </h3>
            <ul className="space-y-2 text-sm">
              {staff.owners.map((p) => (
                <li key={p.name}>
                  <span className="font-semibold text-neutral-50">
                    {p.name}
                  </span>
                  <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-neutral-400">
                    {p.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-700/40 bg-black/60 p-5">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Directors
            </h3>
            <ul className="space-y-2 text-sm">
              {staff.directors.map((p) => (
                <li key={p.name}>
                  <span className="font-semibold text-neutral-50">
                    {p.name}
                  </span>
                  <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-neutral-400">
                    {p.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-700/40 bg-black/60 p-5">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Administration
            </h3>
            <ul className="space-y-2 text-sm">
              {staff.administration.map((p) => (
                <li key={p.name}>
                  <span className="font-semibold text-neutral-50">
                    {p.name}
                  </span>
                  <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-neutral-400">
                    {p.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-2 text-[0.7rem] text-neutral-500">
          Edit staff entries in src/data/staff.js whenever your structure
          changes. This section is designed to behave like a Partners grid
          but highlights your leadership team.
        </p>
      </div>
    </section>
  );
}
