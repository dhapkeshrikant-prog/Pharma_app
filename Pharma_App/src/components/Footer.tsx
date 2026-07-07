import type { Page, Translation } from '../types';
import { Logo } from './Logo';

const categories = ['Tablets', 'Capsules', 'Syrups', 'Dry Syrups'];

export const Footer = ({ onNavigate, t }: { onNavigate: (page: Page) => void; t: Translation }) => (
  <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 rounded-t-[3rem]">
    <div className="max-w-[1480px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
        <div>
          <div className="mb-6 cursor-pointer" onClick={() => onNavigate('home')}><Logo onClick={() => onNavigate('home')} /></div>
          <p className="text-slate-400 leading-relaxed mb-8">{t.footerText}</p>
        </div>
        
        <div className="lg:ml-auto">
          <h3 className="text-white font-bold text-lg mb-6">{t.quickLinks}</h3>
          <div className="flex flex-col gap-4">
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('home')} type="button">{t.nav.home}</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('about')} type="button">{t.nav.about}</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('products')} type="button">{t.nav.products}</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('contact')} type="button">{t.nav.contact}</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('help')} type="button">Replacement & Query</button>
            <button className="text-left hover:text-sky-400 transition-colors" onClick={() => onNavigate('blog')} type="button">{t.nav.blog}</button>
          </div>
        </div>
        
        <div className="lg:ml-auto">
          <h3 className="text-white font-bold text-lg mb-6">{t.productCategories}</h3>
          <div className="flex flex-col gap-4">
            {categories.map((item) => <span key={item} className="hover:text-sky-400 transition-colors cursor-pointer">{item}</span>)}
          </div>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-slate-800 text-slate-500 text-sm font-semibold">
        © {new Date().getFullYear()} Sukhaya Pharmaceutical Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);
