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

const heroLines = ['Trusted Medicines For', 'A Healthier Life.'];

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
    const base = ['Tablets', 'Capsules', 'Syrups', 'Injections', 'Cardiac', 'Orthopedic', 'Nutraceuticals', 'Antibiotics', 'Gastro', 'Respiratory', 'Pediatric', 'View All'];
    return [...base, ...base];
  }, []);

  const showcaseProducts = useMemo(() => products.filter((product) => product.image), []);
  const featuredProducts = useMemo(() => {
    const preferred = ['upstrin-forte', 'dazer-cv', 'snofreez', 'boneaya', 'azaya-lb', 'panaya-40-dsr', 'cufreez-a'];
    const picked = preferred.map((slug) => products.find((product) => product.slug === slug)).filter(Boolean) as Product[];
    return [...picked, ...picked];
  }, []);

  return (
    <main className="pharma-home w-full overflow-hidden bg-white dark:bg-slate-950">
      <OpeningScene />
      <section className="pharma-hero" id="home">
        <MedicalBackground />
        <motion.div className="pharma-hero-inner" style={{ opacity: heroOpacity, y: heroY }}>
          <div className="pharma-hero-copy">
            <motion.span className="pharma-eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              Premium pharmaceutical care
            </motion.span>
            <h1>
              {heroLines.map((line, index) => (
                <motion.span key={line} initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.16, duration: 0.62, ease: 'easeOut' }}>
                  {line}
                </motion.span>
              ))}
            </h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44, duration: 0.55 }}>
              SUKHAYA Pharmaceutical delivers high-quality, safe, and affordable healthcare products with a modern product experience designed for trust and fast inquiry.
            </motion.p>
            <motion.div className="pharma-hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56, duration: 0.55 }}>
              <button className="pharma-primary" onClick={onExplore} type="button">Explore Products <Icon name="arrow" className="h-4 w-4" /></button>
              <button className="pharma-secondary" onClick={onContact} type="button">Contact Us</button>
            </motion.div>
          </div>
          <HeroShowcase products={showcaseProducts} onDetail={onDetail} />
        </motion.div>
      </section>

      <CategoryRibbon categories={categories} onExplore={onExplore} />
      <FeaturedCarousel products={featuredProducts} onDetail={onDetail} />
      <StatsBand />
      <WhyChoose onAbout={onAbout} />
      <CtaBanner onContact={onContact} t={t} />
    </main>
  );
};

const HeroShowcase = ({ products, onDetail }: { products: Product[]; onDetail: (product: Product) => void }) => {
  const marquee = [...products, ...products];
  return (
    <motion.div className="pharma-showcase" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18, duration: 0.68 }}>
      <div className="pharma-showcase-orbit" />
      <motion.div className="pharma-product-track" drag="x" dragConstraints={{ left: -900, right: 0 }}>
        <div className="pharma-product-marquee">
          {marquee.map((product, index) => (
            <ProductCard key={`${product.slug}-${index}`} product={product} onDetail={onDetail} compact />
          ))}
        </div>
      </motion.div>
      {products.slice(0, 5).map((product, index) => (
        <button className={`pharma-floating-card float-${index + 1}`} key={product.slug} onClick={() => onDetail(product)} type="button">
          <img src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" />
          <span>
            <strong>{product.name}</strong>
            <small>{product.category}</small>
          </span>
        </button>
      ))}
    </motion.div>
  );
};

const ProductCard = ({ product, onDetail, compact = false }: { product: Product; onDetail: (product: Product) => void; compact?: boolean }) => (
  <article className={`pharma-product-card ${compact ? 'compact' : ''}`}>
    <div className="pharma-product-image">
      <img src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" />
    </div>
    <h3>{product.name}</h3>
    <p>{product.category}</p>
    <small>{product.composition || product.description}</small>
    {!compact && <button onClick={() => onDetail(product)} type="button">View Details</button>}
  </article>
);

const CategoryRibbon = ({ categories, onExplore }: { categories: string[]; onExplore: () => void }) => (
  <FadeIn className="pharma-category-section">
    <div className="pharma-section-heading">
      <h2>Explore by Category</h2>
      <button onClick={onExplore} type="button">View All</button>
    </div>
    <div className="pharma-category-ribbon">
      <motion.div className="pharma-category-track" drag="x" dragConstraints={{ left: -700, right: 0 }}>
        {categories.map((category, index) => (
          <button className="pharma-category-pill" key={`${category}-${index}`} onClick={onExplore} type="button">
            <span>{category.slice(0, 2)}</span>
            <strong>{category}</strong>
          </button>
        ))}
      </motion.div>
    </div>
  </FadeIn>
);

const FeaturedCarousel = ({ products, onDetail }: { products: Product[]; onDetail: (product: Product) => void }) => (
  <section className="pharma-featured">
    <FadeIn>
      <div className="pharma-section-heading">
        <h2>Featured Products</h2>
        <button type="button">Premium Catalogue</button>
      </div>
    </FadeIn>
    <div className="pharma-featured-ribbon">
      <motion.div className="pharma-featured-track" drag="x" dragConstraints={{ left: -900, right: 0 }}>
        {products.map((product, index) => (
          <ProductCard key={`${product.slug}-featured-${index}`} product={product} onDetail={onDetail} />
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

const StatsBand = () => (
  <section className="pharma-stats-wrap">
    <div className="pharma-stats">
      {[
        [150, '+', 'Quality Products'],
        [10, '+', 'Therapeutic Areas'],
        [500, '+', 'Happy Customers'],
        [100, '%', 'Quality Assurance'],
      ].map(([value, suffix, label]) => (
        <FadeIn key={label as string}>
          <div>
            <strong><CountUp value={value as number} suffix={suffix as string} /></strong>
            <small>{label}</small>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

const WhyChoose = ({ onAbout }: { onAbout: () => void }) => (
  <section className="pharma-why">
    <div className="pharma-section-heading">
      <h2>Why Choose Sukhaya Pharma?</h2>
      <button onClick={onAbout} type="button">About Us</button>
    </div>
    <div className="pharma-why-grid">
      {[
        ['Quality Assurance', 'Carefully presented products with consistent catalogue information.'],
        ['Affordable Healthcare', 'A practical range designed for accessible healthcare needs.'],
        ['Modern Experience', 'Fast search, responsive cards, and premium product discovery.'],
        ['Patient First', 'Simple inquiry paths for customers and healthcare partners.'],
      ].map(([title, text], index) => (
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
