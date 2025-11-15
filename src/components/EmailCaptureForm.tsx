"use client";

import React from "react";

const EmailCaptureForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your backend or mailing list service
  };

  return (
    <form
      className="mt-2 flex flex-col sm:flex-row gap-2 max-w-md"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Enter your email to get the app link"
        className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold hover:bg-slate-700 transition">
        Send link
      </button>
    </form>
  );
};

export default EmailCaptureForm;
