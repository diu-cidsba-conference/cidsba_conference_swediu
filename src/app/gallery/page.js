import PageHeader from '@/components/PageHeader';
import { FaRegImages } from 'react-icons/fa';

export const metadata = { title: 'Gallery' };

export default function Gallery() {
  return (
    <>
      <PageHeader label="Gallery" title="Conference gallery" />
      <div className="container section">
        <div className="empty-state mx-auto max-w-3xl">
          <FaRegImages className="mx-auto text-4xl text-[#1a5aa6]" aria-hidden />
          <h2 className="mt-5 text-2xl font-semibold">Photos will be added after the conference</h2>
          <p className="mt-3 text-slate-600">Check back after 29 January 2028.</p>
        </div>
      </div>
    </>
  );
}
