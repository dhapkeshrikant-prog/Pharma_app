import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { ProductVisual } from '../components/ProductVisual';
import type { Category, Product, Translation } from '../types';

type ProductsPageProps = {
  categories: Category[];
  category: Category;
  filteredProducts: Product[];
  onCategory: (category: Category) => void;
  onDetail: (product: Product) => void;
  search: string;
  setSearch: (value: string) => void;
  t: Translation;
};

export const ProductsPage = ({ categories, category, filteredProducts, onCategory, onDetail, search, setSearch, t }: ProductsPageProps) => (
  <main className="product-page">
    <PageHero title={t.productsPageTitle} text={t.productsPageText} t={t} />
    <section className="page-section section-tight">
      <div className="product-tools reveal">
        <div className="search-box">
          <Icon name="search" />
          <input onChange={(event) => setSearch(event.target.value)} placeholder={t.searchPlaceholder} value={search} />
        </div>
        <div className="category-tabs">
          {categories.map((item) => (
            <button className={item === category ? 'active' : ''} key={item} onClick={() => onCategory(item)} type="button">{item}</button>
          ))}
        </div>
      </div>
      <div className="product-grid reveal delay-a">
        {filteredProducts.map((product) => (
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
  </main>
);
