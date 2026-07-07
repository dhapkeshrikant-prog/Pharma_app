import { CSSProperties, MouseEvent, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from '../data/products';
import styles from './PremiumProductShowcase.module.css';

type ProductSlide = {
  name: string;
  composition: string;
  description: string;
  boxImage: string;
  blisterImage: string;
  backgroundImage: string;
  accentColor: string;
};

type PremiumProductShowcaseProps = {
  activeSlide: number;
  onSlide: (index: number) => void;
};

const slideIndexes = [0, 1, 2, 6, 10];

const buildSlides = (): ProductSlide[] =>
  slideIndexes
    .map((index) => products[index])
    .filter((product) => product?.image)
    .map((product) => ({
      name: product.name,
      composition: product.composition || product.description,
      description: product.description,
      boxImage: product.image ?? '',
      blisterImage: product.image ?? '',
      backgroundImage: product.image ?? '',
      accentColor: product.color,
    }));

export const PremiumProductShowcase = ({ activeSlide, onSlide }: PremiumProductShowcaseProps) => {
  const slides = useMemo(buildSlides, []);
  const index = activeSlide % slides.length;
  const slide = slides[index];
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 0, py: 0 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      onSlide((index + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [index, onSlide, slides.length]);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: y * -12,
      ry: x * 12,
      px: x,
      py: y,
    });
  };

  const reset = () => setTilt({ rx: 0, ry: 0, px: 0, py: 0 });

  const go = (nextIndex: number) => {
    onSlide((nextIndex + slides.length) % slides.length);
  };

  const labels = [slide, slides[(index + 1) % slides.length], slides[(index + 2) % slides.length]];

  return (
    <motion.div
      className={styles.scene}
      style={{
        '--accent': slide.accentColor,
        '--rx': `${tilt.rx}deg`,
        '--ry': `${tilt.ry}deg`,
        '--px': tilt.px,
        '--py': tilt.py,
      } as CSSProperties}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      <div
        className={styles.card}
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.03)), radial-gradient(circle at 18% 16%, color-mix(in srgb, ${slide.accentColor} 24%, transparent) 0%, transparent 54%), rgba(18,28,45,0.62)`,
          boxShadow: `0 34px 90px color-mix(in srgb, ${slide.accentColor} 28%, rgba(0,0,0,0.34)), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        <div className={styles.medicalBackdrop} aria-hidden="true">
          <div className={styles.grid} />
          <div className={styles.hexagons} />
          <div className={styles.dna} />
          <div className={styles.neurons} />
          <div className={styles.molecules} />
          <span className={styles.particleOne} />
          <span className={styles.particleTwo} />
          <span className={styles.particleThree} />
        </div>

        <button className={`${styles.arrow} ${styles.prev}`} type="button" aria-label="Previous product" onClick={() => go(index - 1)}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button className={`${styles.arrow} ${styles.next}`} type="button" aria-label="Next product" onClick={() => go(index + 1)}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.name}
            className={styles.productImageWrap}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{
              backgroundImage: `radial-gradient(circle at 20% 18%, color-mix(in srgb, ${slide.accentColor} 24%, rgba(255,255,255,0.5)) 0%, transparent 40%), linear-gradient(145deg, rgba(255,255,255,0.24), rgba(255,255,255,0.05)), url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img src={slide.boxImage} alt={slide.name} className={styles.productImage} />
            <div className={styles.productCaption}>
              <span className={styles.productBadge}>{slide.name}</span>
              <p>{slide.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div key={`${slide.name}-labels`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            {labels.map((item, labelIndex) => (
              <motion.article
                className={`${styles.floatCard} ${styles[`float${labelIndex + 1}`]}`}
                key={`${item.name}-${labelIndex}`}
                initial={{ opacity: 0, y: 18, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ delay: labelIndex * 0.08, duration: 0.45, ease: 'easeOut' }}
              >
                <span className={styles.medicineIcon} aria-hidden="true" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.composition}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className={styles.mobileCards}>
          {labels.map((item) => (
            <article key={item.name}>
              <span className={styles.medicineIcon} aria-hidden="true" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.composition}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.dots} aria-label="Product slides">
          {slides.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show ${item.name}`}
              className={dotIndex === index ? styles.activeDot : ''}
              onClick={() => go(dotIndex)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
