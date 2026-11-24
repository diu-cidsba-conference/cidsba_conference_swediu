'use client';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { milestones } from '@/data/site';

const end = (m) => new Date(`${m.iso}T23:59:59+06:00`);

// Status is computed in the browser so a static build never shows stale states.
export default function DatesTimeline() {
  const [now, setNow] = useState(null);
  useEffect(() => setNow(new Date()), []);

  const done = (m) => !!now && now > end(m);
  const next = now ? milestones.find((m) => !done(m)) : null;
  const completed = milestones.filter(done).length;
  const daysLeft = next ? Math.ceil((end(next) - now) / 864e5) : null;

  return (
    <div>
      <ol>
        {/* < xl: vertical rail (date | marker | text). xl: horizontal rail (date / marker / text). */}
        <div className="grid xl:grid-cols-6">
          {milestones.map((m, i) => {
            const isDone = done(m);
            const isNext = next?.key === m.key;
            const last = i === milestones.length - 1;
            const status = isDone ? 'Completed' : isNext ? 'Next up' : m.kind === 'event' ? 'Conference' : m.kind === 'deadline' ? 'Deadline' : 'Upcoming';
            return (
              <li key={m.key} aria-current={isNext ? 'step' : undefined}
                className="grid grid-cols-[104px_28px_1fr] gap-x-4 xl:block xl:pr-5">
                {/* date: always two lines so every row/column lines up */}
                <div className="pb-8 xl:pb-0">
                  <p className={`font-serif text-[28px] font-semibold leading-none xl:text-3xl ${isDone ? 'text-slate-500' : 'text-[#0b1f4d]'}`}>{m.day ?? m.mon}</p>
                  <p className="mt-1.5 font-mono text-xs uppercase tracking-wider text-slate-600">{m.day ? `${m.mon} ` : ''}{m.year}</p>
                </div>

                {/* marker + rail */}
                <div className="relative xl:my-5 xl:h-7">
                  {!last && <span aria-hidden className={`absolute left-1/2 top-7 -ml-px h-[calc(100%-1.75rem)] w-0.5 xl:hidden ${isDone ? 'bg-[#1a5aa6]' : 'bg-[#d5dae6]'}`} />}
                  {!last && <span aria-hidden className={`absolute left-7 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 xl:block ${isDone ? 'bg-[#1a5aa6]' : 'bg-[#d5dae6]'}`} />}
                  <span className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 text-[11px] ${
                    isDone ? 'border-[#1a5aa6] bg-[#1a5aa6] text-white'
                    : isNext ? 'border-[#f5b800] bg-[#f5b800] ring-4 ring-[#f5b800]/30'
                    : m.kind === 'event' ? 'border-[#0b1f4d] bg-[#0b1f4d]' : 'border-[#9aa5be] bg-white'}`}>
                    {isDone ? <FaCheck aria-hidden /> : m.kind === 'event' ? <span className="h-2 w-2 rounded-full bg-[#f5b800]" /> : null}
                  </span>
                </div>

                {/* text */}
                <div className="pb-8 xl:pb-0">
                  <p className={`font-mono text-[11px] uppercase tracking-wider ${isNext ? 'font-bold text-[#7a5a00]' : 'text-slate-600'}`}>
                    {status}{isNext && daysLeft > 0 ? ` · ${daysLeft} days left` : ''}
                  </p>
                  <p className={`mt-1.5 text-[15px] leading-snug ${isDone ? 'text-slate-600' : 'font-semibold text-[#0b1f4d]'}`}>{m.label}</p>
                </div>
              </li>
            );
          })}
        </div>
      </ol>
      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-slate-600">
        {now ? `${completed} of ${milestones.length} milestones completed · Times in Bangladesh Standard Time` : ' '}
      </p>
    </div>
  );
}
