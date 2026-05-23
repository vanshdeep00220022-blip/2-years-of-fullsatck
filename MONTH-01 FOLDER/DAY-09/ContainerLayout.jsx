// Day 9: Structuring Balanced Interfaces using Tailwind CSS Containers
import React from 'react';

export default function ContainerLayout() {
  return (
    /* The '.container' class sets the max-width to match the active screen breakpoint */
    /* Combined with 'mx-auto' to anchor and center the layout container perfectly */
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-extrabold text-teal-400 mb-4">
          Tailwind Responsive Scaffolding
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
          By wrapping interfaces within native container parameters, widths adapt 
          automatically from mobile viewports up to large desktop monitors.
        </p>
      </div>
    </div>
  );
}