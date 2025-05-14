
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MotivationBanner from '../components/MotivationBanner';
import Services from '../components/Services';
import TrainersSection from '../components/TrainersSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gym-black text-white">
      <Navbar />
      <Hero />
      <MotivationBanner />
      <Services />
      <TrainersSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
