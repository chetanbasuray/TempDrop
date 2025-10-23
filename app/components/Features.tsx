
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 text-center bg-white rounded-2xl shadow-lg">
    <div className="w-16 h-16 mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full max-w-5xl mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900">Why Choose TempDrop?</h2>
        <p className="mt-4 text-lg text-slate-600">
          Everything you need for simple and secure temporary file sharing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
          title="Secure & Private"
          description="Your files are uploaded over a secure connection and are only accessible via a unique, temporary link."
        />
        <FeatureCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          title="Blazing Fast"
          description="Enjoy quick uploads and instant link generation. Share your files in seconds, not minutes."
        />
        <FeatureCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
          title="Simple & Intuitive"
          description="No sign-up required. Just drag, drop, and share. It's the easiest way to send files."
        />
      </div>
    </section>
  );
};

export default Features;
