import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-lg z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
              📦 TempDrop
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/#features" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</Link>
            <Link href="/#about" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;