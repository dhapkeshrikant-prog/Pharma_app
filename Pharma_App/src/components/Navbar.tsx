import { useState, useRef, useEffect } from 'react';
import { products } from '../data/products';
import type { Language, Page, Theme, Translation } from '../types';
import { Icon } from './Icon';
import { Logo } from './Logo';
import MegaMenu from './MegaMenu';
import { AnimatePresence, motion } from 'framer-motion';

const navItems: { key: keyof Translation['nav']; page: Page; icon: 'home' | 'about' | 'products' | 'contact' | 'help' }[] = [
  { key: 'home', page: 'home', icon: 'home' },
  { key: 'about', page: 'about', icon: 'about' },
  { key: 'products', page: 'products', icon: 'products' },
  { key: 'contact', page: 'contact', icon: 'contact' },
  { key: 'help', page: 'help', icon: 'help' },
];

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'mr', label: 'Marathi' },
];

type NavbarProps = {
  language: Language;
  onLanguage: (language: Language) => void;
  onNavigate: (page: Page) => void;
  onTheme: () => void;
  page: Page;
  theme: Theme;
  t: Translation;
};

export const Navbar = ({ language, onLanguage, onNavigate, onTheme, page, theme, t }: NavbarProps) => {
  const [showLang, setShowLang] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const selectLanguage = (nextLanguage: Language) => {
    onLanguage(nextLanguage);
    setShowLang(false);
  };

  const handleNavigate = (p: Page) => {
    onNavigate(p);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLang(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="max-w-[1480px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <Logo onClick={() => onNavigate('home')} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              item.key === 'products' ? (
                <div key={item.page}>
                  <MegaMenu onNavigate={onNavigate} t={t} />
                </div>
              ) : (
                <button 
                  key={item.page} 
                  onClick={() => onNavigate(item.page)} 
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all relative overflow-hidden group ${
                    page === item.page 
                      ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon name={item.icon} />
                  <span>{t.nav[item.key]}</span>
                  {page === item.page && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 dark:bg-sky-400" />
                  )}
                </button>
              )
            ))}
          </nav>

          {/* Actions (Search, Lang, Theme, Mobile Menu) */}
          <div className="flex items-center gap-3">
            {/* Desktop Search */}
            <form 
              className="hidden md:block relative"
              onSubmit={(e) => {
                e.preventDefault();
                const val = (new FormData(e.currentTarget as HTMLFormElement).get('q') || '').toString().trim();
                if (!val) return;
                onNavigate('products');
                window.location.hash = `search:${encodeURIComponent(val.toLowerCase())}`;
              }}
            >
              <input 
                name="q" 
                placeholder={t.searchPlaceholder} 
                aria-label="Search products" 
                className="w-48 xl:w-64 pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all dark:text-white"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </form>

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button 
                className={`p-2.5 rounded-xl border transition-all ${
                  showLang 
                    ? 'border-sky-500 text-sky-600 bg-sky-50 dark:bg-sky-900/30 dark:text-sky-400' 
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                onClick={() => setShowLang((value) => !value)} 
                type="button" 
                aria-label={t.languageLabel}
              >
                <Icon name="globe" />
              </button>
              
              {showLang && (
                <div className="absolute right-0 mt-3 w-40 p-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">{t.languageLabel}</div>
                  <div className="flex flex-col gap-1">
                    {languages.map((item) => (
                      <button 
                        key={item.code} 
                        onClick={() => selectLanguage(item.code)} 
                        type="button"
                        className={`text-left px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                          language === item.code 
                            ? 'bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400' 
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button 
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
              onClick={onTheme} 
              type="button" 
              aria-label="Toggle theme"
            >
              <Icon name={theme === 'light' ? 'moon' : 'sun'} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50 bg-white dark:bg-slate-900 shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800">
                <Logo onClick={() => handleNavigate('home')} />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Mobile Search */}
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const val = (new FormData(e.currentTarget as HTMLFormElement).get('q') || '').toString().trim();
                    if (!val) return;
                    handleNavigate('products');
                    window.location.hash = `search:${encodeURIComponent(val.toLowerCase())}`;
                  }}
                  className="relative"
                >
                  <input
                    name="q"
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                </form>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.page}
                      type="button"
                      onClick={() => handleNavigate(item.page)}
                      className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl font-bold transition-all text-left ${
                        page === item.page
                          ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className={`${page === item.page ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400'}`}>
                        <Icon name={item.icon} />
                      </span>
                      {t.nav[item.key]}
                    </button>
                  ))}
                </div>

                {/* Category quick links */}
                <div className="mt-6 mb-2 px-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Quick Categories</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Tablets', 'Capsules', 'Syrups', 'Nutraceuticals'].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          handleNavigate('products');
                          window.location.hash = `category:${cat.toLowerCase()}`;
                        }}
                        className="px-3 py-2 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-sky-900/40 hover:text-sky-700 dark:hover:text-sky-300 transition-colors text-left"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                {/* Language */}
                <div className="flex gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => selectLanguage(l.code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        language === l.code
                          ? 'bg-sky-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-600'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
                {/* Theme */}
                <button
                  type="button"
                  onClick={onTheme}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <Icon name={theme === 'light' ? 'moon' : 'sun'} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
