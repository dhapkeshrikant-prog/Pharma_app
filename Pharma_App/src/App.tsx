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
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'light';
  });
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'hi' || saved === 'mr') ? saved : 'en';
  });
  const [page, setPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const t = translations[language];
  const [runtimeError, setRuntimeError] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 6);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const checkHash = () => {
      const hash = (window.location.hash || '').replace('#', '');
      if (!hash) return;
      if (hash.startsWith('product:')) {
        const slug = decodeURIComponent(hash.replace('product:', ''));
        const found = products.find((p) => (p.slug && p.slug === slug) || p.name === slug);
        if (found) {
          setSelectedProduct(found);
          goTo('detail');
        }
      } else if (hash.startsWith('category:') || ['all', 'tablets', 'capsules', 'syrups', 'nutraceuticals', 'dry-syrups', 'antibiotics', 'pain-killer', 'calcium-preparation', 'protein-powder', 'ppi', 'cough-syrup', 'anticold', 'antifungal-cream'].includes(hash)) {
        // navigate to products page for category slugs
        goTo('products');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  useEffect(() => {
    const onError = (ev: ErrorEvent) => {
      console.error('Runtime error caught:', ev.error || ev.message);
      setRuntimeError((ev.error && ev.error.message) || ev.message || 'Unknown runtime error');
    };

    const onRejection = (ev: PromiseRejectionEvent) => {
      console.error('Unhandled rejection:', ev.reason);
      setRuntimeError((ev.reason && ev.reason.message) || JSON.stringify(ev.reason) || 'Unhandled promise rejection');
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection as any);
    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection as any);
    };
  }, []);

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

    const formData = new FormData(event.currentTarget);
    const fullName = formData.get('name')?.toString().trim() || 'N/A';
    const email = formData.get('email')?.toString().trim() || 'N/A';
    const phone = formData.get('phone')?.toString().trim() || 'N/A';
    const message = formData.get('message')?.toString().trim() || 'No additional details provided.';

    const whatsappMessage = `Hello Sukhaya Pharmaceutical,\n\nNew contact inquiry:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/918603159426?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappUrl;
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
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

      {runtimeError && (
        <div className="fixed inset-0 grid place-items-center bg-slate-900/60 z-[9999]">
          <div className="w-11/12 max-w-2xl p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-50 shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Runtime error detected</h3>
            <pre className="max-h-48 overflow-auto bg-slate-100 dark:bg-black/60 p-3 rounded-lg mb-4 text-sm">{runtimeError}</pre>
            <div className="flex gap-2">
              <button onClick={() => window.location.reload()} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition">Reload</button>
              <button onClick={() => setRuntimeError(null)} className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition">Dismiss</button>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
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
        </motion.div>
      </AnimatePresence>

      {page !== 'home' && <CtaBanner onContact={() => goTo('contact')} t={t} />}
      <Footer onNavigate={goTo} t={t} />
    </div>
  );
};

export default App;
