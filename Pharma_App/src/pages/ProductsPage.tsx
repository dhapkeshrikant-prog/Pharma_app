import { ProductVisual } from '../components/ProductVisual';
import type { Product, Translation } from '../types';

type ProductsPageProps = {
  products: Product[];
  onDetail: (product: Product) => void;
  t: Translation;
};

export const ProductsPage = ({ products, onDetail, t }: ProductsPageProps) => (
  <main className="product-page page-section page-compact">
    <h1 className="mx-auto mb-8 text-center text-4xl font-extrabold tracking-normal text-[var(--text)] md:text-5xl">{t.productsPageTitle}</h1>
    <section className="product-grid reveal">
      {products.map((product) => (
        <article className="product-card" key={product.name}>
          <ProductVisual compact product={product} />
          <h3>{product.name}</h3>
          <p className="composition">{product.composition}</p>
          <button onClick={() => onDetail(product)} type="button">{t.viewDetails}</button>
        </article>
      ))}
    </section>
  </main>
);
