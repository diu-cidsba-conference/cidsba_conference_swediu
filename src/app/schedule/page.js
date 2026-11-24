import PageHeader from '@/components/PageHeader';
import DatesTimeline from '@/components/DatesTimeline';
import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { conference } from '@/data/site';

export const metadata = { title: 'Important dates & schedule' };

export default function Schedule() {
  return (
    <>
      <PageHeader label="Program" title="Important dates & schedule">
        Submission and registration milestones leading to the conference.
      </PageHeader>
      <div className="container section space-y-14">
        <section aria-labelledby="dates-h">
          <h2 id="dates-h" className="mb-6 text-2xl font-semibold">Key dates</h2>
          <DatesTimeline />
        </section>

        <section aria-labelledby="prog-h">
          <h2 id="prog-h" className="text-2xl font-semibold">Conference programme</h2>
          <dl className="mt-6 grid gap-px border border-[#e2e5ec] bg-[#e2e5ec] md:grid-cols-2">
            <div className="flex items-start gap-3 bg-white p-5"><FaCalendarAlt className="mt-1 text-[#1a5aa6]" aria-hidden /><div><dt className="font-mono text-xs uppercase tracking-wider text-slate-600">Dates</dt><dd className="mt-1 font-semibold">{conference.datesLabel}</dd></div></div>
            <div className="flex items-start gap-3 bg-white p-5"><FaMapMarkerAlt className="mt-1 text-[#1a5aa6]" aria-hidden /><div><dt className="font-mono text-xs uppercase tracking-wider text-slate-600">Venue</dt><dd className="mt-1 font-semibold">{conference.venue}</dd></div></div>
          </dl>
          <div className="empty-state mt-6">
            <h3 className="text-xl font-semibold">Session-by-session programme to be announced</h3>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
              The detailed programme will be published after paper acceptance. Keynote speakers are already confirmed.
            </p>
            <Link href="/speakers" className="secondary-button mt-6">View keynote speakers</Link>
          </div>
        </section>
      </div>
    </>
  );
}
