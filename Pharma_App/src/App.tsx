import { FormEvent, useEffect, useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { products } from './data/products';
import { translations } from './i18n/translations';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HelpPage } from './pages/HelpPage';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import type { Language, Page, Product, Theme } from './types';

const App = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('en');
  const [page, setPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 5);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const goTo = (nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDetail = (product: Product) => {
    setSelectedProduct(product);
    goTo('detail');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <AnimatedBackground />
      <Navbar
        language={language}
        onLanguage={setLanguage}
        onNavigate={goTo}
        onTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        page={page}
        theme={theme}
        t={t}
      />

      {page === 'home' && (
        <HomePage
          activeSlide={activeSlide}
          onAbout={() => goTo('about')}
          onContact={() => goTo('contact')}
          onDetail={openDetail}
          onExplore={() => goTo('products')}
          onSlide={setActiveSlide}
          t={t}
        />
      )}

      {page === 'about' && <AboutPage t={t} />}
      {page === 'products' && <ProductsPage products={products} onDetail={openDetail} t={t} />}
      {page === 'contact' && <ContactPage onSubmit={onSubmit} submitted={submitted} t={t} />}
      {page === 'help' && <HelpPage onContact={() => goTo('contact')} t={t} />}
      {page === 'detail' && <ProductDetailPage product={selectedProduct} t={t} />}

      {page !== 'home' && <CtaBanner onContact={() => goTo('contact')} t={t} />}
      <Footer onNavigate={goTo} t={t} />
    </div>
  );
};

export default App;
