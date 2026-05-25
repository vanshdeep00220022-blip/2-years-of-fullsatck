// Day 10: Mastering CSS Positioning Contexts using Tailwind CSS
import React from 'react';

export default function PositioningDemo() {
  return (
    /* The Parent container sets the positioning context with 'relative' */
    <div className="relative w-full max-w-xl mx-auto h-64 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
      
      {/* 1. Relative Content Block */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-teal-400 mb-2">
          CSS Positioning Matrix
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
          Relative components flow naturally inside the document layout but allow fine-tuned z-index layering control.
        </p>
      </div>

      {/* 2. Absolute Content Block: Ripped completely out of the normal layout flow */}
      {/* Positioned precisely at the bottom-right corner relative to its parent container */}
      <div className="absolute bottom-4 right-4 bg-teal-500/10 border border-teal-500/30 px-3 py-1 rounded-full text-xs text-teal-400 font-mono">
        absolute: bottom-4 right-4
      </div>

    </div>
  );
}