import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductVisual } from '../components/ProductVisual';
import type { Product, Translation } from '../types';

type ProductsPageProps = {
  products: Product[];
  onDetail: (product: Product) => void;
  t: Translation;
};

const CATEGORIES = [
  { label: 'All', slug: null },
  { label: 'Tablets', slug: 'tablets' },
  { label: 'Capsules', slug: 'capsules' },
  { label: 'Syrups', slug: 'syrups' },
  { label: 'Dry Syrups', slug: 'dry-syrups' },
  { label: 'Nutraceuticals', slug: 'nutraceuticals' },
];

export const ProductsPage = ({ products, onDetail, t }: ProductsPageProps) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const applyLocation = () => {
      const params = new URLSearchParams(window.location.search);
      const category = params.get('category');
      if (category) return setFilter(category.toLowerCase());

      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (!hash) return setFilter(null);
      if (hash.startsWith('category:')) {
        setFilter(hash.replace('category:', '') || null);
      } else if (hash.startsWith('product:')) {
        setFilter(hash.replace('product:', '') || null);
      } else if (hash.startsWith('search:')) {
        const term = hash.replace('search:', '');
        setSearch(term);
        setFilter(null);
      } else {
        setFilter(hash || null);
      }
    };

    applyLocation();
    window.addEventListener('hashchange', applyLocation);
    window.addEventListener('popstate', applyLocation);
    return () => {
      window.removeEventListener('hashchange', applyLocation);
      window.removeEventListener('popstate', applyLocation);
    };
  }, []);

  const filtered = products.filter((p) => {
    const matchesCategory = !filter || p.categorySlug?.toLowerCase() === filter || p.slug?.toLowerCase() === filter;
    const matchesSearch = !search || 
      p.name.toLowerCase().includes(search) ||
      p.composition.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  // If the search term matches a product name exactly, open detail
  if (search) {
    const exact = products.find((p) => p.name.toLowerCase() === search || (p.slug && p.slug === search));
    if (exact) {
      onDetail(exact);
    }
  }

  const clearFilters = () => {
    setFilter(null);
    setSearch('');
    window.history.pushState({}, '', window.location.pathname);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <main className="max-w-[1480px] mx-auto px-6 py-16 lg:py-24 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-3"
        >
          SUKHAYA Pharmaceutical
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4"
        >
          {t.productsPageTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto"
        >
          Explore our complete pharmaceutical range, built for reliable care.
        </motion.p>
      </div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-lg mx-auto mb-8"
      >
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search by name or composition…"
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-base font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all dark:text-white shadow-sm"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-2 mb-10"
      >
        {CATEGORIES.map((cat) => {
          const isActive = filter === cat.slug;
          return (
            <button
              key={cat.label}
              type="button"
              onClick={() => {
                setFilter(cat.slug);
                setSearch('');
                if (cat.slug) {
                  const url = new URL(window.location.href);
                  url.searchParams.set('category', cat.slug);
                  window.history.pushState({}, '', url.toString());
                } else {
                  window.history.pushState({}, '', window.location.pathname);
                }
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                isActive
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/25 scale-105'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20'
              }`}
            >
              {cat.label}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}>
                {cat.slug ? products.filter(p => p.categorySlug === cat.slug).length : products.length}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* Active filter indicator */}
      <AnimatePresence>
        {(filter || search) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <p className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 rounded-full text-sm font-bold border border-sky-200 dark:border-sky-800">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
              {filter && ` in "${CATEGORIES.find(c => c.slug === filter)?.label}"`}
              {search && ` matching "${search}"`}
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-full hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
            >
              Clear
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Grid */}
      <motion.section
        key={`${filter}-${search}`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7"
      >
        {filtered.map((product) => (
          <motion.article
            variants={itemVariants}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
            key={product.name}
            onClick={() => onDetail(product)}
          >
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl h-48 mb-5 flex items-center justify-center p-4 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at center, ${product.color}18, transparent 70%)` }} />
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="max-h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <ProductVisual compact product={product} />
              )}
            </div>

            <div className="flex-1 flex flex-col">
              {/* Category Badge */}
              <span
                className="self-start mb-2 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                style={{ background: product.accent, color: product.color }}
              >
                {product.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-tight">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-3 line-clamp-1">{product.composition}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-5 flex-1">{product.description}</p>

              <button
                onClick={(e) => { e.stopPropagation(); onDetail(product); }}
                type="button"
                className="mt-auto w-full py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-600 dark:hover:text-sky-400 transition-all text-sm"
              >
                {t.viewDetails}
              </button>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* Empty State */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-24"
        >
          <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-slate-400">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-slate-400 dark:text-slate-500 mb-3">No products found</p>
          <p className="text-slate-400 dark:text-slate-500 mb-8">Try adjusting your search or clearing the category filter.</p>
          <button
            onClick={clearFilters}
            className="px-8 py-3.5 bg-sky-600 text-white rounded-xl font-bold hover:bg-sky-500 transition-colors shadow-lg shadow-sky-600/20"
          >
            Show All Products
          </button>
        </motion.div>
      )}
    </main>
  );
};
