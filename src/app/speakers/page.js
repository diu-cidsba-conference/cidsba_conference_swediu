import SpeakerCard from '@/components/SpeakerCard';
import { keynoteSpeakers } from '@/data/speakers';

export default function Speakers() {
  return (
    <div className="section bg-white">
      <div className="container">
        <div className="max-w-3xl">
          <span className="section-label">Speakers</span>
          <h1 className="section-heading">Keynote speakers</h1>
          <p className="section-copy">
            CIDSSE 2028 brings together influential researchers, academics, and industry leaders to share ideas shaping the future of intelligence and data-driven innovation.
          </p>
        </div>

        <div className="mt-12">
          <div id="keynote" className="scroll-mt-24">
            <div className="grid gap-5 md:grid-cols-2">
              {keynoteSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} {...speaker} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-lg border border-[#e2e5ec] bg-[#f4f6fa] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[#0b1f4d]">Interested in speaking at the conference?</h2>
            <p className="mt-1 text-sm text-slate-600">We welcome keynote, invited talk, and panel session proposals.</p>
          </div>
          <a href="/contact" className="primary-button whitespace-nowrap">Contact us</a>
        </div>
      </div>
    </div>
  );
}
