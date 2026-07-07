import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import type { Translation } from '../types';

export const HelpPage = ({ onContact, t }: { onContact: () => void; t: Translation }) => {
  const sendQuery = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const type = data.get('type')?.toString() || 'Product query';
    const product = data.get('product')?.toString().trim() || 'Not specified';
    const name = data.get('name')?.toString().trim() || 'Not specified';
    const phone = data.get('phone')?.toString().trim() || 'Not specified';
    const message = data.get('message')?.toString().trim() || 'No message provided.';
    const text = `Hello Sukhaya Pharmaceutical,\n\n${type}\nProduct: ${product}\nName: ${name}\nPhone: ${phone}\n\nQuery:\n${message}`;
    window.location.href = `https://wa.me/918603159426?text=${encodeURIComponent(text)}`;
  };

  return (
    <main className="max-w-[1480px] mx-auto px-6 py-16 lg:py-24 min-h-[70vh]">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-3">Support Desk</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Help & Support</h1>
      </motion.div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.form
          onSubmit={sendQuery}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl"
        >
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Replacement or Product Query</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 block">Request Type</span>
              <select name="type" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-sky-500/30">
                <option>Product query</option>
                <option>Replacement request</option>
                <option>Availability request</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 block">Product Name</span>
              <input name="product" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-sky-500/30" />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 block">Name</span>
              <input required name="name" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-sky-500/30" />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 block">Phone</span>
              <input required name="phone" type="tel" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-sky-500/30" />
            </label>
            <label className="block md:col-span-2">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 block">Message</span>
              <textarea required name="message" rows={5} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-sky-500/30 resize-none" />
            </label>
          </div>
          <button type="submit" className="mt-7 inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold shadow-lg shadow-sky-600/20">
            Send Query <Icon name="arrow" />
          </button>
        </motion.form>

        <motion.aside initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="bg-gradient-to-br from-sky-50 to-white dark:from-sky-900/20 dark:to-slate-900 border border-sky-100 dark:border-sky-900/50 rounded-3xl p-8 lg:p-10 shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-4">How can we support you?</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-7">
            Ask about product composition, availability, replacement, documentation, or business support. Our team will respond with the right product information.
          </p>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 rounded-xl font-bold" onClick={onContact} type="button">
            {t.contactUs} <Icon name="arrow" />
          </button>
        </motion.aside>
      </section>
    </main>
  );
};
