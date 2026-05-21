// Modern ES6 Default Import & Named Import execution side-by-side
import React from 'react';
import { MessageCard } from './MessageCard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4">
      <MessageCard 
        title="Component Architecture Mastered" 
        subtitle="Separating concerns cleanly using default and named React imports/exports." 
      />
    </div>
  );
}