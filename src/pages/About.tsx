
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gym-black text-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
              About <span className="text-gym-yellow">FitNation</span>
            </h2>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Gym Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden lg:block absolute -bottom-6 -right-6 bg-gym-yellow p-6 rounded-lg transform hover:scale-105 transition-transform">
                <p className="text-black text-xl font-bold">10+ Years<br />Experience</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-300 mb-6">
                FitNation was founded in 2012 with a simple mission: to create a fitness community that empowers people 
                of all backgrounds and fitness levels. What started as a small local gym has grown into a 
                comprehensive fitness center with state-of-the-art equipment, expert trainers, and a wide variety 
                of classes.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that fitness is not just about physical strength but also about mental wellness, community 
                support, and sustainable lifestyle changes. Our holistic approach to fitness has helped thousands of 
                members achieve their goals and transform their lives.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-center">
                  <AnimatedCounter end={5000} duration={2000} suffix="+" className="mb-1" />
                  <p className="text-sm text-gray-400">Happy Members</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={40} duration={1500} suffix="+" className="mb-1" />
                  <p className="text-sm text-gray-400">Expert Trainers</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={25} duration={1500} suffix="+" className="mb-1" />
                  <p className="text-sm text-gray-400">Fitness Programs</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={3} duration={1000} className="mb-1" />
                  <p className="text-sm text-gray-400">Locations</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Inclusivity",
                  description: "We welcome everyone regardless of age, fitness level, or background."
                },
                {
                  title: "Excellence",
                  description: "We strive for the highest quality in our facilities, trainers, and programs."
                },
                {
                  title: "Community",
                  description: "We foster a supportive environment where members motivate each other."
                },
                {
                  title: "Innovation",
                  description: "We continuously evolve our methods based on the latest fitness research."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gym-dark p-6 rounded-lg border border-gray-700 hover:border-gym-yellow transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center mb-4 border border-gym-yellow text-gym-yellow">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gym-dark p-10 rounded-lg shadow-2xl bg-gradient-to-br from-gym-dark to-black">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Ready to Start Your Fitness Journey?</h3>
                <p className="text-gray-400">Join our community and let us help you achieve your fitness goals.</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/membership" className="bg-gym-yellow text-black px-8 py-3 rounded font-bold hover:bg-yellow-400 hover:scale-105 transform transition-all">
                  JOIN NOW
                </Link>
                <Link to="/contact" className="border border-white text-white px-8 py-3 rounded font-bold hover:border-gym-yellow hover:text-gym-yellow hover:scale-105 transform transition-all">
                  CONTACT US
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Add React Router import at the top
import { Link } from 'react-router-dom';

export default About;
