
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Twitter } from 'lucide-react';

const Trainers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trainersData = [
    {
      name: "Amitee Loiselle",
      position: "FITNESS COACH",
      specialty: "Strength & Conditioning",
      experience: "7+ years",
      bio: "Amitee specializes in transformative strength training programs tailored to individual goals and abilities.",
      image: "https://images.unsplash.com/photo-1604480133435-25b86862d276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Liam Harpaul",
      position: "CROSSFIT COACH",
      specialty: "CrossFit & Functional Training",
      experience: "8+ years",
      bio: "With extensive experience in CrossFit competitions, Liam helps members push their limits safely.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Mark Anthony",
      position: "CROSSFIT COACH",
      specialty: "Olympic Weightlifting",
      experience: "10+ years",
      bio: "Mark is an expert in Olympic lifts and advanced CrossFit techniques for athletes of all levels.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Ron Richardson",
      position: "BODY BUILDING",
      specialty: "Hypertrophy & Nutrition",
      experience: "12+ years",
      bio: "A champion bodybuilder, Ron guides members through effective muscle building programs.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Johnson",
      position: "YOGA INSTRUCTOR",
      specialty: "Vinyasa & Power Yoga",
      experience: "6+ years",
      bio: "Sarah combines traditional yoga practices with modern fitness approaches for mind-body wellness.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Chen",
      position: "NUTRITION COACH",
      specialty: "Sports Nutrition & Meal Planning",
      experience: "9+ years",
      bio: "Michael provides evidence-based nutrition advice to complement your fitness journey.",
      image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      social: {
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gym-black text-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
              Meet Our <span className="text-gym-yellow">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We are a team of experienced people, nutrition, sports and fitness passionate experts with talent
              and knowledge unsurpassed in the industry. Get to know us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainersData.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gym-dark border-gray-700 text-white overflow-hidden hover:border-gym-yellow transition-colors duration-300">
                  <div className="relative h-80">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a href={trainer.social.instagram} className="text-white bg-gym-yellow h-10 w-10 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                          <Instagram size={18} />
                        </a>
                        <a href={trainer.social.twitter} className="text-white bg-gym-yellow h-10 w-10 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                          <Twitter size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{trainer.name}</h3>
                    <p className="text-gym-yellow text-sm mb-3">{trainer.position}</p>
                    <div className="border-t border-gray-700 pt-3 mb-3">
                      <div className="flex text-sm mb-1">
                        <span className="text-gray-400 font-medium mr-2">Specialty:</span>
                        <span className="text-white">{trainer.specialty}</span>
                      </div>
                      <div className="flex text-sm">
                        <span className="text-gray-400 font-medium mr-2">Experience:</span>
                        <span className="text-white">{trainer.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{trainer.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-10 bg-gym-dark rounded-lg"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Are you passionate about fitness and helping others achieve their goals? We're always looking for talented 
                trainers and coaches to join our growing team.
              </p>
              <button className="bg-gym-yellow text-black px-8 py-3 rounded font-bold hover:bg-yellow-400 transition-colors">
                VIEW CAREER OPPORTUNITIES
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trainers;
