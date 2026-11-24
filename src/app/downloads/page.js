import PageHeader from '@/components/PageHeader';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { conference } from '@/data/site';

export const metadata = { title: 'Templates & downloads' };

const IEEE = 'https://www.ieee.org/conferences/publishing/templates.html';
const sections = [
  { title: 'For authors', items: [
    { name: 'IEEE conference paper templates (LaTeX & Word)', note: 'Maintained by IEEE. Use the US-letter conference template.', href: IEEE },
    { name: 'Call for papers (flyer)', note: 'To be published' },
  ] },
  { title: 'For presenters', items: [
    { name: 'Presentation slide template', note: 'To be published' },
    { name: 'Poster template', note: 'To be published' },
    { name: 'IEEE copyright form', note: 'Provided through the camera-ready process' },
  ] },
  { title: 'For sponsors', items: [{ name: 'Sponsorship prospectus', note: 'Available on request', href: `mailto:${conference.email}?subject=Sponsorship%20prospectus` }] },
];

export default function Downloads() {
  return (
    <>
      <PageHeader label="Resources" title="Templates & downloads">Files are listed here as soon as they are final.</PageHeader>
      <div className="container section max-w-4xl space-y-12">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="border-b-2 border-[#f5b800] pb-2 text-2xl font-semibold">{s.title}</h2>
            <ul className="divide-y divide-[#e2e5ec]">
              {s.items.map((i) => (
                <li key={i.name} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div><p className="font-semibold">{i.name}</p><p className="text-sm text-slate-600">{i.note}</p></div>
                  {i.href
                    ? <a href={i.href} {...(i.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })} className="secondary-button shrink-0">Open {i.href.startsWith('http') && <FaExternalLinkAlt className="ml-2 text-xs" aria-hidden />}</a>
                    : <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-slate-600">Not yet available</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
