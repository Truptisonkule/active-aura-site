
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Timetable = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedDay, setSelectedDay] = useState('monday');

  const schedule = {
    monday: [
      { time: "06:00 - 07:00", class: "Morning CrossFit", trainer: "Liam Harpaul", level: "All Levels" },
      { time: "07:30 - 08:30", class: "Strength Training", trainer: "Ron Richardson", level: "Intermediate" },
      { time: "09:00 - 10:00", class: "Yoga Flow", trainer: "Sarah Johnson", level: "Beginner" },
      { time: "11:00 - 12:00", class: "HIIT Circuit", trainer: "Mark Anthony", level: "Advanced" },
      { time: "16:00 - 17:00", class: "Functional Fitness", trainer: "Amitee Loiselle", level: "All Levels" },
      { time: "17:30 - 18:30", class: "Spinning", trainer: "Michael Chen", level: "All Levels" },
      { time: "19:00 - 20:00", class: "Evening CrossFit", trainer: "Liam Harpaul", level: "Intermediate" }
    ],
    tuesday: [
      { time: "06:00 - 07:00", class: "Bootcamp", trainer: "Mark Anthony", level: "Advanced" },
      { time: "08:00 - 09:00", class: "Pilates", trainer: "Sarah Johnson", level: "All Levels" },
      { time: "10:30 - 11:30", class: "Boxing", trainer: "Ron Richardson", level: "Beginner" },
      { time: "12:00 - 13:00", class: "Bodyweight Circuit", trainer: "Amitee Loiselle", level: "Intermediate" },
      { time: "17:00 - 18:00", class: "HIIT Express", trainer: "Michael Chen", level: "All Levels" },
      { time: "18:30 - 19:30", class: "Power Yoga", trainer: "Sarah Johnson", level: "Intermediate" }
    ],
    wednesday: [
      { time: "06:00 - 07:00", class: "Morning CrossFit", trainer: "Liam Harpaul", level: "All Levels" },
      { time: "07:30 - 08:30", class: "Strength Training", trainer: "Ron Richardson", level: "Intermediate" },
      { time: "09:00 - 10:00", class: "Yoga Flow", trainer: "Sarah Johnson", level: "Beginner" },
      { time: "11:00 - 12:00", class: "HIIT Circuit", trainer: "Mark Anthony", level: "Advanced" },
      { time: "16:00 - 17:00", class: "Functional Fitness", trainer: "Amitee Loiselle", level: "All Levels" },
      { time: "17:30 - 18:30", class: "Spinning", trainer: "Michael Chen", level: "All Levels" },
      { time: "19:00 - 20:00", class: "Evening CrossFit", trainer: "Liam Harpaul", level: "Intermediate" }
    ],
    thursday: [
      { time: "06:00 - 07:00", class: "Bootcamp", trainer: "Mark Anthony", level: "Advanced" },
      { time: "08:00 - 09:00", class: "Pilates", trainer: "Sarah Johnson", level: "All Levels" },
      { time: "10:30 - 11:30", class: "Boxing", trainer: "Ron Richardson", level: "Beginner" },
      { time: "12:00 - 13:00", class: "Bodyweight Circuit", trainer: "Amitee Loiselle", level: "Intermediate" },
      { time: "17:00 - 18:00", class: "HIIT Express", trainer: "Michael Chen", level: "All Levels" },
      { time: "18:30 - 19:30", class: "Power Yoga", trainer: "Sarah Johnson", level: "Intermediate" }
    ],
    friday: [
      { time: "06:00 - 07:00", class: "Morning CrossFit", trainer: "Liam Harpaul", level: "All Levels" },
      { time: "07:30 - 08:30", class: "Strength Training", trainer: "Ron Richardson", level: "Intermediate" },
      { time: "09:00 - 10:00", class: "Yoga Flow", trainer: "Sarah Johnson", level: "Beginner" },
      { time: "11:00 - 12:00", class: "HIIT Circuit", trainer: "Mark Anthony", level: "Advanced" },
      { time: "16:00 - 17:00", class: "Functional Fitness", trainer: "Amitee Loiselle", level: "All Levels" },
      { time: "17:30 - 18:30", class: "Spinning", trainer: "Michael Chen", level: "All Levels" },
      { time: "19:00 - 20:00", class: "Evening CrossFit", trainer: "Liam Harpaul", level: "Intermediate" }
    ],
    saturday: [
      { time: "08:00 - 09:30", class: "Weekend CrossFit", trainer: "Liam Harpaul", level: "All Levels" },
      { time: "10:00 - 11:00", class: "Bootcamp", trainer: "Mark Anthony", level: "Intermediate" },
      { time: "11:30 - 12:30", class: "Power Yoga", trainer: "Sarah Johnson", level: "All Levels" },
      { time: "13:00 - 14:00", class: "Boxing", trainer: "Ron Richardson", level: "Beginner" },
      { time: "15:00 - 16:00", class: "HIIT Circuit", trainer: "Amitee Loiselle", level: "Advanced" }
    ],
    sunday: [
      { time: "09:00 - 10:00", class: "Gentle Yoga", trainer: "Sarah Johnson", level: "All Levels" },
      { time: "10:30 - 11:30", class: "Functional Fitness", trainer: "Amitee Loiselle", level: "Beginner" },
      { time: "12:00 - 13:00", class: "CrossFit Light", trainer: "Liam Harpaul", level: "All Levels" },
      { time: "14:00 - 15:00", class: "Meditation & Stretching", trainer: "Michael Chen", level: "All Levels" }
    ]
  };

  const days = [
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' }
  ];

  // @ts-ignore - TypeScript doesn't like the dynamic key access
  const currentSchedule = schedule[selectedDay] || [];

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
  };

  const getLevelClass = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-900 text-green-200';
      case 'Intermediate':
        return 'bg-blue-900 text-blue-200';
      case 'Advanced':
        return 'bg-red-900 text-red-200';
      default:
        return 'bg-gray-700 text-gray-200';
    }
  };

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
              Class <span className="text-gym-yellow">Timetable</span>
            </h2>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Plan your week with our comprehensive class schedule. From early morning to evening sessions, 
              we've got options to fit every schedule.
            </p>
          </motion.div>

          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {days.map(day => (
                <button
                  key={day.id}
                  onClick={() => handleDayChange(day.id)}
                  className={`px-5 py-3 rounded-t-lg font-medium transition-colors ${
                    selectedDay === day.id 
                    ? 'bg-gym-yellow text-black' 
                    : 'bg-gym-dark text-white hover:bg-gray-700'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div 
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gym-dark rounded-lg p-6"
          >
            {currentSchedule.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4 text-left">Time</th>
                      <th className="py-3 px-4 text-left">Class</th>
                      <th className="py-3 px-4 text-left">Trainer</th>
                      <th className="py-3 px-4 text-left">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSchedule.map((slot, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-gray-800"
                      >
                        <td className="py-4 px-4 font-medium text-gym-yellow">{slot.time}</td>
                        <td className="py-4 px-4">{slot.class}</td>
                        <td className="py-4 px-4">{slot.trainer}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${getLevelClass(slot.level)}`}>
                            {slot.level}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center py-8 text-gray-400">No classes scheduled for this day.</p>
            )}
          </motion.div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gym-dark p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gym-yellow text-black flex items-center justify-center mr-3">1</span>
                Book Your Class
              </h3>
              <p className="text-gray-400 mb-4">
                Reserve your spot in advance through our app or website to ensure availability.
              </p>
              <button className="text-gym-yellow hover:underline transition-colors">
                Download Our App →
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gym-dark p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gym-yellow text-black flex items-center justify-center mr-3">2</span>
                Arrive Early
              </h3>
              <p className="text-gray-400 mb-4">
                Come 10-15 minutes before class starts to prepare and set up your equipment.
              </p>
              <button className="text-gym-yellow hover:underline transition-colors">
                View Guidelines →
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gym-dark p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gym-yellow text-black flex items-center justify-center mr-3">3</span>
                Enjoy Your Workout
              </h3>
              <p className="text-gray-400 mb-4">
                Our expert trainers will guide you through an effective and enjoyable session.
              </p>
              <button className="text-gym-yellow hover:underline transition-colors">
                Meet Our Trainers →
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timetable;
