import { FaGlobe, FaMicrophone } from 'react-icons/fa';

export default function SpeakerCard({ name, institution, country, image, index, priority }) {
  return (
    <article className="group flex h-full flex-col border border-[#e2e5ec] bg-white transition-shadow hover:shadow-lg focus-within:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#eaf1fb]">
        <img src={image} alt={`Portrait of ${name}`} loading={priority ? 'eager' : 'lazy'}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-0 top-0 flex items-center gap-1.5 bg-[#f5b800] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900">
          <FaMicrophone aria-hidden /> Keynote{index != null && ` ${String(index + 1).padStart(2, '0')}`}
        </span>
        <span className="absolute bottom-0 right-0 flex items-center gap-1.5 bg-[#0b1f4d] px-3 py-1.5 text-xs font-medium text-white">
          <FaGlobe className="text-[#f5c542]" aria-hidden /> {country}
        </span>
      </div>
      <div className="flex flex-1 flex-col border-t-4 border-[#0b1f4d] p-5">
        <h3 className="text-xl font-semibold leading-snug text-[#0b1f4d]">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{institution}</p>
        <p className="mt-auto border-t border-[#e2e5ec] pt-4 text-xs text-slate-600">Talk title &amp; abstract to be announced</p>
      </div>
    </article>
  );
}
