import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { ProductVisual } from '../components/ProductVisual';
import type { Product, Translation } from '../types';

export const ProductDetailPage = ({ product, t }: { product: Product; t: Translation }) => (
  <main>
    <PageHero title={product.name} text={product.description} t={t} />
    <section className="page-section detail-layout">
      <div className="gallery-card reveal">
        <ProductVisual product={product} />
        <div className="mini-gallery">
          <ProductVisual compact product={product} />
          <ProductVisual compact product={product} />
          <ProductVisual compact product={product} />
        </div>
      </div>
      <div className="detail-content reveal delay-a">
        {[
          [t.detail.composition, product.composition],
          ['Indications', t.detail.indications],
          ['Benefits', t.detail.benefits],
          ['Dosage Information', t.detail.dosage],
          ['Storage Instructions', t.detail.storage],
          ['Packaging Details', t.detail.packaging],
        ].map(([title, text]) => (
          <article className="detail-row" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <aside className="inquiry-panel reveal delay-b">
        <h3>{t.detail.inquiryTitle}</h3>
        <p>{t.detail.inquiryText}</p>
        <button className="primary-button" type="button">{t.detail.sendInquiry} <Icon name="arrow" /></button>
      </aside>
    </section>
  </main>
);
