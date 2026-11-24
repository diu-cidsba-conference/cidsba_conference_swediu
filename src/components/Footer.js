import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { conference } from '@/data/site';

const cols = [
  ['Conference', [['Important dates', '/schedule'], ['Speakers', '/speakers'], ['Committees', '/committees'], ['Partners', '/sponsors'], ['Awards', '/awards'], ['News', '/news']]],
  ['Authors & attendees', [['Call for papers', '/submission'], ['Camera-ready', '/camera-ready'], ['Presentation guidelines', '/presentation-guidelines'], ['Registration', '/registration'], ['Downloads', '/downloads'], ['FAQ', '/faq']]],
];

export default function Footer() {
  return (
    <footer className="on-dark bg-[#0b1f4d] text-[#c9d3ea]">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <img src="/images/ConferenceLogo.png" alt="CIDSSE 2028" className="h-20 w-auto rounded bg-white p-2" />
          <p className="mt-5 max-w-sm text-sm leading-7">{conference.full}, {conference.datesLabel}. Hosted by Daffodil International University.</p>
        </div>
        {cols.map(([h, links]) => (
          <nav key={h} aria-label={h}>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">{h}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map(([n, href]) => <li key={n}><Link href={href} className="hover:text-white hover:underline">{n}</Link></li>)}
            </ul>
          </nav>
        ))}
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><FaMapMarkerAlt className="mt-1 shrink-0 text-[#f5c542]" aria-hidden /><span>Dept. of Software Engineering, Daffodil International University, Birulia, Savar, Dhaka-1216, Bangladesh</span></li>
            <li className="flex gap-3"><FaEnvelope className="mt-1 shrink-0 text-[#f5c542]" aria-hidden /><a href={`mailto:${conference.email}`} className="hover:text-white hover:underline">{conference.email}</a></li>
            <li className="flex gap-3"><FaPhoneAlt className="mt-1 shrink-0 text-[#f5c542]" aria-hidden /><a href={`tel:${conference.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white hover:underline">{conference.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="container py-5 text-xs">© {new Date().getFullYear()} CIDSSE. Department of Software Engineering, Daffodil International University.</p>
      </div>
    </footer>
  );
}
