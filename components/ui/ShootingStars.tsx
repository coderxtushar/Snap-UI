'use client';

import { useMemo } from 'react';

const StarBackground = () => {
  const stars = useMemo(() => {
    const shadows = [];
    for (let i = 0; i < 300; i++) {
      const x = Math.floor(Math.random() * 1920);
      const y = Math.floor(Math.random() * 1000);
      shadows.push(`${x}px ${y}px #ffffff`);
    }
    return shadows.join(', ');
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent"
      style={{ boxShadow: stars }}
    />
  );
};

const Meteor = ({ index }: { index: number }) => {
  const top = Math.floor(Math.random() * 250) + 50;
  const left = Math.floor(Math.random() * 90) + 9;
  const duration = (Math.random() * 7 + 3).toFixed(2); // Between 3s to 10s

  return (
    <div
      className={`meteor absolute`}
      style={{
        top: `${top}px`,
        left: `${left}%`,
        animation: `meteor ${duration}s linear infinite`,
      }}
    >
      <div className="meteor-head"></div>
    </div>
  );
};

const MeteorShower = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-[#080e21] to-[#1b2735]">
      <StarBackground />
      {Array.from({ length: 15 }).map((_, i) => (
        <Meteor key={i} index={i} />
      ))}
    </div>
  );
};

export default MeteorShower;
