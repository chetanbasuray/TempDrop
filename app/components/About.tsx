import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-slate-900">About TempDrop</h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          TempDrop was born from a simple idea: file sharing should be easy, private, and free from the clutter of required sign-ups and complicated interfaces. We believe in providing a straightforward tool that respects your privacy. Whether you are a developer sending a log file, a designer sharing a mock-up, or just sending a document to a friend, TempDrop is here to make that process seamless.
        </p>
      </div>
    </section>
  );
};

export default About;
