import { motion } from 'framer-motion';
import type { Translation } from '../types';

export const PageHero = ({ text, title, t }: { text: string; title: string; t: Translation }) => (
  <section className="max-w-[1480px] mx-auto px-6 py-12 lg:py-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-3">
        {t.pageHeroEyebrow}
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
        {text}
      </p>
    </motion.div>
  </section>
);
