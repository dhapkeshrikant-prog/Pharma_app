import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { ProductVisual } from '../components/ProductVisual';
import type { Product, Translation } from '../types';

export const ProductDetailPage = ({ product, t }: { product: Product; t: Translation }) => {
  const language = (() => {
    const isHi = t.languageLabel === 'भाषा' && t.nav.about === 'हमारे बारे में';
    const isMr = t.languageLabel === 'भाषा' && t.nav.about === 'आमच्याबद्दल';
    return isHi ? 'hi' : isMr ? 'mr' : 'en';
  })();

  const translation = product.translations?.[language];
  const localizedCategory = translation?.category ?? product.category;
  const localizedComposition = translation?.composition ?? product.composition;
  const localizedDescription = translation?.description ?? product.description;
  const localizedIndications = translation?.indications ?? product.indications;
  const localizedBenefits = translation?.benefits ?? product.benefits;
  const localizedDosage = translation?.dosage ?? product.dosage;
  const localizedStorage = translation?.storage ?? product.storage;
  const localizedPackaging = translation?.packaging ?? product.packaging;

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: localizedDescription,
    image: product.image ? window.location.origin + product.image : undefined,
    sku: product.slug || product.name,
    category: localizedCategory,
  };
  
  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hello, I would like more information about ${product.name}.`);
    window.open(`https://wa.me/918603159426?text=${text}`, '_blank');
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <main className="min-h-screen pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      
      <PageHero title={product.name} text={localizedDescription} t={t} />
      
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-[1480px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
      >
        {/* Left Column: Image Gallery */}
        <motion.div variants={fadeUp} className="lg:col-span-5 xl:col-span-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex items-center justify-center min-h-[400px] sticky top-28">
            <ProductVisual product={product} />
          </div>
        </motion.div>
 
        {/* Center Column: Details */}
        <motion.div variants={fadeUp} className="lg:col-span-7 xl:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
            <article className="pb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.detail.composition}</h3>
              <p className="text-sky-600 dark:text-sky-400 font-semibold">{localizedComposition}</p>
            </article>
            
            {product.ingredients.length > 0 && (
              <article className="py-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.detail.ingredients}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </article>
            )}
            
            {[
              [t.detail.indications, localizedIndications],
              [t.detail.benefits, localizedBenefits],
              [t.detail.dosage, localizedDosage],
              [t.detail.storage, localizedStorage],
              [t.detail.packaging, localizedPackaging],
            ].map(([title, text]) => (
              text ? (
                <article className="py-6" key={title}>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{text}</p>
                </article>
              ) : null
            ))}
          </div>
        </motion.div>

        {/* Right Column: Inquiry Panel */}
        <motion.aside variants={fadeUp} className="lg:col-span-12 xl:col-span-3">
          <div className="bg-gradient-to-br from-sky-50 to-white dark:from-sky-900/20 dark:to-slate-900 border border-sky-100 dark:border-sky-900/50 rounded-3xl p-8 shadow-lg xl:sticky xl:top-28">
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6">
              <Icon name="contact" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{t.detail.inquiryTitle}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">{t.detail.inquiryText}</p>
            <button 
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-600/20 transform hover:-translate-y-1" 
              type="button" 
              onClick={openWhatsApp}
            >
              {t.detail.sendInquiry} 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
              We respond quickly during business hours.
            </p>
          </div>
        </motion.aside>
      </motion.section>
    </main>
  );
};
