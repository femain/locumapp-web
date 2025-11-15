import React from "react";

export type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <p className="text-sm text-slate-100 mb-3">“{quote}”</p>
    <p className="text-sm font-semibold text-slate-200">{name}</p>
    <p className="text-xs text-slate-400">{role}</p>
  </div>
);

export default Testimonial;
