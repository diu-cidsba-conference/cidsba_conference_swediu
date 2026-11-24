import Link from 'next/link';
import { milestones } from '@/data/site';
import { FaFileAlt, FaCheckCircle, FaCalendarAlt, FaDownload, FaArrowRight } from 'react-icons/fa';

export default function Submission() {
  const guidelines = [
    'Papers must be original, technically sound, and not previously published or under review elsewhere.',
    'Maximum manuscript length is 6 pages in the IEEE conference format.',
    'Submissions must be written in English and follow the official IEEE style guidelines.',
    'Authors should use the conference template and include complete author/speaker affiliations.',
    'All papers must be submitted via the official conference management platform.',
    'Each manuscript will undergo a double-blind peer review process.',
    'Accepted and presented papers will be submitted for inclusion in the IEEE Xplore Digital Library.',
    'Plagiarism is not tolerated. Following IEEE, plagiarism is the use of the work of others without explicitly acknowledging the original author or source, and it is a serious breach of professional conduct. All submissions must comply with the IEEE publishing ethics policies.',
    'AI-generated content (text, figures, images or code) must be disclosed in the acknowledgments section. Identify the AI system used, the sections that contain AI-generated content, and the level at which it was used. Use of AI only to edit or polish your own text is generally outside this policy; disclosure is then not required but recommended.',
  ];

  const importantDates = milestones.map((m) => ({ event: m.label, date: m.display }));

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Call for papers</span>
          <h1 className="section-heading">Submit your research to CIDSSE 2028</h1>
          <p className="section-copy mx-auto">
            Share your original work in computational intelligence, data science, and software engineering with a global network of scholars and practitioners.
          </p>
        </div>

        <aside aria-labelledby="ethics-h" className="mx-auto mt-10 max-w-6xl border-l-4 border-[#f5b800] bg-[#fff8dc] p-6">
          <h2 id="ethics-h" className="font-sans text-lg font-semibold">IEEE publication &amp; ethics policy</h2>
          <p className="mt-2 leading-7 text-slate-800">
            Accepted and presented papers will be submitted for inclusion in the IEEE Xplore Digital Library. All papers must follow IEEE policies on
            plagiarism and on the use of AI-generated content.{' '}
            <a href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/" target="_blank" rel="noreferrer"
              className="font-semibold text-[#1a5aa6] underline underline-offset-4">Read the IEEE submission policies</a>.
          </p>
        </aside>

        <div className="mx-auto mt-10 max-w-6xl space-y-8">
          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
                <FaFileAlt />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Submission guidelines</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <FaCheckCircle className="mt-1 shrink-0 text-green-600" />
                  <span className="leading-7 text-slate-700">{guideline}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-amber-100 text-amber-700">
                <FaCalendarAlt />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Important dates</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {importantDates.map((item) => (
                <div key={item.event} className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{item.event}</div>
                  <div className="mt-3 text-2xl font-semibold text-slate-900">{item.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div id="camera-ready" className="soft-card flex flex-col p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="feature-icon h-12 w-12 bg-[#eaf1fb] text-[#14306e]">
                  <FaCheckCircle />
                </div>
                <h2 className="text-2xl font-semibold text-[#0b1f4d]">Camera-ready submission</h2>
              </div>
              <p className="flex-1 leading-7 text-[#4b5563]">
                Full requirements and steps for preparing and submitting your camera-ready manuscript and copyright form.
              </p>
              <Link href="/camera-ready" className="secondary-button mt-6 self-start">
                View camera-ready guidelines <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div id="presentation" className="soft-card flex flex-col p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="feature-icon h-12 w-12 bg-[#fff4cc] text-[#1a6fb8]">
                  <FaFileAlt />
                </div>
                <h2 className="text-2xl font-semibold text-[#0b1f4d]">Presentation guidelines</h2>
              </div>
              <p className="flex-1 leading-7 text-[#4b5563]">
                Guidance for oral, virtual, and poster presentations, including timing, format, and templates.
              </p>
              <Link href="/presentation-guidelines" className="secondary-button mt-6 self-start">
                View presentation guidelines <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-[#0b1f4d] p-8 text-center text-white shadow-none md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Ready to submit your work?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Join global researchers and innovators by submitting a high-quality paper that advances the frontiers of computational intelligence, data science, and software engineering.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noreferrer" className="gold-button">IEEE paper templates</a>
              <a href="mailto:cidsba@diu.edu.bd?subject=Paper%20submission" className="ghost-light-button">Ask about submission</a>
            </div>
          </div>

          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Paper templates</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Please use the official IEEE manuscript template to ensure full compatibility with review and publication requirements.
            </p>
            <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noreferrer" className="secondary-button mt-6">IEEE templates (LaTeX &amp; Word)</a>
          </div>
        </div>
      </div>
    </div>
  );
}