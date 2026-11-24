'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const navigation = [
  { name: 'Program', href: '/schedule', dropdown: [
    { name: 'Important dates & schedule', href: '/schedule' },
    { name: 'Tracks', href: '/#tracks' },
    { name: 'Presentation guidelines', href: '/presentation-guidelines' },
  ] },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Authors', href: '/submission', dropdown: [
    { name: 'Call for papers', href: '/submission' },
    { name: 'Camera-ready guidelines', href: '/camera-ready' },
    { name: 'Templates & downloads', href: '/downloads' },
    { name: 'Awards', href: '/awards' },
  ] },
  { name: 'Registration', href: '/registration' },
  { name: 'Committees', href: '/committees' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Venue & travel', href: '/contact#travel' },
  { name: 'News', href: '/news' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const pathname = usePathname();
  const ref = useRef(null);

  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setOpen(false), setSub(null));
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setSub(null);
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, []);

  const active = (href) => pathname === href.split('#')[0] && href !== '/';

  return (
    <header ref={ref} className="sticky top-0 z-50 border-b border-[#e2e5ec] bg-white">
      <nav aria-label="Main" className="container">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label="CIDSSE 2028 home">
            <img src="/images/ConferenceLogo.png" alt="CIDSSE 2028" className="h-12 w-auto md:h-14" />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <li key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button type="button" aria-expanded={sub === item.name} aria-haspopup="true"
                      onClick={() => setSub(sub === item.name ? null : item.name)}
                      className="flex min-h-[44px] items-center gap-1 whitespace-nowrap rounded px-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100">
                      {item.name} <FaChevronDown className={`text-[10px] transition ${sub === item.name ? 'rotate-180' : ''}`} aria-hidden />
                    </button>
                    {sub === item.name && (
                      <ul className="absolute left-0 top-full z-10 mt-1 w-64 border border-[#e2e5ec] bg-white p-1.5 shadow-lg">
                        {item.dropdown.map((s) => (
                          <li key={s.name}><Link href={s.href} className="block rounded px-3 py-2.5 text-sm text-slate-800 hover:bg-slate-100">{s.name}</Link></li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} aria-current={active(item.href) ? 'page' : undefined}
                    className={`flex min-h-[44px] items-center whitespace-nowrap rounded px-2.5 text-sm font-medium hover:bg-slate-100 ${active(item.href) ? 'text-[#1a5aa6] underline decoration-[#f5b800] decoration-2 underline-offset-8' : 'text-slate-800'}`}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/registration" className="secondary-button !px-4">Register</Link>
            <Link href="/submission" className="gold-button !px-4 whitespace-nowrap">Submit paper</Link>
          </div>

          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded border border-slate-300 text-slate-800 hover:bg-slate-100 lg:hidden">
            {open ? <FaTimes size={18} aria-hidden /> : <FaBars size={18} aria-hidden />}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-[#e2e5ec] pb-5 pt-2 lg:hidden">
            <ul>
              {navigation.map((item) => (
                <li key={item.name} className="border-b border-[#eef0f4]">
                  {item.dropdown ? (
                    <>
                      <button type="button" aria-expanded={sub === item.name}
                        onClick={() => setSub(sub === item.name ? null : item.name)}
                        className="flex min-h-[48px] w-full items-center justify-between px-1 text-left text-base font-medium text-slate-900">
                        {item.name} <FaChevronDown className={`text-xs transition ${sub === item.name ? 'rotate-180' : ''}`} aria-hidden />
                      </button>
                      {sub === item.name && (
                        <ul className="pb-2 pl-3">
                          {item.dropdown.map((s) => (
                            <li key={s.name}><Link href={s.href} className="block min-h-[44px] py-2.5 text-[15px] text-slate-700">{s.name}</Link></li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="flex min-h-[48px] items-center px-1 text-base font-medium text-slate-900">{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link href="/registration" className="secondary-button">Register</Link>
              <Link href="/submission" className="gold-button">Submit paper</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
