
'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import UploadCard from './components/UploadCard';
import Features from './components/Features';
import About from './components/About';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <UploadCard />
      <Features />
      <About />
    </>
  );
}
