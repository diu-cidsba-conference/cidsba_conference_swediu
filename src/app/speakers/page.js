import PageHeader from '@/components/PageHeader';
import { keynoteSpeakers } from '@/data/speakers';
import SpeakerCard from '@/components/SpeakerCard';
import { conference } from '@/data/site';
import { FaGlobe, FaMicrophone, FaCalendarAlt } from 'react-icons/fa';

export const metadata = { title: 'Keynote speakers' };

export default function Speakers() {
  const countries = new Set(keynoteSpeakers.map((s) => s.country)).size;
  return (
    <>
      <PageHeader label="Speakers" title="Keynote speakers">
        Researchers from Asia, Europe and North America will anchor the technical programme of CIDSSE 2028.
      </PageHeader>

      <div className="border-b border-[#e2e5ec]">
        <dl className="container grid grid-cols-3 divide-x divide-[#e2e5ec] text-center">
          {[[FaMicrophone, keynoteSpeakers.length, 'Keynote speakers'], [FaGlobe, countries, 'Countries'], [FaCalendarAlt, '2', 'Conference days']].map(([Icon, n, l]) => (
            <div key={l} className="py-5">
              <dt className="flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-600"><Icon className="text-[#1a5aa6]" aria-hidden />{l}</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold">{n}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="container section">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keynoteSpeakers.map((s, i) => (
            <li key={s.id}><SpeakerCard {...s} index={i} priority={i < 4} /></li>
          ))}
        </ul>
        <div className="mt-14 flex flex-col gap-4 bg-[#0b1f4d] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-xl">Interested in proposing an invited talk or panel? Get in touch with the organizers.</p>
          <a href={`mailto:${conference.email}?subject=Speaker%20proposal`} className="gold-button">Email the organizers</a>
        </div>
      </div>
    </>
  );
}
