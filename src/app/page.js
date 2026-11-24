import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import NewsCard from '@/components/NewsCard';
import { newsArticles } from '@/data/news';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaBook,
  FaBullhorn,
  FaAward,
  FaLightbulb,
  FaRocket,
  FaGlobe,
  FaHandshake,
  FaBrain,
  FaArrowRight,
  FaUserTie,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <FaCalendarAlt className="text-3xl text-sky-700" />,
      title: 'Important Dates',
      description: 'Submission, review, and registration milestones for a clear conference timeline.',
      link: '/schedule',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-sky-700" />,
      title: 'Venue',
      description: 'A world-class academic setting at Daffodil International University, Dhaka.',
      link: '/contact',
    },
    {
      icon: <FaUsers className="text-3xl text-sky-700" />,
      title: 'Expert Committee',
      description: 'International researchers and professionals shaping the conference agenda.',
      link: '/committees',
    },
    {
      icon: <FaBook className="text-3xl text-sky-700" />,
      title: 'IEEE Proceedings',
      description: 'Selected research papers will be highlighted in IEEE-recognized proceedings.',
      link: '/submission',
    },
  ];

  const stats = [
    { value: '500+', label: 'Expected participants' },
    { value: '100+', label: 'Research papers' },
    { value: '15+', label: 'Countries represented' },
    { value: '10+', label: 'Keynote speakers' },
  ];

  const tracks = [
    {
      title: 'Track 1: Computational Intelligence and Intelligent Systems',
      description:
        'Computational Intelligence, Neural Networks, Fuzzy Systems, UAV Intelligence, Intelligent Agents, Intelligent Systems, Reasoning Systems, Optimization, Multi-Agent Systems.',
    },
    {
      title: 'Track 2: Machine Learning, Deep Learning and Data Science',
      description:
        'Machine Learning, Deep Learning, Reinforcement Learning, Self-Supervised Learning, Federated Learning, Explainable AI, Big Data Analytics, High-Dimensional Data Analysis, Applications in Time-series Forecasting, Reliability Modeling, and Predictive Maintenance for engineered systems.',
    },
    {
      title: 'Track 3: Intelligent Business Data Analytics and Decision Support',
      description:
        'Data Analytics, Business Intelligence, Pattern Recognition, Time-Series Analysis, Anomaly Detection, Recommender Systems, Uncertainty Modeling, Risk Analytics.',
    },
    {
      title: 'Track 4: Intelligent Applications in Health, Bioinformatics and Smart Systems',
      description:
        'Healthcare AI, Bioinformatics, Computational Biology, Smart Healthcare, Internet of Medical Things, Intelligent Transportation, Cyber-Physical Systems, IoT.',
    },
    {
      title: 'Track 5: Emerging Technologies and Responsible Intelligent Computing',
      description:
        'Generative AI, Large Language Models, Quantum Machine Learning, Edge Intelligence, Robotics, Human-Centered AI, Trustworthy AI, Privacy-Preserving Machine Learning, Sustainable AI.',
    },
  ];

  const dates = [
    { label: 'Paper Submission Deadline', value: '10 August 2027', accent: 'bg-sky-100 text-sky-700' },
    { label: 'Acceptance Notification', value: '2 September 2027', accent: 'bg-amber-100 text-amber-700' },
    { label: 'Early Bird Registration', value: '20 September 2027', accent: 'bg-emerald-100 text-emerald-700' },
    { label: 'Registration Deadline', value: '18 November 2027', accent: 'bg-rose-100 text-rose-700' },
    { label: 'Conference Dates', value: '28-29 January 2028', accent: 'bg-violet-100 text-violet-700' },
  ];

  const reasons = [
    {
      icon: <FaBrain className="text-3xl text-sky-700" />,
      title: 'World-Class Research',
      text: 'Present your work to a global audience of scholars, researchers, and innovation leaders.',
    },
    {
      icon: <FaHandshake className="text-3xl text-sky-700" />,
      title: 'Networking & Collaboration',
      text: 'Connect with peers, industry experts, and students across computational and data-driven disciplines.',
    },
    {
      icon: <FaGlobe className="text-3xl text-sky-700" />,
      title: 'International Visibility',
      text: 'Showcase your research in a globally relevant conference environment rooted in IEEE excellence.',
    },
  ];

  const submissionDeadline = new Date();
  submissionDeadline.setMonth(submissionDeadline.getMonth() + 3);

  return (
    <>
      <Hero />
      <CountdownTimer targetDate={new Date('2028-01-28T00:00:00').toISOString()} title="Conference countdown" />

      <section className="section bg-[#ffffff]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Why attend</span>
            <h2 className="section-heading">A flagship platform for intelligent innovation</h2>
            <p className="section-copy mx-auto">
              CIDSSE 2028 brings together technology leaders, academics, and emerging researchers to discuss how computational intelligence, data science, and software engineering are redefining modern industry and society.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Link key={index} href={feature.link} className="soft-card group transition hover:shadow-none">
                <div className="feature-icon mb-5 transition">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f4f6fa]">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="section-label">About the conference</span>
              <h2 className="section-heading">Advancing research at the intersection of AI, data science, and software engineering</h2>
              <p className="section-copy">
                The IEEE International Conference on Computational Intelligence, Data Science and Software Engineering is designed to foster meaningful exchange among researchers, practitioners, and thought leaders working across intelligent systems, analytics, software systems, and digital transformation.
              </p>
              <p className="section-copy mt-4">
                Organized by the Department of Software Engineering at Daffodil International University, the event is devoted to impactful solutions, emerging technologies, and interdisciplinary collaboration that influence real-world outcomes.
              </p>
              <div className="mt-8">
                <Link href="/submission" className="primary-button">
                  Explore Submission Guidelines
                </Link>
              </div>
            </div>

            <div className="section-shell overflow-hidden p-4 md:p-6">
              <div className="rounded-lg bg-[#0b1f4d] p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-[#c9d3ea]">Theme</div>
                    <div className="mt-2 text-2xl font-semibold">Intelligent Growth</div>
                  </div>
                  <FaBullhorn className="text-3xl text-[#f5c542]" />
                </div>

                <div className="space-y-4">
                  {reasons.map((reason) => (
                    <div key={reason.title} className="rounded-lg border border-white/20 bg-white/5 p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 rounded-md bg-white p-2.5 text-[#0b1f4d]">{reason.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                          <p className="mt-1.5 text-sm leading-6 text-[#dbe4f5]">{reason.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#ffffff]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Conference statistics</span>
            <h2 className="section-heading">A growing global stage for innovation</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-lg bg-[#0b1f4d] p-6 text-center text-white">
                <div className="text-4xl font-semibold text-[#f5c542]">{item.value}</div>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-[#c9d3ea]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f4f6fa]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Key topics</span>
            <h2 className="section-heading">Research areas shaping tomorrow’s digital future</h2>
          </div>

          <div id="tracks" className="mt-12 space-y-5">
            {tracks.map((track, index) => (
              <div key={track.title} className="rounded-lg border border-[#e2e5ec] bg-[#ffffff] p-5 shadow-sm transition hover:shadow-md md:p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf1fb] text-base font-semibold text-[#14306e]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{track.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{track.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f4f6fa]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Event timeline</span>
            <h2 className="section-heading">Key milestones to mark</h2>
            <p className="section-copy mx-auto">
              Plan your participation around the core dates that shape the conference journey, from submission to the final event experience.
            </p>
          </div>

          <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-0">
            <div className="absolute bottom-2 left-[15px] top-2 w-0.5 bg-[#0b1f4d]/20 md:hidden" aria-hidden />
            <div className="absolute left-[10%] right-[10%] top-[calc(50%-1px)] hidden h-0.5 bg-[#0b1f4d]/20 md:block" aria-hidden />
            {dates.map((item, index) => {
              const last = index === dates.length - 1;
              const m = item.value.match(/^([\d–-]+)\s+(\w+)\s+(\d{4})$/);
              const [day, month, year] = m ? [m[1], m[2], m[3]] : [item.value, '', ''];
              return (
                <li key={item.label} className="relative grid pl-12 md:grid-rows-[1fr_auto_1fr] md:pl-0 md:text-center">
                  <div className="md:flex md:flex-col md:justify-end md:pb-6">
                    <p className="text-3xl font-semibold leading-none text-[#0b1f4d]" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>
                      {day} <span className="text-lg font-medium text-slate-600">{month}</span>
                    </p>
                    <p className="mt-1 font-mono text-xs tracking-wider text-slate-600">{year}</p>
                  </div>
                  <span className={`absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white md:static md:mx-auto ${last ? 'border-[#f5b800]' : 'border-[#0b1f4d]'}`} aria-hidden>
                    <span className={`h-3 w-3 rounded-full ${last ? 'bg-[#f5b800]' : 'bg-[#0b1f4d]'}`} />
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-[#0b1f4d] md:px-3 md:pt-6">{item.label}</h3>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section bg-[#ffffff]">
        <div className="container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="section-label">Sponsors &amp; partners</span>
              <h2 className="section-heading">Supported by IEEE CIS and the Department of Software Engineering, DIU</h2>
            </div>
            <Link href="/sponsors" className="secondary-button whitespace-nowrap">
              View all partners <FaArrowRight className="ml-2" aria-hidden />
            </Link>
          </div>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#e2e5ec] bg-[#e2e5ec] sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'IEEE CIS', short: 'CIS' },
              { name: 'AI Task Force', logo: '/images/partners/ai-task-force.png' },
              { name: 'Dept of SWE, DIU', logo: '/images/partners/swe-dept.png' },
              { name: 'Data Science Lab, Dept of SWE, DIU', logo: '/images/partners/data-science-lab.png' },
              { name: 'Software Engineering Club, Dept of SWE, DIU', logo: '/images/partners/se-club.png' },
              { name: 'SQAT, Dept of SWE, DIU', logo: '/images/partners/sqat.png' },
            ].map(({ name, logo, short }) => (
              <li key={name} className="flex items-center gap-4 bg-white p-5">
                <div className="flex h-20 w-36 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#e2e5ec] bg-white p-2">
                  {logo ? (
                    <img src={logo} alt="" className="max-h-full max-w-full object-contain" />
                  ) : (
                    <span className="font-mono text-lg font-semibold text-[#1a5aa6]">{short}</span>
                  )}
                </div>
                <span className="text-sm font-semibold leading-snug text-[#0b1f4d]">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-[#0b1f4d] text-white">
        <div className="container text-center">
          <span className="section-label !text-[#f5c542]">Call for papers</span>
          <h2 className="section-heading mt-4 text-white">Be part of the next wave of computational innovation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Submit your latest research in computational intelligence, data science, software engineering, and AI-driven decision systems to engage with an international academic audience.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/submission" className="gold-button">Submit Paper</Link>
            <Link href="/registration" className="secondary-button border-white bg-white/10 text-white hover:bg-white/20">Register Now</Link>
          </div>
        </div>
      </section>

      <section id="messages" className="section bg-[#eaf1fb]">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="section-label">Conference leadership</span>
              <h2 className="section-heading">Messages that set the direction</h2>
            </div>
            <p className="section-copy mt-0">Hear from the people shaping CIDSSE 2028, its research community, and the conversations we hope to carry forward.</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#cfd6e4] bg-[#cfd6e4] md:grid-cols-3">
            {['Chief Guest', 'Chief Patron & Patrons', 'Conference Chairs'].map((title) => (
              <div key={title} className="flex items-center gap-4 bg-white p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eaf1fb] text-xl text-[#1a5aa6]">
                  <FaUserTie aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-[#0b1f4d]">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">Message to be published</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="section bg-[#ffffff]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <span className="section-label">Co-located events</span>
            <h2 className="section-heading">Workshops, tutorials, and new ideas</h2>
            <p className="section-copy">Meet the community beyond the paper session through focused workshops, tutorials, and partner-led events.</p>
            <Link href="/contact#events" className="primary-button mt-7">Propose an Event</Link>
          </div>
          <div className="rounded-lg bg-[#0b1f4d] p-8 text-[#ffffff]">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c542]">While you are here</span>
            <h3 className="mt-4 text-2xl font-semibold">Discover Savar and Dhaka</h3>
            <p className="mt-4 leading-8 text-[#c9d3ea]">Plan time for local history, riverfront walks, Bengali cuisine, and the cultural energy surrounding Daffodil Smart City.</p>
            <Link href="#local-attraction" className="mt-6 inline-flex font-bold text-[#f5c542]">Explore places to visit <FaArrowRight className="ml-2 self-center" aria-hidden /></Link>
          </div>
        </div>
      </section>

      <section id="local-attraction" className="section bg-[#f4f6fa]">
        <div className="container">
          <div>
            <span className="section-label">Local attraction</span>
            <h2 className="section-heading">History, culture, and campus life</h2>
            <p className="section-copy">Make the most of your visit with a few memorable places around Dhaka and the Daffodil Smart City campus.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Lalbagh Fort',
                detail: 'A Mughal-era fort complex in Old Dhaka.',
                image: '/images/places/lalbagh.jpg',
              },
              {
                name: 'Ahsan Manzil',
                detail: 'The historic Pink Palace beside the Buriganga River.',
                image: '/images/places/ahsan-manzil.jpg',
              },
              {
                name: 'National Parliament',
                detail: 'Louis Kahn\'s landmark of modern architecture.',
                image: '/images/places/parliament.jpg',
              },
              {
                name: 'Daffodil Smart City',
                detail: 'The green, connected campus hosting CIDSSE 2028.',
                image: '/images/places/daffodil.jpg',
              },
            ].map((place) => (
              <article key={place.name} className="overflow-hidden rounded-lg border border-[#e2e5ec] bg-[#ffffff] shadow-sm">
                <img src={place.image} alt={place.name} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#0b1f4d]">{place.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6b7280]">{place.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="announcement" className="section bg-[#eaf1fb]">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="section-label">Conference materials</span>
            <h2 className="section-heading">More information will be announced soon</h2>
            <p className="section-copy">Proceedings, final program details, and additional conference resources will appear here as they are confirmed.</p>
          </div>
          <Link href="/downloads" className="secondary-button whitespace-nowrap">Visit Downloads</Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Latest updates</span>
            <h2 className="section-heading">News and announcements</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsArticles.slice(0, 3).map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/news" className="primary-button">
              View All News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}