import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CtaBanner } from '../components/CtaBanner';
import { Icon } from '../components/Icon';
import { products } from '../data/products';
import type { Product, Translation } from '../types';

type HomePageProps = {
  activeSlide: number;
  onAbout: () => void;
  onContact: () => void;
  onDetail: (product: Product) => void;
  onExplore: () => void;
  onSlide: (index: number) => void;
  t: Translation;
};

const FadeIn = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-90px' }}
    transition={{ duration: 0.55, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export const HomePage = ({ onAbout, onContact, onDetail, onExplore, t }: HomePageProps) => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.82]);
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, 24]);

  const categories = useMemo(() => {
    const categoryImages: Record<string, string> = {
      'pain relief': '/product-images/APS_AYA Image.png',
      'antibiotics': '/product-images/AZAYA-LB med.png',
      'orthopedic': '/product-images/BONEAYA-img.png',
      'respiratory': '/product-images/CUFREEZ‑A.png',
      'tablets': '/product-images/KSHITIZ image.png',
      'syrups': '/product-images/Kshitiz 200ml img 3.png',
      'nutraceuticals': '/product-images/NEURAYA.png',
      'gastro': '/product-images/PANAYA-40.png',
      'cold & cough': '/product-images/SNOFREEZ.png',
    };

    const base = [
      { label: 'Pain Relief', labelHi: 'दर्द निवारक', labelMr: 'वेदना शामक', slug: 'pain-relief' },
      { label: 'Antibiotics', labelHi: 'एंटिबॉयोटिक्स', labelMr: 'अँटीबायोटिक्स', slug: 'antibiotics' },
      { label: 'Orthopedic', labelHi: 'ऑर्थोपेडिक', labelMr: 'ऑर्थोपेडिक', slug: 'orthopedic' },
      { label: 'Respiratory', labelHi: 'श्वसन संबंधी', labelMr: 'श्वसन संस्था', slug: 'respiratory' },
      { label: 'Tablets', labelHi: 'टैबलेट्स', labelMr: 'टॅब्लेट्स', slug: 'tablets' },
      { label: 'Syrups', labelHi: 'सिरप', labelMr: 'सिरप', slug: 'syrups' },
      { label: 'Nutraceuticals', labelHi: 'न्यूट्रास्युटिकल्स', labelMr: 'न्युट्रास्युटिकल्स', slug: 'nutraceuticals' },
      { label: 'Gastro', labelHi: 'गैस्ट्रो / पेट रोग', labelMr: 'गॅस्ट्रो / पोटाचे विकार', slug: 'gastro' },
      { label: 'Cold & Cough', labelHi: 'सर्दी और खांसी', labelMr: 'सर्दी आणि खोकला', slug: 'cold-cough' },
      { label: 'View All', labelHi: 'सभी देखें', labelMr: 'सर्व पहा', slug: null },
    ].map((item) => {
      const isHi = t.languageLabel === 'भाषा' && t.nav.about === 'हमारे बारे में';
      const isMr = t.languageLabel === 'भाषा' && t.nav.about === 'आमच्याबद्दल';
      const currentLabel = isHi ? item.labelHi : isMr ? item.labelMr : item.label;
      return {
        label: currentLabel,
        slug: item.slug,
        image: item.slug ? categoryImages[item.label.toLowerCase()] : '/product-images/KSHITIZ image.png'
      };
    });

    return [...base, ...base];
  }, [t]);

  const showcaseProducts = useMemo(() => products.filter((product) => product.image), []);
  const featuredProducts = useMemo(() => {
    const preferred = ['upstrin-forte', 'dazer-cv', 'snofreez', 'boneaya', 'azaya-lb', 'panaya-40-dsr', 'cufreez-a'];
    return preferred.map((slug) => products.find((product) => product.slug === slug)).filter(Boolean) as Product[];
  }, []);

  return (
    <main className="pharma-home w-full overflow-hidden bg-white dark:bg-slate-950">
      <OpeningScene />
      <section className="pharma-hero" id="home">
        <MedicalBackground />
        <motion.div className="pharma-hero-inner" style={{ opacity: heroOpacity, y: heroY }}>
          <div className="pharma-hero-copy">
            <motion.span className="pharma-eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              {t.heroBadge}
            </motion.span>
            <h1>
              <motion.span initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.62, ease: 'easeOut' }}>
                {t.heroTitle.split(' ').slice(0, 3).join(' ')}
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.62, ease: 'easeOut' }}>
                {t.heroTitle.split(' ').slice(3).join(' ')}
              </motion.span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44, duration: 0.55 }}>
              {t.heroText}
            </motion.p>
            <motion.div className="pharma-hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56, duration: 0.55 }}>
              <button className="pharma-primary" onClick={onExplore} type="button">{t.exploreProducts} <Icon name="arrow" className="h-4 w-4" /></button>
              <button className="pharma-secondary" onClick={onContact} type="button">{t.contactUs}</button>
            </motion.div>
          </div>
          <HeroShowcase products={showcaseProducts} onDetail={onDetail} t={t} />
        </motion.div>
      </section>

      <RatingStrip t={t} />
      <CategoryRibbon categories={categories} onExplore={onExplore} t={t} />
      <FeaturedCarousel products={featuredProducts} onDetail={onDetail} t={t} />
      <StatsBand t={t} />
      <WhyChoose onAbout={onAbout} t={t} />
      <CtaBanner onContact={onContact} t={t} />
    </main>
  );
};

