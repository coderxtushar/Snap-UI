'use client';
import { motion } from 'framer-motion';

const Star = ({ x, y, delay }: { x: string; y: string; delay?: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full opacity-80"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0, 1, 0.8, 1], scale: [0.5, 1, 1.1, 1] }}
    transition={{ duration: 2, repeat: Infinity, delay }}
    style={{ top: y, left: x }}
  />
);

const StarBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <Star
          key={i}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 100}%`}
          delay={Math.random() * 3}
        />
      ))}
      <motion.div
        className="absolute w-2 h-2 bg-blue-400 rounded-full"
        initial={{ x: '0%', y: '100%' }}
        animate={{ x: '100%', y: '-20%' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default StarBackground;
