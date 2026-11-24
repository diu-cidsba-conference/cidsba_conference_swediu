'use client';
import { useState, useEffect } from 'react';

const units = [['days', 'Days'], ['hours', 'Hours'], ['minutes', 'Min'], ['seconds', 'Sec']];

export default function CountdownTimer({ targetDate }) {
  const [left, setLeft] = useState(null); // null until mounted: avoids hydration mismatch

  useEffect(() => {
    const tick = () => {
      const d = Math.max(0, new Date(targetDate) - new Date());
      setLeft({
        days: Math.floor(d / 864e5),
        hours: Math.floor(d / 36e5) % 24,
        minutes: Math.floor(d / 6e4) % 60,
        seconds: Math.floor(d / 1e3) % 60,
      });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  return (
    <div role="timer" aria-label="Time until the conference begins" className="grid grid-cols-4 gap-px bg-white/20">
      {units.map(([k, label]) => (
        <div key={k} className="bg-[#0b1f4d] px-2 py-3 text-center">
          <div className="font-mono text-2xl font-semibold tabular-nums text-white md:text-3xl">
            {left ? String(left[k]).padStart(2, '0') : '––'}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-wider text-[#c9d3ea]">{label}</div>
        </div>
      ))}
    </div>
  );
}