const HeroShowcase = ({ products, onDetail, t }: { products: Product[]; onDetail: (product: Product) => void; t: Translation }) => {
  const marquee = [...products, ...products];
  return (
    <motion.div className="pharma-showcase" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18, duration: 0.68 }}>
      <div className="pharma-showcase-orbit" />
      <motion.div className="pharma-product-track" drag="x" dragConstraints={{ left: -900, right: 0 }}>
        <div className="pharma-product-marquee">
          {marquee.map((product, index) => (
            <ProductCard key={`${product.slug}-${index}`} product={product} onDetail={onDetail} t={t} compact />
          ))}
        </div>
      </motion.div>
      {products.slice(0, 5).map((product, index) => {
        const isHi = t.languageLabel === 'भाषा' && t.nav.about === 'हमारे बारे में';
        const isMr = t.languageLabel === 'भाषा' && t.nav.about === 'आमच्याबद्दल';
        const language = isHi ? 'hi' : isMr ? 'mr' : 'en';
        const localizedCategory = product.translations?.[language]?.category ?? product.category;

        return (
          <button className={`pharma-floating-card float-${index + 1}`} key={product.slug} onClick={() => onDetail(product)} type="button">
            <img src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" />
            <span>
              <strong>{product.name}</strong>
              <small>{localizedCategory}</small>
            </span>
          </button>
        );
      })}
    </motion.div>
  );
};

const ProductCard = ({ product, onDetail, t, compact = false }: { product: Product; onDetail: (product: Product) => void; t: Translation; compact?: boolean }) => {
  const isHi = t.languageLabel === 'भाषा' && t.nav.about === 'हमारे बारे में';
  const isMr = t.languageLabel === 'भाषा' && t.nav.about === 'आमच्याबद्दल';
  const language = isHi ? 'hi' : isMr ? 'mr' : 'en';

  const localizedName = product.name;
  const localizedCategory = product.translations?.[language]?.category ?? product.category;
  const localizedComposition = product.translations?.[language]?.composition ?? product.composition;
  const localizedDescription = product.translations?.[language]?.description ?? product.description;

  return (
    <article className={`pharma-product-card ${compact ? 'compact' : ''}`}>
      <div className="pharma-product-image">
        <img src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" />
      </div>
      <h3>{localizedName}</h3>
      <p>{localizedCategory}</p>
      <small>{localizedComposition || localizedDescription}</small>
      {!compact && <button onClick={() => onDetail(product)} type="button">{t.viewDetails}</button>}
    </article>
  );
};

