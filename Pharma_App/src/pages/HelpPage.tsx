import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import type { Translation } from '../types';

export const HelpPage = ({ onContact, t }: { onContact: () => void; t: Translation }) => (
  <main className="max-w-[1480px] mx-auto px-6 py-16 lg:py-24 min-h-[70vh] flex flex-col items-center">
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 text-center text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight"
    >
      Help & Support
    </motion.h1>
    
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">How can we support you?</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-2xl">
          Reach out for product availability, business partnerships, documentation, or general support. Our team will respond with the right product and company information.
        </p>
      </div>
      
      <button 
        className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-sky-600/20 transition-all transform hover:-translate-y-1" 
        onClick={onContact} 
        type="button"
      >
        {t.contactUs} <Icon name="arrow" />
      </button>
    </motion.section>
  </main>
);
