import React from "react";
import SectionTitle from "./SectionTitle.jsx";

export default function Social() {
  const socials = [
    {
      name: "YouTube",
      handle: "@ROSO",
      url: "https://youtube.com",
      tag: "Highlights & recaps",
    },
    {
      name: "TikTok",
      handle: "@ROSO",
      url: "https://tiktok.com",
      tag: "Clips & shorts",
    },
    {
      name: "X (Twitter)",
      handle: "@ROSO",
      url: "https://x.com",
      tag: "Announcements",
    },
  ];

  return (
    <section id="social" className="bg-black py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <SectionTitle
          eyebrow="Stay Connected"
          title="Socials"
          subtitle="Follow ROSO across platforms for updates, clips, and roster news."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-red-700/40 bg-[#050000] p-4 text-left hover:border-red-500 hover:shadow-redglow transition-all"
            >
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
                  {s.name}
                </div>
                <div className="text-sm font-semibold text-neutral-50">
                  {s.handle}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-[0.7rem] text-neutral-400">
                <span>{s.tag}</span>
                <span className="text-red-400 group-hover:glitch-text">
                  Visit →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