const RatingStrip = ({ t }: { t: Translation }) => {
  const isHi = t.languageLabel === 'भाषा' && t.nav.about === 'हमारे बारे में';
  const isMr = t.languageLabel === 'भाषा' && t.nav.about === 'आमच्याबद्दल';
  const appealText = isHi ? 'संतुष्ट ग्राहक • गुणवत्तापूर्ण उत्पाद' : isMr ? 'आनंदी ग्राहक • गुणवत्तापूर्ण उत्पादने' : 'Happy Customers • Quality Products';
  const ratingLabel = isHi ? 'उपयोगकर्ता रेटिंग' : isMr ? 'वापरकर्ता रेटिंग' : 'User Rating';
  const complianceLabel = isHi ? '100% सुरक्षित और प्रभावी' : isMr ? '100% सुरक्षित आणि प्रभावी' : '100% Safe & Effective';
  const assuranceLabel = isHi ? 'गुणवत्ता आश्वासन' : isMr ? 'गुणवत्ता हमी' : 'Quality Assurance';
  const rangeLabel = isHi ? 'उत्पाद श्रृंखला' : isMr ? 'उत्पादन श्रेणी' : 'Products Range';
  const trustedLabel = isHi ? 'डॉक्टरों का भरोसा' : isMr ? 'डॉक्टरांचा विश्वास' : 'Doctors Trusted';

  return (
    <section className="pharma-rating-strip py-6 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800" aria-label="Customer and quality highlights">
      <div className="max-w-[1480px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
            {appealText}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2.5">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="ml-2">
              <strong className="text-lg font-black text-slate-900 dark:text-white block leading-none">4.9 / 5.0</strong>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{ratingLabel}</span>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-3">
            <strong className="text-2xl font-black text-sky-600 dark:text-sky-400">100%</strong>
            <div>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block leading-none">{complianceLabel}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{assuranceLabel}</span>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-3">
            <strong className="text-2xl font-black text-sky-600 dark:text-sky-400">150+</strong>
            <div>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block leading-none">{rangeLabel}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{trustedLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryRibbon = ({ categories, onExplore, t }: { categories: { label: string; image?: string; slug: string | null }[]; onExplore: () => void; t: Translation }) => (
  <FadeIn className="pharma-category-section">
    <div className="pharma-section-heading">
      <h2>{t.exploreByCategory}</h2>
      <button
        onClick={() => {
          onExplore();
          const url = new URL(window.location.href);
          url.searchParams.delete('category');
          window.history.pushState({}, '', url.pathname);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
        type="button"
      >
        {t.viewAll}
      </button>
    </div>
    <div className="pharma-category-ribbon">
      <motion.div className="pharma-category-track" drag="x" dragConstraints={{ left: -700, right: 0 }}>
        {categories.map((category, index) => (
          <button
            className="pharma-category-pill cursor-pointer"
            key={`${category.label}-${index}`}
            onClick={() => {
              onExplore();
              if (category.slug) {
                const url = new URL(window.location.href);
                url.searchParams.set('category', category.slug);
                window.history.pushState({}, '', url.toString());
              } else {
                const url = new URL(window.location.href);
                url.searchParams.delete('category');
                window.history.pushState({}, '', url.pathname);
              }
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            type="button"
          >
            <span>{category.image ? <img src={category.image} alt="" className="w-full h-full object-contain p-1" loading="lazy" /> : category.label.slice(0, 2)}</span>
            <strong>{category.label}</strong>
          </button>
        ))}
      </motion.div>
    </div>
  </FadeIn>
);

const FeaturedCarousel = ({ products, onDetail, t }: { products: Product[]; onDetail: (product: Product) => void; t: Translation }) => (
  <section className="pharma-featured">
    <FadeIn>
      <div className="pharma-section-heading">
        <h2>{t.featuredTitle}</h2>
      </div>
    </FadeIn>
    <div className="pharma-featured-ribbon">
      <motion.div className="pharma-featured-track" drag="x" dragConstraints={{ left: -900, right: 0 }}>
        {products.map((product, index) => (
          <ProductCard key={`${product.slug}-featured-${index}`} product={product} onDetail={onDetail} t={t} />
        ))}
      </motion.div>
    </div>
  </section>
);

const CountUp = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.round((value * frame) / total));
      if (frame >= total) window.clearInterval(timer);
    }, 24);
    return () => window.clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsBand = ({ t }: { t: Translation }) => (
  <section className="pharma-stats-wrap">
    <div className="pharma-stats">
      {t.stats.map(([value, label]) => (
        <FadeIn key={label}>
          <div>
            <strong>
              <CountUp value={parseInt(value) || 100} suffix={value.replace(/[0-9]/g, '')} />
            </strong>
            <small>{label}</small>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

const WhyChoose = ({ onAbout, t }: { onAbout: () => void; t: Translation }) => (
  <section className="pharma-why">
    <div className="pharma-section-heading">
      <h2>{t.whyChooseTitle}</h2>
      <button onClick={onAbout} type="button">{t.nav.about}</button>
    </div>
    <div className="pharma-why-grid">
      {t.whyChooseItems.map(([title, text], index) => (
        <FadeIn delay={index * 0.06} key={title}>
          <article>
            <span><Icon name="check" /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        </FadeIn>
      ))}
    </div>
  </section>
);

const MedicalBackground = () => (
  <div className="pharma-medical-bg" aria-hidden="true">
    <span className="dna dna-a" />
    <span className="dna dna-b" />
    <span className="mol mol-a" />
    <span className="mol mol-b" />
    <span className="capsule capsule-a" />
    <span className="capsule capsule-b" />
    <span className="cross cross-a" />
    {Array.from({ length: 16 }).map((_, index) => <i key={index} />)}
  </div>
);

const OpeningScene = () => {
  const [visible, setVisible] = useState(() => sessionStorage.getItem('sukhayaIntroSeen') !== 'true');
  if (!visible) return null;

  return (
    <motion.div
      className="home-opening"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 1.1, duration: 0.45 }}
      onAnimationComplete={() => {
        sessionStorage.setItem('sukhayaIntroSeen', 'true');
        setVisible(false);
      }}
    >
      <div className="home-ref-loader"><span /><strong>SUKHAYA PHARMA</strong></div>
    </motion.div>
  );
};
