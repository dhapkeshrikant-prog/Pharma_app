import type { Page, Translation } from '../types';
import { Logo } from './Logo';

const categories = [
  { label: 'Pain Relief', slug: 'pain-relief' },
  { label: 'Antibiotics', slug: 'antibiotics' },
  { label: 'Orthopedic', slug: 'orthopedic' },
  { label: 'Respiratory', slug: 'respiratory' },
  { label: 'Gastro', slug: 'gastro' },
  { label: 'Nutraceuticals', slug: 'nutraceuticals' },
];

export const Footer = ({ onNavigate, t }: { onNavigate: (page: Page) => void; t: Translation }) => (
  <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-10 pb-6 border-t border-slate-800 rounded-t-[2rem]">
    <div className="max-w-[1480px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mb-8">
        <div>
          <div className="mb-4 cursor-pointer" onClick={() => onNavigate('home')}>
            <Logo onClick={() => onNavigate('home')} />
          </div>
          <p className="text-slate-400 leading-relaxed text-sm mb-4">{t.footerText}</p>
        </div>
        
        <div className="lg:ml-auto">
          <h3 className="text-white font-bold text-lg mb-4">{t.quickLinks}</h3>
          <div className="flex flex-col gap-2.5 text-sm">
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('home')} type="button">{t.nav.home}</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('about')} type="button">{t.nav.about}</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('products')} type="button">{t.nav.products}</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('contact')} type="button">{t.nav.contact}</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('help')} type="button">Replacement & Query</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('blog')} type="button">{t.nav.blog}</button>
          </div>
        </div>
        
        <div className="lg:ml-auto">
          <h3 className="text-white font-bold text-lg mb-4">{t.productCategories}</h3>
          <div className="flex flex-col gap-2.5 text-sm">
            {categories.map((item) => (
              <button
                key={item.slug}
                onClick={() => {
                  onNavigate('products');
                  const url = new URL(window.location.href);
                  url.searchParams.set('category', item.slug);
                  window.history.pushState({}, '', url.toString());
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="text-left hover:text-sky-400 transition-colors cursor-pointer text-slate-400"
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center pt-6 border-t border-slate-850 text-slate-500 text-xs font-semibold">
        © {new Date().getFullYear()} Sukhaya Pharmaceutical Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);
