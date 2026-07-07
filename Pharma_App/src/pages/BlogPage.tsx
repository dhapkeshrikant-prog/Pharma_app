import { motion } from 'framer-motion';
import { products } from '../data/products';
import type { Product } from '../types';

const researchTopics = [
  {
    title: 'Responsible Antibiotic Use',
    category: 'Research Update',
    text: 'Why antibiotic combinations must be used only on prescription, with the full course and correct diagnosis.',
  },
  {
    title: 'Gastro Care Formulations',
    category: 'Product Use',
    text: 'A practical look at acid-control and gastric-support products for clinician-guided therapy.',
  },
  {
    title: 'Nutraceutical Support',
    category: 'Evidence Watch',
    text: 'How vitamins, minerals, and nerve-support nutrients are commonly evaluated in supportive care plans.',
  },
];

export const BlogPage = ({ onDetail }: { onDetail: (product: Product) => void }) => {
  const featured = products.slice(0, 6);

  return (
    <main className="max-w-[1480px] mx-auto px-6 py-16 lg:py-24 min-h-screen">
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-12 max-w-3xl">
        <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-3">SUKHAYA Blog</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Product Uses & Research Updates
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Clear product education, responsible-use notes, and research-aware updates for healthcare partners. Content is informational and should not replace medical advice.
        </p>
      </motion.div>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
        {researchTopics.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all"
          >
            <span className="inline-flex px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-black uppercase tracking-wide mb-5">
              {item.category}
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{item.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</p>
          </motion.article>
        ))}
      </section>

      <section>
        <div className="flex items-end justify-between gap-5 mb-6">
          <div>
            <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-2">Product Notes</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Explore by product</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <article key={product.slug} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
              <div className="h-44 rounded-xl bg-slate-50 dark:bg-slate-800 p-4 grid place-items-center mb-4">
                <img src={product.image} alt={product.imageAlt ?? product.name} className="max-h-full object-contain" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">{product.name}</h3>
              <p className="text-sm font-bold text-sky-600 dark:text-sky-400 mt-1">{product.category}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-2">{product.composition || product.description}</p>
              <button onClick={() => onDetail(product)} type="button" className="mt-5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold">
                Read Product Details
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
