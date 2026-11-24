export default function SponsorGrid({ sponsors, tier }) {
  const tierStyles = {
    platinum: 'md:col-span-12 lg:col-span-12',
    gold: 'md:col-span-6 lg:col-span-6',
    silver: 'md:col-span-4 lg:col-span-4',
    bronze: 'md:col-span-3 lg:col-span-3',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className={`${tierStyles[tier]} flex min-h-[160px] items-center justify-center rounded-lg border border-slate-200 bg-white p-8 text-center shadow-none transition hover:shadow-none`}
        >
          {sponsor.logo ? (
            <img src={sponsor.logo} alt={sponsor.name} className="max-h-32 max-w-full object-contain" />
          ) : (
            <div>
              <div className="text-2xl font-semibold tracking-tight text-slate-700">{sponsor.name}</div>
              {sponsor.description && <div className="mt-2 text-sm text-slate-600">{sponsor.description}</div>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}