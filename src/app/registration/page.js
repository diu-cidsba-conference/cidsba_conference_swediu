import { FaUser, FaUsers, FaGraduationCap, FaGlobe, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function Registration() {
  const categories = [
    {
      icon: <FaGraduationCap className="text-4xl text-sky-700" />,
      title: 'Student (IEEE Member)',
      price: 'TBA',
      features: ['Conference access', 'Conference kit', 'Lunch & refreshments', 'Certificate'],
    },
    {
      icon: <FaUser className="text-4xl text-sky-700" />,
      title: 'Regular (IEEE Member)',
      price: 'TBA',
      features: ['Conference access', 'Conference kit', 'Lunch & refreshments', 'Certificate', 'Proceedings'],
    },
    {
      icon: <FaUsers className="text-4xl text-sky-700" />,
      title: 'Regular (Non-IEEE Member)',
      price: 'TBA',
      features: ['Conference access', 'Conference kit', 'Lunch & refreshments', 'Certificate', 'Proceedings'],
    },
    {
      icon: <FaGlobe className="text-4xl text-sky-700" />,
      title: 'International Participant',
      price: 'TBA',
      features: ['Conference access', 'Conference kit', 'Lunch & refreshments', 'Certificate', 'Proceedings'],
    },
  ];

  const steps = [
    'Select the registration category that matches your participation.',
    'Complete the online registration form with your academic and contact details.',
    'Submit the payment using the official registration channel.',
    'Upload your proof of payment and receive confirmation by email.',
  ];

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Registration</span>
          <h1 className="section-heading">Reserve your place at CIDSSE 2028</h1>
          <p className="section-copy mx-auto">
            Choose the registration option that suits your role and join a distinguished community of researchers, professionals, and students.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-lg border border-[#e2e5ec] bg-[#ffffff] shadow-none">
          <div className="bg-[#14306e] px-6 py-5 text-center text-xl font-semibold uppercase tracking-[0.12em] text-[#ffffff] md:text-2xl">
            Registration fees
          </div>
          <div className="overflow-x-auto p-4 sm:p-6">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#1a6fb8] text-xs uppercase tracking-[0.12em] text-[#1a5aa6]">
                  <th className="px-3 py-4 font-bold">Registration type</th>
                  <th className="px-3 py-4 font-bold">Non-IEEE members</th>
                  <th className="px-3 py-4 font-bold">IEEE members</th>
                </tr>
              </thead>
              <tbody className="text-[#4b5563]">
                {[
                  ['International Authors', 'USD 250', 'USD 200'],
                  ['International Student Authors', 'USD 200', 'USD 180'],
                  ['International Participants', 'USD 250', 'USD 200'],
                  ['Local Authors', 'BDT 11,000', 'BDT 10,000'],
                  ['Local Student Authors', 'BDT 9,000', 'BDT 7,500'],
                  ['Local Participants', 'BDT 7,000', 'BDT 7,000'],
                ].map(([type, nonMember, member]) => (
                  <tr key={type} className="border-b border-[#e2e5ec] last:border-0">
                    <th className="px-3 py-4 font-bold text-[#14306e]">{type}</th>
                    <td className="px-3 py-4">{nonMember}</td>
                    <td className="px-3 py-4">{member}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-none">
              <div className="bg-[#0b1f4d] p-6 text-center text-white">
                <div className="mb-4 flex justify-center">{category.icon}</div>
                <h3 className="text-lg font-bold">{category.title}</h3>
                <div className="mt-3 text-3xl font-semibold text-amber-300">{category.price}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-700">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-lg border border-slate-200 bg-white p-8 shadow-none md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-label">How to register</span>
              <h2 className="section-heading mt-4">Simple, secure, and fast</h2>
              <p className="section-copy mt-4">
                Complete your registration in a few steps and receive confirmation for your attendance at the conference.
              </p>
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
        </div>

        <div className="mt-12 rounded-lg bg-[#0b1f4d] p-8 text-center text-white shadow-none md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Register now to secure your seat</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
            Be part of a highly engaging conference experience featuring keynote lectures, research discussion, and international collaboration.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="gold-button">
              Complete Registration <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}