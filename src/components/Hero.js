import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity, FaArrowRight } from 'react-icons/fa';

const facts = [
  { Icon: FaCalendarAlt, label: 'Dates', value: '28–29 January 2028' },
  { Icon: FaMapMarkerAlt, label: 'Venue', value: 'Daffodil Smart City, Dhaka' },
  { Icon: FaUniversity, label: 'Host', value: 'Daffodil International University' },
];

export default function Hero() {
  return (
    <section className="border-b border-[#e2e5ec] bg-white">
      <div className="container py-14 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="section-label">IEEE conference · Dhaka, Bangladesh</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#0b1f4d] md:text-5xl">
              International Conference on Computational Intelligence, Data Science and Software Engineering
            </h1>
            <p className="mt-3 font-mono text-lg text-[#1a5aa6]">CIDSSE</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              A forum for researchers, industry practitioners, and academicians to present work in AI,
              data science, software engineering, and emerging computational technologies.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/submission" className="primary-button">
                Submit a paper <FaArrowRight className="ml-2" aria-hidden />
              </Link>
              <Link href="/registration" className="secondary-button">Register</Link>
            </div>
          </div>
          <img src="/images/ConferenceLogo.png" alt="CIDSSE conference logo" className="mx-auto w-full max-w-[460px] object-contain mix-blend-multiply" />
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#e2e5ec] bg-[#e2e5ec] md:grid-cols-3">
          {facts.map(({ Icon, label, value }) => (
            <div key={label} className="bg-white p-5">
              <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-600">
                <Icon aria-hidden /> {label}
              </dt>
              <dd className="mt-2 font-semibold text-[#0b1f4d]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
