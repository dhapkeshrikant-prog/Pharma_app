import type { Translation } from '../types';
import { Icon } from './Icon';

export const CtaBanner = ({ onContact, t }: { onContact: () => void; t: Translation }) => (
  <section className="max-w-[1480px] mx-auto px-6 mb-24">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl bg-gradient-to-br from-sky-500 to-sky-700 dark:from-sky-700 dark:to-sky-900 text-white p-10 lg:p-14 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10">
        <p className="text-sky-100 font-bold tracking-widest uppercase text-sm mb-3">{t.ctaEyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-black leading-tight max-w-2xl">{t.ctaTitle}</h2>
      </div>
      
      <button 
        className="relative z-10 shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-2xl font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:bg-sky-50 transform hover:-translate-y-1" 
        onClick={onContact} 
        type="button"
      >
        {t.contactUs} <Icon name="arrow" />
      </button>
    </div>
  </section>
);
