import { PointerEvent, useState } from 'react';
import { products } from '../data/products';
import type { Product, Translation } from '../types';
import { Icon } from '../components/Icon';
import { ProductVisual } from '../components/ProductVisual';
import { Stats } from '../components/Stats';
import { CtaBanner } from '../components/CtaBanner';

type HomePageProps = {
  activeSlide: number;
  onAbout: () => void;
  onContact: () => void;
  onDetail: (product: Product) => void;
  onExplore: () => void;
  onSlide: (index: number) => void;
  t: Translation;
};

export const HomePage = ({ activeSlide, onAbout, onContact, onDetail, onExplore, onSlide, t }: HomePageProps) => (
  <>
    <Hero activeSlide={activeSlide} onContact={onContact} onExplore={onExplore} onSlide={onSlide} t={t} />
    <Highlights t={t} />
    <FeaturedProducts onDetail={onDetail} t={t} />
    <AboutPreview onAbout={onAbout} t={t} />
    <CtaBanner onContact={onContact} t={t} />
  </>
);

const Hero = ({ activeSlide, onContact, onExplore, onSlide, t }: {
  activeSlide: number;
  onContact: () => void;
  onExplore: () => void;
  onSlide: (index: number) => void;
  t: Translation;
}) => {
  const heroProducts = products.slice(0, 5);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const currentProduct = heroProducts[activeSlide];
  const previous = () => onSlide(activeSlide === 0 ? heroProducts.length - 1 : activeSlide - 1);
  const next = () => onSlide((activeSlide + 1) % heroProducts.length);

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (touchStart === null) return;
    const distance = event.clientX - touchStart;
    if (Math.abs(distance) > 48) {
      if (distance > 0) previous();
      else next();
    }
    setTouchStart(null);
  };

  return (
    <section className="hero page-section" id="home">
      <div className="hero-copy reveal">
        <p className="eyebrow">{t.heroBadge}</p>
        <h1>{t.heroTitle}</h1>
        <p className="hero-text">{t.heroText}</p>
        <div className="hero-actions">
          <button className="primary-button" onClick={onExplore} type="button">{t.exploreProducts} <Icon name="arrow" /></button>
          <button className="secondary-button" onClick={onContact} type="button">{t.contactUs}</button>
        </div>
      </div>

      <div className="hero-stage reveal delay-a" onPointerDown={(event) => setTouchStart(event.clientX)} onPointerUp={onPointerUp}>
        <div className="medical-grid" />
        <div className="hero-orbit one" />
        <div className="hero-orbit two" />
        <div className="product-slider" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {heroProducts.map((product) => (
            <div className="hero-slide" key={product.name}>
              <ProductVisual product={product} />
            </div>
          ))}
        </div>
        <div className="stage-product left"><ProductVisual compact product={heroProducts[(activeSlide + 1) % heroProducts.length]} /></div>
        <div className="stage-product right"><ProductVisual compact product={heroProducts[(activeSlide + 2) % heroProducts.length]} /></div>
        <button className="slider-arrow prev" onClick={previous} type="button" aria-label="Previous product">‹</button>
        <button className="slider-arrow next" onClick={next} type="button" aria-label="Next product">›</button>
        <div className="product-caption">
          <strong>{currentProduct.name}</strong>
          <span>{currentProduct.category} · Medicine showcase</span>
        </div>
        <div className="slide-dots">
          {heroProducts.map((product, index) => <span className={activeSlide === index ? 'active' : ''} key={product.name} />)}
        </div>
      </div>
    </section>
  );
};

const Highlights = ({ t }: { t: Translation }) => (
  <section className="highlight-strip reveal">
    {t.highlights.map(([title, text]) => (
      <article className="highlight-card" key={title}>
        <span><Icon name="check" /></span>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </article>
    ))}
  </section>
);

const FeaturedProducts = ({ onDetail, t }: { onDetail: (product: Product) => void; t: Translation }) => (
  <section className="page-section section-tight">
    <div className="section-heading reveal">
      <p className="eyebrow">{t.featuredEyebrow}</p>
      <h2>{t.featuredTitle}</h2>
    </div>
    <div className="product-grid reveal delay-a">
      {products.slice(0, 6).map((product) => (
        <article className="product-card" key={product.name}>
          <ProductVisual compact product={product} />
          <h3>{product.name}</h3>
          <p className="composition">{product.composition}</p>
          <p>{product.description}</p>
          <button onClick={() => onDetail(product)} type="button">{t.viewDetails}</button>
        </article>
      ))}
    </div>
  </section>
);

const AboutPreview = ({ onAbout, t }: { onAbout: () => void; t: Translation }) => (
  <section className="about-preview page-section reveal">
    <div>
      <p className="eyebrow">{t.aboutEyebrow}</p>
      <h2>{t.aboutTitle}</h2>
      <p>{t.aboutText}</p>
      <button className="primary-button" onClick={onAbout} type="button">{t.learnMore} <Icon name="arrow" /></button>
    </div>
    <div className="building-card">
      <div className="building-sky" />
      <div className="building">
        <span>SUKHAYA</span>
      </div>
    </div>
    <Stats t={t} />
  </section>
);
