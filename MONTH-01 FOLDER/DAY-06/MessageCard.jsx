// Modern ES6 Named Export - Component styled with Tailwind CSS
import React from 'react';

export function MessageCard({ title, subtitle }) {
  return (
    <div className="max-w-md mx-auto p-6 bg-slate-900 rounded-xl shadow-lg border border-slate-800 my-4">
      {/* Tailwind alignment: text-center handles text layout alignment cleanly */}
      <h2 className="text-2xl font-bold text-teal-400 text-center mb-2">
        {title}
      </h2>
      <p className="text-slate-400 text-center text-sm tracking-wide">
        {subtitle}
      </p>
    </div>
  );
}