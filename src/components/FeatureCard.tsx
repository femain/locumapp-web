import React from "react";

export type FeatureCardProps = {
  title: string;
  body: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, body }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <h3 className="text-base font-semibold mb-2">{title}</h3>
    <p className="text-sm text-slate-300">{body}</p>
  </div>
);

export default FeatureCard;
