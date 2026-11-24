import { FaCheckCircle, FaCalendarAlt, FaFileUpload, FaFileSignature, FaDownload, FaArrowRight } from 'react-icons/fa';

// NOTE: Placeholder content — replace with final camera-ready details.
export default function CameraReady() {
  const checklist = [
    'Incorporate all reviewer comments into the final manuscript.',
    'Use the official IEEE conference template and stay within the page limit.',
    'Ensure the paper passes IEEE PDF eXpress validation.',
    'Correct all author names, affiliations, and email addresses.',
    'Submit the signed IEEE copyright transfer form.',
    'At least one author must complete registration before the deadline.',
    'Confirm the final paper is free of plagiarism and complies with the IEEE publishing ethics policies.',
    'Disclose any use of generative AI tools in the acknowledgments; AI tools cannot be credited as authors.',
    'Papers presented at the conference will be submitted for inclusion in the IEEE Xplore Digital Library.',
  ];

  const importantDates = [
    { event: 'Camera-Ready Submission Deadline', date: 'TBA' },
    { event: 'Copyright Form Submission Deadline', date: 'TBA' },
    { event: 'Author Registration Deadline', date: 'TBA' },
  ];

  const steps = [
    'Revise your manuscript according to reviewer feedback.',
    'Validate your PDF using IEEE PDF eXpress.',
    'Complete and sign the IEEE copyright form.',
    'Upload the final paper and copyright form via the submission portal.',
  ];

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">For accepted authors</span>
          <h1 className="section-heading">Camera-ready submission</h1>
          <p className="section-copy mx-auto">
            Placeholder page — this content is a draft and will be replaced with the final camera-ready
            submission instructions for CIDSSE 2028.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-8">
          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-[#eaf1fb] text-[#14306e]">
                <FaCheckCircle />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Camera-ready checklist</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-[#e2e5ec] bg-[#f4f6fa] p-4">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1a6fb8]" />
                  <span className="leading-7 text-[#4b5563]">{item}</span>
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
            <div className="grid gap-4 md:grid-cols-3">
              {importantDates.map((item) => (
                <div key={item.event} className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{item.event}</div>
                  <div className="mt-3 text-2xl font-semibold text-slate-900">{item.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
                <FaFileUpload />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Submission steps</h2>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">{index + 1}</div>
                  <p className="leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-[#fff4cc] text-[#1a6fb8]">
                <FaFileSignature />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Copyright form</h2>
            </div>
            <p className="leading-7 text-slate-600">
              Placeholder text — download, complete, and submit the IEEE copyright transfer form alongside your
              final manuscript. Details and the actual form link will be added here.
            </p>
            <a href="#" className="mt-6 flex max-w-md items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-sky-200 hover:bg-sky-50">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">PDF</div>
                <div className="mt-2 text-lg font-bold text-slate-900">Download copyright form</div>
              </div>
              <FaDownload className="text-xl text-sky-700" />
            </a>
          </div>

          <div className="rounded-lg bg-[#0b1f4d] p-8 text-center text-white shadow-none md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Ready to submit your camera-ready paper?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Placeholder call-to-action — link this to the actual camera-ready submission portal once available.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="gold-button">
                Submit Camera-Ready Paper <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
