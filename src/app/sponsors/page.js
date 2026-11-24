import PageHeader from '@/components/PageHeader';
import { partners, host, technical, conference } from '@/data/site';
import { platinumSponsors, goldSponsors, silverSponsors, bronzeSponsors } from '@/data/sponsors';
import { FaEye, FaHandshake, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

export const metadata = { title: 'Partners & sponsorship' };

const benefits = [
  [FaEye, 'Brand visibility', 'Reach researchers, professionals and decision-makers from across the region and beyond.'],
  [FaHandshake, 'Networking', 'Connect with leaders in AI, analytics and software engineering throughout the two days.'],
  [FaAward, 'Recognition', 'Be acknowledged across conference materials, promotion and the event programme.'],
];

const tiers = [
  ['Platinum sponsors', platinumSponsors, 'md:grid-cols-1', 'h-40'],
  ['Gold sponsors', goldSponsors, 'md:grid-cols-2', 'h-36'],
  ['Silver sponsors', silverSponsors, 'md:grid-cols-3', 'h-32'],
  ['Bronze sponsors', bronzeSponsors, 'md:grid-cols-4', 'h-28'],
];

function Tier({ title, items, cols, h }) {
  return (
    <section aria-label={title}>
      <h2 className="border-b-2 border-[#f5b800] pb-2 text-2xl font-semibold">{title}</h2>
      <ul className={`mt-6 grid grid-cols-1 gap-px border border-[#e2e5ec] bg-[#e2e5ec] ${cols}`}>
        {items.map((s) => {
          const body = (
            <>
              {s.logo ? <img src={s.logo} alt="" className="max-h-16 object-contain" /> : null}
              <span className="text-lg font-semibold">{s.name}</span>
              {s.description && <span className="text-sm text-slate-600">{s.description}</span>}
            </>
          );
          const cls = `flex ${h} flex-col items-center justify-center gap-1 bg-white p-4 text-center`;
          return <li key={s.name}>{s.website ? <a href={s.website} target="_blank" rel="noreferrer" className={`${cls} hover:bg-[#f4f6fa]`}>{body}</a> : <div className={cls}>{body}</div>}</li>;
        })}
      </ul>
    </section>
  );
}

export default function Sponsors() {
  const organizing = partners.filter((p) => p.logo && p.name !== host.name);
  return (
    <>
      <PageHeader label="Partners" title="Partners & sponsorship">
        The organizations behind CIDSSE 2028, and how to join them.
      </PageHeader>
      <div className="container section space-y-16">
        <section aria-labelledby="lead">
          <h2 id="lead" className="border-b-2 border-[#f5b800] pb-2 text-2xl font-semibold">Host &amp; technical support</h2>
          <div className="mt-6 grid gap-px border border-[#e2e5ec] bg-[#e2e5ec] md:grid-cols-2">
            <a href={host.url} target="_blank" rel="noreferrer" className="group flex min-h-[220px] flex-col items-center justify-center gap-4 bg-white p-8 text-center hover:bg-[#f4f6fa]">
              <img src={host.logo} alt="" className="max-h-24 object-contain" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#1a5aa6]">{host.role}</span>
              <span className="text-xl font-semibold">{host.name} <FaExternalLinkAlt className="ml-1 inline text-xs opacity-60" aria-hidden /></span>
            </a>
            <a href={technical.url} target="_blank" rel="noreferrer" className="group flex min-h-[220px] flex-col items-center justify-center gap-4 bg-white p-8 text-center hover:bg-[#f4f6fa]">
              <span className="font-serif text-5xl font-semibold text-[#1a5aa6]">{technical.short}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#1a5aa6]">{technical.role}</span>
              <span className="text-xl font-semibold">{technical.name} <FaExternalLinkAlt className="ml-1 inline text-xs opacity-60" aria-hidden /></span>
            </a>
          </div>
        </section>

        <section aria-labelledby="org">
          <h2 id="org" className="border-b-2 border-[#f5b800] pb-2 text-2xl font-semibold">Organizing partners</h2>
          <ul className="mt-6 grid grid-cols-2 gap-px border border-[#e2e5ec] bg-[#e2e5ec] md:grid-cols-5 [&>li:last-child:nth-child(odd)]:col-span-2 md:[&>li:last-child:nth-child(odd)]:col-span-1">
            {organizing.map(({ name, logo }) => (
              <li key={name} className="flex h-48 flex-col items-center justify-center gap-3 bg-white p-6 text-center">
                <img src={logo} alt="" loading="lazy" className="max-h-20 max-w-full object-contain" />
                <span className="text-sm font-semibold">{name}</span>
              </li>
            ))}
          </ul>
        </section>

        {tiers.map(([t, items, cols, h]) => <Tier key={t} title={t} items={items} cols={cols} h={h} />)}

        <section aria-labelledby="become" className="on-dark bg-[#0b1f4d] p-8 text-white md:p-12">
          <h2 id="become" className="text-3xl font-semibold">Become a sponsor</h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#dbe4f5]">
            Partner with an international academic conference. Sponsorship packages are being finalized; contact the team to discuss options.
          </p>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {benefits.map(([Icon, t, d]) => (
              <li key={t} className="border-t-2 border-[#f5b800] pt-4">
                <Icon className="text-xl text-[#f5c542]" aria-hidden />
                <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-[#dbe4f5]">{d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${conference.email}?subject=Sponsorship%20enquiry`} className="gold-button">Enquire about sponsorship</a>
            <a href={`mailto:${conference.email}?subject=Sponsorship%20prospectus`} className="ghost-light-button">Request the prospectus</a>
          </div>
        </section>
      </div>
    </>
  );
}
