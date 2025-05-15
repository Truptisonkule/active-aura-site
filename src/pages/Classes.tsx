
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const Classes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classesData = [
    {
      title: "Strength Training",
      description: "Build muscle, increase strength, and improve your overall fitness with our comprehensive strength training classes.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      schedule: "Mon, Wed, Fri - 7:00 AM, 6:00 PM",
      duration: "60 min"
    },
    {
      title: "Cardio HIIT",
      description: "High-intensity interval training designed to burn fat, improve endurance and boost your metabolism.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      schedule: "Tue, Thu - 8:00 AM, 7:00 PM",
      duration: "45 min"
    },
    {
      title: "Yoga & Flexibility",
      description: "Improve flexibility, balance, and mental wellness with our yoga classes suitable for all levels.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
      schedule: "Mon, Wed, Fri - 9:00 AM, 5:00 PM",
      duration: "60 min"
    },
    {
      title: "CrossFit",
      description: "Challenge yourself with varied functional movements performed at high intensity to build strength and conditioning.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      schedule: "Tue, Thu, Sat - 6:00 AM, 5:30 PM",
      duration: "60 min"
    },
    {
      title: "Spinning",
      description: "Indoor cycling workouts that combine rhythm and visualization to deliver an effective and fun cardio experience.",
      image: "https://images.unsplash.com/photo-1591741544554-13df92d3d515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      schedule: "Mon, Wed, Fri - 6:00 AM, 6:30 PM",
      duration: "45 min"
    },
    {
      title: "Boxing Fitness",
      description: "Learn boxing techniques while getting a full-body workout that improves coordination and burns calories.",
      image: "https://images.unsplash.com/photo-1549824506-b7045a1a059f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      schedule: "Tue, Thu - 7:00 PM, Sat - 10:00 AM",
      duration: "60 min"
    }
  ];

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
              <span className="text-gym-yellow">Fitness </span>
              Classes
            </h2>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Elevate your workout with our expert-led fitness classes. From high-energy cardio to 
              mindful yoga, our diverse program offers something for every fitness level and goal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classesData.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="bg-gym-dark border-gray-700 text-white h-full flex flex-col overflow-hidden hover:border-gym-yellow transition-colors duration-300">
                  <div className="relative">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={classItem.image} 
                        alt={classItem.title} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{classItem.title}</h3>
                      <p className="text-gray-400 mb-4">{classItem.description}</p>
                    </div>
                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <div className="flex items-center text-sm text-gray-400 mb-1">
                        <span className="font-medium text-gym-yellow mr-2">Schedule:</span> 
                        <span>{classItem.schedule}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="font-medium text-gym-yellow mr-2">Duration:</span> 
                        <span>{classItem.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-gym-yellow text-black px-8 py-3 rounded font-bold hover:bg-yellow-400 transition-colors">
              VIEW TIMETABLE
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Classes;
