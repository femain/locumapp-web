import React from "react";

export type AudienceCardProps = {
  label: string;
  points: string[];
};

const AudienceCard: React.FC<AudienceCardProps> = ({ label, points }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <p className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wide">
      {label}
    </p>
    <ul className="space-y-2 text-sm text-slate-300">
      {points.map((point) => (
        <li key={point} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default AudienceCard;
