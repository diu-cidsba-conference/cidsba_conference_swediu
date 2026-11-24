import Link from 'next/link';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import Hero from '@/components/Hero';
import DatesTimeline from '@/components/DatesTimeline';
import SpeakerCard from '@/components/SpeakerCard';
import { keynoteSpeakers } from '@/data/speakers';
import { tracks, partners, places, conference } from '@/data/site';

const Head = ({ label, title, children, href, cta }) => (
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div className="max-w-3xl">
      <span className="section-label">{label}</span>
      <h2 className="section-heading">{title}</h2>
      {children && <p className="section-copy">{children}</p>}
    </div>
    {href && <Link href={href} className="secondary-button shrink-0 self-start md:self-auto">{cta} <FaArrowRight className="ml-2" aria-hidden /></Link>}
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />

      <section aria-labelledby="dates" className="section pb-10 md:pb-12">
        <div className="container">
          <Head label="Important dates" title="Plan your submission" href="/schedule" cta="Full schedule" />
          <div className="mt-8"><DatesTimeline /></div>
        </div>
      </section>

      <section aria-labelledby="about" className="section bg-[#f4f6fa]">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="section-label">About</span>
            <h2 id="about" className="section-heading">Where intelligent systems meet engineering practice</h2>
            <p className="section-copy">
              CIDSSE brings together researchers and practitioners working on intelligent systems, analytics, and the software
              that carries them into the real world. It is organized by the Department of Software Engineering at Daffodil
              International University, Dhaka.
            </p>
            <p className="section-copy">
              Accepted and presented papers will be submitted for inclusion in IEEE Xplore.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/submission" className="primary-button">Call for papers</Link>
              <Link href="/faq" className="secondary-button">Read the FAQ</Link>
            </div>
          </div>
          <dl className="divide-y divide-[#d5dae6] border-y border-[#d5dae6] self-start">
            {[
              ['Dates', conference.datesLabel],
              ['Venue', conference.venue],
              ['Host', 'Department of Software Engineering, Daffodil International University'],
              ['Format', 'Keynotes, technical sessions, five research tracks'],
              ['Proceedings', 'IEEE Xplore (accepted & presented papers)'],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[140px_1fr]">
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-600">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="tracks" aria-labelledby="tracks-h" className="section">
        <div className="container">
          <Head label="Research tracks" title="Five tracks, one community" href="/submission" cta="Submit to a track" />
          <ol className="mt-10 divide-y divide-[#e2e5ec] border-y border-[#e2e5ec]">
            {tracks.map((t, i) => (
              <li key={t.title} className="grid gap-3 py-7 md:grid-cols-[80px_1fr_1.3fr] md:gap-8">
                <span className="font-serif text-4xl font-semibold text-[#f5b800] [-webkit-text-stroke:1px_#0b1f4d]" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-semibold leading-snug"><span className="sr-only">Track {i + 1}: </span>{t.title}</h3>
                <p className="text-[15px] leading-7 text-slate-600">{t.topics}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="speakers" className="section bg-[#f4f6fa]">
        <div className="container">
          <Head label="Keynote speakers" title="Hear from leading researchers" href="/speakers" cta="All speakers" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {keynoteSpeakers.map((s, i) => <SpeakerCard key={s.id} {...s} index={i} />)}
          </div>
        </div>
      </section>

      <section aria-labelledby="venue" className="section">
        <div className="container">
          <Head label="Venue & Dhaka" title="Daffodil Smart City, and the city beyond">
            Sessions take place at Daffodil International University. Extend your stay with a few of Dhaka’s landmarks.
          </Head>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {places.map((p, i) => (
              <figure key={p.name} className={`relative overflow-hidden bg-[#0b1f4d] ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={p.image} alt={p.name} loading="lazy" className={`w-full object-cover ${i === 0 ? 'aspect-[4/3] md:h-full' : 'aspect-[16/10]'}`} />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1f4d] to-transparent p-4 pt-12 text-white">
                  <span className="block font-serif text-lg font-semibold">{p.name}</span>
                  <span className="text-sm text-[#dbe4f5]">{p.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-sm">
            <Link href="/contact#travel" className="font-semibold text-[#1a5aa6] underline underline-offset-4">Accommodation &amp; transportation details</Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="partners" className="section border-t border-[#e2e5ec] pb-10">
        <div className="container">
          <Head label="Partners" title="Organized with" href="/sponsors" cta="Sponsorship" />
          <ul className="mt-8 grid grid-cols-2 gap-px border border-[#e2e5ec] bg-[#e2e5ec] md:grid-cols-3 lg:grid-cols-6">
            {partners.map(({ name, logo, short }) => (
              <li key={name} className="flex h-32 flex-col items-center justify-center gap-2 bg-white p-4 text-center">
                {logo ? <img src={logo} alt="" loading="lazy" className="max-h-16 max-w-full object-contain" />
                  : <span className="font-mono text-xl font-semibold text-[#1a5aa6]">{short}</span>}
                <span className="text-xs font-medium leading-tight text-slate-700">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="news" className="section">
        <div className="container grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <span className="section-label">News &amp; announcements</span>
            <h2 className="section-heading">Updates will appear here</h2>
          </div>
          <div className="border-l-4 border-[#f5b800] bg-[#f4f6fa] p-6">
            <p className="leading-7 text-slate-700">No announcements have been published yet. Dates, speaker details and the programme will be posted on the news page as they are confirmed.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/news" className="primary-button">News page</Link>
              <a href={`mailto:${conference.email}`} className="secondary-button"><FaEnvelope className="mr-2" aria-hidden /> {conference.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="on-dark bg-[#0b1f4d] py-14 text-white">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Ready to join CIDSSE 2028?</h2>
            <p className="mt-3 text-[#dbe4f5]">Review the author guidelines and submit your paper, or check registration details.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/submission" className="gold-button">Submit a paper</Link>
            <Link href="/registration" className="ghost-light-button">Registration</Link>
          </div>
        </div>
      </section>
    </>
  );
}
