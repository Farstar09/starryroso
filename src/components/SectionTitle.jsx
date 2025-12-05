import React from "react";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-red-400">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-wide text-neutral-50 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-xs text-neutral-400 sm:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}
