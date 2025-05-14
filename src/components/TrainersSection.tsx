
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface TrainerProps {
  image: string;
  name: string;
  role: string;
}

const TrainerCard = ({ image, name, role }: TrainerProps) => {
  return (
    <div className="trainer-card animate-fade-in">
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-50"></div>
        
        {/* Social Icons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a href="#" className="bg-gym-yellow p-2 rounded-full text-black hover:bg-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="bg-gym-yellow p-2 rounded-full text-black hover:bg-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="bg-gym-yellow p-2 rounded-full text-black hover:bg-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
      
      <div className="bg-gym-dark p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gym-yellow">{role}</p>
      </div>
    </div>
  );
};

const TrainersSection = () => {
  const trainers = [
    {
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Jason Mamoa",
      role: "GYM COACH"
    },
    {
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Irina Bella",
      role: "FITNESS COACH"
    },
  ];

  return (
    <section className="py-20 bg-gym-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-bold mb-6 font-display">
              <span className="text-gym-yellow">TEAM</span> STRENGTH IN NUMBERS, POWER IN TEAMWORK.
            </h2>
            <p className="text-gray-400 mb-8">
              Our team of certified fitness professionals is dedicated to helping you achieve your fitness goals through personalized training programs and expert guidance.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <span className="text-5xl font-bold text-gym-yellow">41+</span>
                <p className="text-white font-semibold">Professional Coach</p>
              </div>
              <div>
                <span className="text-5xl font-bold text-gym-yellow">23+</span>
                <p className="text-white font-semibold">Happy Members</p>
              </div>
            </div>
            <a href="/trainers" className="inline-block border-2 border-gym-yellow text-gym-yellow px-6 py-3 rounded font-semibold hover:bg-gym-yellow hover:text-black transition-colors">
              More Team →
            </a>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard
                key={index}
                image={trainer.image}
                name={trainer.name}
                role={trainer.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
