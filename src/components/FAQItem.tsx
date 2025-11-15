import React from "react";

export type FAQItemProps = {
  q: string;
  a: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ q, a }) => (
  <div>
    <p className="font-medium">{q}</p>
    <p className="text-slate-300">{a}</p>
  </div>
);

export default FAQItem;
