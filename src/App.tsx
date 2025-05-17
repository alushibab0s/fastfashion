import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import KeyIssues from './components/KeyIssues';
import IndustryComparison from './components/IndustryComparison';
import CallToAction from './components/CallToAction';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Hero />
      <Stats />
      <KeyIssues />
      <IndustryComparison />
      <Resources />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;