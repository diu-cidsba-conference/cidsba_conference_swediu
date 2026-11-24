import PageHeader from '@/components/PageHeader';
import { FaRegNewspaper, FaEnvelope } from 'react-icons/fa';
import { conference } from '@/data/site';

export const metadata = { title: 'News & announcements' };

export default function News() {
  return (
    <>
      <PageHeader label="News" title="News & announcements">
        Official updates on deadlines, speakers and the programme.
      </PageHeader>
      <div className="container section">
        <div className="empty-state mx-auto max-w-3xl">
          <FaRegNewspaper className="mx-auto text-4xl text-[#1a5aa6]" aria-hidden />
          <h2 className="mt-5 text-2xl font-semibold">No announcements yet</h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
            Articles will be published here once the organizing committee confirms them. In the meantime, the call for papers and
            important dates are available on the submission page.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/submission" className="primary-button">Call for papers</a>
            <a href={`mailto:${conference.email}`} className="secondary-button"><FaEnvelope className="mr-2" aria-hidden /> Email the organizers</a>
          </div>
        </div>
      </div>
    </>
  );
}
