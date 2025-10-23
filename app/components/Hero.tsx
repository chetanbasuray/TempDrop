
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center pt-32 pb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Simple, Secure File Sharing
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Drag, drop, and share. Your files are uploaded securely and available via a temporary link. Privacy-focused and hassle-free.
      </p>
    </section>
  );
};

export default Hero;
