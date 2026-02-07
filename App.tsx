import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechComparison from './components/TechComparison';
import ChallengeSolution from './components/ChallengeSolution';
import Economics from './components/Economics';
import CloudIntegration from './components/CloudIntegration';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="technology">
          <TechComparison />
        </section>
        <section id="solution">
          <ChallengeSolution />
        </section>
        <section id="economics">
          <Economics />
        </section>
        <section id="manufacturing">
          <CloudIntegration />
        </section>
        <section id="team">
          <Team />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;