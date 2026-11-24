'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate, title = 'Conference Countdown' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="min-w-[64px] text-center sm:min-w-[96px]">
      <div className="font-mono text-4xl font-medium tabular-nums text-white md:text-6xl">{value.toString().padStart(2, '0')}</div>
      <div className="mt-2 font-mono text-xs uppercase tracking-wider text-[#c9d3ea]">{label}</div>
    </div>
  );

  return (
    <div className="bg-[#0b1f4d] py-10 sm:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="mb-8 text-center text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        <div className="flex items-start justify-center gap-2 sm:gap-6 md:gap-10">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="font-mono text-3xl text-[#5b7bbf] md:text-5xl">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="font-mono text-3xl text-[#5b7bbf] md:text-5xl">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="font-mono text-3xl text-[#5b7bbf] md:text-5xl">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}