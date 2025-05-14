
const MotivationBanner = () => {
  const motivationalPhrases = [
    "TRAIN HARD", 
    "STAY HUMBLE", 
    "BELIEVE IN YOURSELF", 
    "RISE UP", 
    "NEVER GIVE UP", 
    "STRONGER EVERY REP", 
    "PUSH YOUR LIMITS", 
    "BE PROUD"
  ];

  // Create a doubled array for seamless looping
  const doubledPhrases = [...motivationalPhrases, ...motivationalPhrases];
  
  return (
    <div className="bg-gradient-to-r from-gym-orange to-gym-yellow py-3 -rotate-1 w-[102%] -ml-2 -mr-2 relative">
      <div className="marquee-container">
        <div className="marquee-content flex">
          {doubledPhrases.map((phrase, index) => (
            <div key={index} className="flex items-center mx-6">
              <span className="font-extrabold text-black text-xl whitespace-nowrap">{phrase}</span>
              <div className="mx-4 w-4 h-4 bg-black rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotivationBanner;
