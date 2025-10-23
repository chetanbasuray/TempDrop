import type { Metadata } from 'next';
import Script from 'next/script';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'TempDrop - Enhanced File Sharing',
  description: 'A visually enhanced and user-friendly temporary file sharing application. Upload files securely and share expiring links with ease.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <style>{`
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
                animation: blob 7s infinite;
            }
            .animation-delay-2000 {
                animation-delay: 2s;
            }
            .animation-delay-4000 {
                animation-delay: 4s;
            }
        `}</style>
      </head>
      <body className="bg-slate-50 font-sans antialiased">
        <div className="flex flex-col min-h-screen text-slate-800 relative overflow-x-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -translate-x-10 -translate-y-10"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <main className="flex-grow flex flex-col items-center justify-center z-10 px-4">
              {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}