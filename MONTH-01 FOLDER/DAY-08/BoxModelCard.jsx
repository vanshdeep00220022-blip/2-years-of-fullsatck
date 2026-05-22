// Day 8: Mastering the CSS Box Model & Tailwind Containers
import React from 'react';

export default function BoxModelCard() {
  return (
    /* Tailwind 'container' creates a responsive fixed-width layout container */
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-sm mx-auto bg-slate-900 border-2 border-teal-500 rounded-xl shadow-2xl transition-all">
        
        {/* Visualizing the Box Model: Padding, Min-Width, and Min-Height in Action */}
        <div className="p-6 min-w-[320px] min-h-[200px] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-teal-400 mb-2">
              The Box Model Core
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Content space surrounded by padding, bounded by a border, isolated by margins. 
              Setting minimum dimensional boundaries stops layout collapse.
            </p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono text-center">
            box-sizing: border-box;
          </div>
        </div>

      </div>
    </div>
  );
}
