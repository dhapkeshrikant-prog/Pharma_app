import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../types';

type BlogArticle = {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  text: string;
  fullContent: string;
};

const blogArticles: BlogArticle[] = [
  {
    id: 'nsaids-safety',
    title: 'Safe Use of NSAIDs in Pain Management',
    category: 'Pain Relief',
    readTime: '4 min read',
    date: 'July 6, 2026',
    author: 'Dr. S. Sharma, Medical Advisor',
    text: 'Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) are powerful tools for pain and inflammation relief. Learn about dosage control, gastrointestinal protection, and doctor-guided safety.',
    fullContent: 'Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) such as Ibuprofen, Diclofenac, and Aceclofenac are among the most widely used medications for pain relief, fever, and inflammation. While highly effective, they carry risks if used inappropriately. Long-term usage without medical supervision can lead to gastrointestinal complications, including acid reflux, gastric ulcers, or renal strain. Clinicians often recommend taking NSAIDs with food or alongside Proton Pump Inhibitors (PPIs) to protect the stomach lining. Always adhere strictly to the prescribed dosage, avoid combining multiple NSAIDs, and consult your physician if your pain persists beyond a few days.'
  },
  {
    id: 'vitamin-d3-bones',
    title: 'Vitamin D3 and Bone Density: Beyond Calcium',
    category: 'Nutraceuticals',
    readTime: '5 min read',
    date: 'July 4, 2026',
    author: 'Dr. A. Joshi, Nutrition Specialist',
    text: 'Calcium is vital for bone strength, but it cannot work effectively without Vitamin D3. Explore how D3 facilitates absorption and supports skeletal health.',
    fullContent: 'For decades, calcium has been the highlight of bone health, but calcium alone is insufficient. Vitamin D3 (Cholecalciferol) acts as the key that unlocks calcium absorption in the gut. Without adequate D3, the body cannot absorb calcium from diet or supplements, leading to bone resorption where calcium is pulled out of the bones, weakening them. Beyond skeletal support, Vitamin D3 plays a critical role in strengthening the immune system and maintaining cardiovascular health. Daily exposure to sunlight, combined with doctor-guided supplementation of Vitamin D3, is essential for maintaining strong bones and active vitality.'
  },
  {
    id: 'probiotics-antibiotics',
    title: 'Probiotics & Antibiotic Therapy: Gut Flora Balance',
    category: 'Antibiotics',
    readTime: '6 min read',
    date: 'June 29, 2026',
    author: 'Dr. R. Patil, Gastroenterologist',
    text: 'Antibiotics fight infections but can disrupt gut bacteria. Discover how probiotics restore gut flora balance and prevent common side effects.',
    fullContent: 'Antibiotics are life-saving medications designed to eliminate harmful bacterial infections. However, they do not distinguish between good and bad bacteria. As a result, a course of antibiotics can disrupt the delicate balance of the gut microbiome, leading to temporary digestive issues like diarrhea, bloating, or abdominal discomfort. Introducing probiotic supplements containing beneficial strains like Lactobacillus or Bifidobacterium during or immediately after antibiotic therapy can help replenish gut flora. For maximum effectiveness, it is recommended to take probiotics at least 2 hours apart from your antibiotic dose to ensure the active antibiotic does not destroy the probiotic bacteria.'
  },
  {
    id: 'acid-reflux-gerd',
    title: 'Effective Management of Acid Reflux and GERD',
    category: 'Gastro Care',
    readTime: '4 min read',
    date: 'June 25, 2026',
    author: 'Dr. M. Deshmukh, Gastro Specialist',
    text: 'Acid reflux and GERD affect millions. Explore the role of PPIs, liquid suspensions, and lifestyle adjustments in achieving digestive comfort.',
    fullContent: 'Gastroesophageal Reflux Disease (GERD) and occasional acid reflux occur when stomach acid flows back into the esophagus, causing a painful burning sensation (heartburn). Modern management includes Proton Pump Inhibitors (PPIs) like Pantoprazole, which reduce acid secretion at the source, and oral suspensions containing antacids or alginates that form a protective barrier over stomach contents. In addition to pharmacology, lifestyle modifications are vital: eating smaller meals, avoiding lying down immediately after eating, reducing spicy or fatty foods, and sleeping with the head elevated can significantly relieve chronic reflux symptoms.'
  }
];

export const BlogPage = ({ onDetail }: { onDetail?: (product: Product) => void }) => {
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Pain Relief', 'Antibiotics', 'Gastro Care', 'Nutraceuticals'];

  const filteredArticles = activeCategory === 'All'
    ? blogArticles
    : blogArticles.filter(art => art.category === activeCategory);

  return (
    <main className="max-w-[1480px] mx-auto px-6 py-16 lg:py-24 min-h-screen">
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-12 max-w-3xl">
        <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-3">SUKHAYA Research & Education</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Medicine Uses & Daily Health
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore informative, research-backed blogs on common medicines, daily health, and optimal therapeutic care. All content is peer-reviewed for educational purposes.
        </p>
      </motion.div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10 border-b border-slate-200 dark:border-slate-800 pb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20'
                : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {filteredArticles.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="inline-flex px-3.5 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 text-xs font-extrabold uppercase tracking-wide">
                  {item.category}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {item.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
                {item.text}
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800/80 pt-5 mt-auto">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.author}</span>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">{item.date}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBlog(item)}
                className="flex items-center gap-1.5 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors group/btn"
              >
                Read Article
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <span className="inline-flex px-3.5 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 text-xs font-extrabold uppercase tracking-wide">
                  {selectedBlog.category}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold">{selectedBlog.readTime}</span>
              </div>

              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight mb-4">
                {selectedBlog.title}
              </h3>

              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-5 mb-6">
                <div className="w-9 h-9 rounded-full bg-sky-100 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 dark:text-sky-400 font-black text-sm">
                  {selectedBlog.author.charAt(4)}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{selectedBlog.author}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">{selectedBlog.date}</div>
                </div>
              </div>

              <p className="text-slate-650 dark:text-slate-300 leading-relaxed text-[16px]">
                {selectedBlog.fullContent}
              </p>

              <div className="mt-8 border-t border-slate-100 dark:border-slate-800/80 pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedBlog(null)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};
