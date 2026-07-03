import { useEffect, useRef, useState } from 'react';
import { products } from '../data/products';
import type { Page, Translation } from '../types';

type MegaMenuProps = {
  onNavigate: (page: Page) => void;
  t: Translation;
};

const categories = [
  { label: 'Antibiotics', slug: 'antibiotics', desc: 'Broad spectrum antibacterial formulations.' },
  { label: 'Pain Killer (NSAID)', slug: 'pain-killer', desc: 'Fast-acting analgesics for pain relief.' },
  { label: 'Calcium Preparation', slug: 'calcium-preparation', desc: 'Bone and mineral support supplements.' },
  { label: 'Protein Powder', slug: 'protein-powder', desc: 'Nutritional powders for recovery and strength.' },
  { label: 'PPI', slug: 'ppi', desc: 'Proton pump inhibitors for gastric relief.' },
  { label: 'Cough Syrup', slug: 'cough-syrup', desc: 'Expectorants and cough relief formulations.' },
  { label: 'Anticold Tablet/Syrup', slug: 'anticold', desc: 'Symptomatic relief for cold and flu.' },
  { label: 'Antifungal Cream', slug: 'antifungal-cream', desc: 'Topical antifungal treatments.' },
];

export const MegaMenu = ({ onNavigate, t }: MegaMenuProps) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(categories[0].slug);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (ev: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(ev.target as Node)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

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
    const found = products.find((p) => p.categorySlug === slug) || products.find(() => true);
    return found;
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
        className="px-4 py-2 rounded-lg font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600"
      >
        {t.nav.products}
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl z-50 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-top-4" onMouseLeave={() => setOpen(false)}>
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-5 border-r border-slate-200 dark:border-slate-800 p-3 bg-slate-50/50 dark:bg-slate-800/20">
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
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex flex-col gap-1 ${active === c.slug ? 'bg-sky-50 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'}`}
                    >
                      <div className="text-[15px] font-bold">{c.label}</div>
                      <div className="text-xs opacity-80">{c.desc}</div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-7 p-8 flex flex-col justify-center">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 h-[220px] w-full flex items-center justify-center p-6 mb-6 shadow-inner relative group">
                <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={getPreview(active).image} alt={getPreview(active).imageAlt} className="max-h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{categories.find((x) => x.slug === active)?.label}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{categories.find((x) => x.slug === active)?.desc}</p>
                <button type="button" onClick={() => goToCategory(active)} className="px-6 py-3 w-full bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-sky-600/20 hover:shadow-sky-500/30 transform hover:-translate-y-0.5">Explore Products</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
