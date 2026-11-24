import { FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function SpeakerCard({ name, title, institution, bio, image, linkedin, email, website }) {
  return (
    <article className="flex items-start gap-5 rounded-lg border border-[#e2e5ec] bg-white p-6">
      {image ? (
        <img src={image} alt={name} className="h-24 w-24 shrink-0 rounded-full object-cover object-top" />
      ) : (
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#eaf1fb] text-2xl font-semibold text-[#1a5aa6]">
          {name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold text-[#0b1f4d]">{name}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#1a5aa6]">{title}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{institution}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{bio}</p>
        <div className="mt-5 flex items-center gap-3">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-sky-100 hover:text-sky-700">
              <FaLinkedin size={16} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-sky-100 hover:text-sky-700">
              <FaEnvelope size={16} />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-sky-100 hover:text-sky-700">
              <FaGlobe size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
