
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} TempDrop. All rights reserved.</p>
                <p className="mt-1">
                    <Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
                    <span className="mx-2">|</span>
                    <Link href="/terms" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
                </p>
                 <p className="mt-2">Made with ❤️ using React, Tailwind & Supabase</p>
            </div>
        </footer>
    );
};

export default Footer;
