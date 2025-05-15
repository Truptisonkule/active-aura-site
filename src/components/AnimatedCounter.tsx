
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({ end, duration, suffix = '', className = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, margin: "0px 0px -100px 0px" });
  const startTime = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (isInView) {
      const animate = (timestamp: number) => {
        if (!startTime.current) startTime.current = timestamp;
        const progress = timestamp - startTime.current;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));
        
        if (percentage < 1) {
          animationFrameId.current = requestAnimationFrame(animate);
        }
      };
      
      animationFrameId.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, [isInView, end, duration]);

  return (
    <div ref={countRef} className={className}>
      <span className="text-4xl font-bold text-gym-yellow">
        {count}{suffix}
      </span>
    </div>
  );
};

export default AnimatedCounter;
