
import { Link } from 'react-router-dom';
import DumbbellModel from './DumbbellModel';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black via-gym-black/80 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-gym-yellow font-display font-semibold mb-4">
                For people who creates fun & sport experience
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white font-display mb-6">
                Your Fitness <span className="text-gradient">Journey</span> Starts Here
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Join our community of fitness enthusiasts and transform your body and mind with our expert trainers and state-of-the-art facilities.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/membership" 
                  className="px-8 py-3 bg-gym-yellow text-black font-bold rounded hover:bg-yellow-400 transition-colors inline-block text-center"
                >
                  JOIN NOW
                </Link>
                <Link 
                  to="/about" 
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-black transition-colors inline-block text-center"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="bg-gym-dark/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800 shadow-xl animate-fade-in">
                <DumbbellModel />
                <p className="text-center text-gray-300 mt-2">Interactive 3D Model - Drag to rotate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
