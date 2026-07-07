import { useEffect, useRef, useState } from 'react';
import { products } from '../data/products';
import type { Page, Translation } from '../types';

type MegaMenuProps = {
  onNavigate: (page: Page) => void;
  t: Translation;
  isActive: boolean;
};

const categories = [
  { label: 'Pain Relief', slug: 'pain-relief', desc: 'Fast-acting analgesics and anti-inflammatories.' },
  { label: 'Antibiotics', slug: 'antibiotics', desc: 'Broad-spectrum antibacterial formulations.' },
  { label: 'Orthopedic', slug: 'orthopedic', desc: 'Calcium, vitamin, and mineral joint support.' },
  { label: 'Respiratory', slug: 'respiratory', desc: 'Expectorants and cough relief formulas.' },
  { label: 'Gastro', slug: 'gastro', desc: 'PPIs and suspensions for digestive relief.' },
  { label: 'Nutraceuticals', slug: 'nutraceuticals', desc: 'Multivitamins, proteins, and nerve support.' },
  { label: 'Cold & Cough', slug: 'cold-cough', desc: 'Symptomatic relief for sinus and flu.' },
];

export const MegaMenu = ({ onNavigate, t, isActive }: MegaMenuProps) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(categories[0].slug);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const idx = categories.findIndex((c) => c.slug === active);
        const next = e.key === 'ArrowDown' ? (idx + 1) % categories.length : (idx - 1 + categories.length) % categories.length;
        setActive(categories[next].slug);
      }
      if (e.key === 'Enter') {
        goToCategory(active);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, active]);

  useEffect(() => {
    if (!open) return;
    const activeBtn = rootRef.current?.querySelector<HTMLButtonElement>(`button[data-slug="${active}"]`);
    activeBtn?.focus();
  }, [open, active]);

  const goToCategory = (slug: string) => {
    setOpen(false);
    onNavigate('products');
    const url = new URL(window.location.href);
    url.searchParams.set('category', slug);
    window.history.pushState({}, '', url.toString());
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const getPreview = (slug: string) => {
    const found = products.find((p) => p.categorySlug === slug) || products[0];
    return found;
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => {
          setOpen(false);
          onNavigate('products');
          // Clear query params to show all products
          const url = new URL(window.location.href);
          url.searchParams.delete('category');
          window.history.pushState({}, '', url.pathname);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
        className={`px-4 py-2 rounded-lg font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1.5 ${
          isActive
            ? 'text-sky-600 dark:text-sky-400 bg-sky-50/50 dark:bg-sky-950/30'
            : 'text-slate-700 dark:text-slate-200'
        }`}
      >
        <span>{t.nav.products}</span>
        <svg
          className={`w-3.5 h-3.5 opacity-70 transition-transform duration-300 ${open ? 'rotate-180 text-sky-600' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white/75 dark:bg-slate-950/80 backdrop-blur-2xl rounded-2xl shadow-2xl z-50 border border-slate-200/60 dark:border-slate-800/65 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-5 border-r border-slate-200/50 dark:border-slate-800/50 p-3 bg-slate-50/40 dark:bg-slate-900/30">
              <ul className="flex flex-col gap-1">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <button
                      data-slug={c.slug}
                      role="menuitem"
                      type="button"
                      onMouseEnter={() => setActive(c.slug)}
                      onFocus={() => setActive(c.slug)}
                      onClick={() => goToCategory(c.slug)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex flex-col gap-1 ${
                        active === c.slug 
                          ? 'bg-sky-500/10 dark:bg-sky-500/15 text-sky-700 dark:text-sky-400 shadow-sm border border-sky-500/10 dark:border-sky-500/20' 
                          : 'border border-transparent text-slate-650 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      <div className="text-[15px] font-bold">{c.label}</div>
                      <div className="text-xs opacity-75">{c.desc}</div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-7 p-8 flex flex-col justify-center bg-white/30 dark:bg-slate-950/30">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100/70 to-slate-200/70 dark:from-slate-950/60 dark:to-slate-900/60 h-[220px] w-full flex items-center justify-center p-6 mb-6 shadow-inner relative group border border-slate-200/30 dark:border-slate-800/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-emerald-500/5 opacity-100 transition-opacity duration-300"></div>
                <img
                  src={getPreview(active).image}
                  alt={getPreview(active).imageAlt}
                  className="max-h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-sky-500 rounded-full"></span>
                  {categories.find((x) => x.slug === active)?.label}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                  {categories.find((x) => x.slug === active)?.desc}
                </p>
                <button
                  type="button"
                  onClick={() => goToCategory(active)}
                  className="px-6 py-3 w-full bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-sky-600/10 hover:shadow-sky-600/20 transform hover:-translate-y-0.5"
                >
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
