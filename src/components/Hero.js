import Link from 'next/link';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { conference } from '@/data/site';

export default function Hero() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-[#0b1f4d] text-white">
      <img src="/images/diu-campus.jpg" alt="" fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1f4d] from-25% via-[#0b1f4d]/75 to-[#0b1f4d]/30" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[#0b1f4d]/80 to-transparent" aria-hidden />
      <div className="container grid gap-12 py-16 md:py-24 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#f5c542]">
            IEEE conference · Dhaka, Bangladesh · Hosted by DIU
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            {conference.full}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#dbe4f5] md:text-lg">
            A forum for researchers, practitioners and academics to present work in AI, data science,
            software engineering and emerging computational technologies.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-[15px] font-medium sm:flex-row sm:gap-8">
            <li className="flex items-center gap-2"><FaCalendarAlt className="text-[#f5c542]" aria-hidden /> {conference.datesLabel}</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#f5c542]" aria-hidden /> {conference.venue}</li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/submission" className="gold-button">Submit a paper <FaArrowRight className="ml-2" aria-hidden /></Link>
            <Link href="/registration" className="ghost-light-button">Registration info</Link>
          </div>
        </div>
        <div className="border border-white/30 bg-[#0b1f4d]/85 p-4 backdrop-blur-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[#c9d3ea]">Conference begins in</p>
          <CountdownTimer targetDate={conference.start} />
        </div>
      </div>
    </section>
  );
}
