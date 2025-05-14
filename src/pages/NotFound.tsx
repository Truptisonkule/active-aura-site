
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gym-black text-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold mb-6 font-display">
            <span className="text-gym-yellow">4</span>0<span className="text-gym-yellow">4</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Oops! Page not found</p>
          <p className="text-gray-400 max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="bg-gym-yellow text-black px-8 py-3 rounded font-bold hover:bg-yellow-400 transition-colors">
            RETURN TO HOME
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
