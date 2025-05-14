
import { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How often should I go to the gym?",
      answer: "It depends on your fitness goals and schedule. Generally, aiming for at least 3-5 workouts per week is a good starting point for most individuals. Consistency is key!"
    },
    {
      question: "What type of exercises should I do to lose weight?",
      answer: "A combination of cardio exercises (like running, cycling, or swimming) and strength training is most effective for weight loss. High-intensity interval training (HIIT) can also be particularly effective."
    },
    {
      question: "Is it necessary to hire a personal trainer?",
      answer: "While not necessary, a personal trainer can provide valuable guidance, especially for beginners. They can help create a personalized workout plan, ensure proper form, and provide motivation and accountability."
    },
    {
      question: "How long does it take to see results from regular gym workouts?",
      answer: "Results vary based on factors like consistency, intensity, diet, and genetics. Generally, you might notice some changes in energy and strength within 2-4 weeks, with more visible physical changes appearing after 6-8 weeks of consistent training."
    },
    {
      question: "How do I stay motivated to go to the gym?",
      answer: "Set specific, achievable goals, find a workout buddy, mix up your routine to prevent boredom, track your progress, reward yourself for achievements, and remember why you started. Finding activities you genuinely enjoy can also help maintain motivation."
    }
  ];

  return (
    <section className="py-20 bg-gym-black" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-gym-yellow">YOUR GUIDE TO</span> FITNESS SUCCESS!
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                  <AccordionTrigger className="text-left font-semibold py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
              alt="Fitness workout" 
              className="rounded-lg w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
