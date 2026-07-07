import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { Language, Page, Theme, Translation } from '../types';
import { Icon } from './Icon';
import { Logo } from './Logo';
import MegaMenu from './MegaMenu';

const navItems: { key: keyof Translation['nav']; page: Page }[] = [
  { key: 'home', page: 'home' },
  { key: 'about', page: 'about' },
  { key: 'products', page: 'products' },
  { key: 'contact', page: 'contact' },
  { key: 'help', page: 'help' },
  { key: 'blog', page: 'blog' },
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
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) setShowLang(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavigate = (nextPage: Page) => {
    onNavigate(nextPage);
    setMobileOpen(false);
  };

  const selectLanguage = (nextLanguage: Language) => {
    onLanguage(nextLanguage);
    setShowLang(false);
  };

  return (
    <>
      <header className={`pharma-navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="pharma-navbar-inner">
          <div className="pharma-navbar-brand">
            <Logo onClick={() => onNavigate('home')} />
          </div>

          <nav className="pharma-navbar-links">
            {navItems.map((item) => (
              item.key === 'products' ? (
                <MegaMenu key={item.page} onNavigate={onNavigate} t={t} />
              ) : (
                <button key={item.page} className={`pharma-nav-link ${page === item.page ? 'active' : ''}`} onClick={() => onNavigate(item.page)} type="button">
                  <span>{t.nav[item.key]}</span>
                  {page === item.page && <motion.i layoutId="nav-pill" />}
                </button>
              )
            ))}
          </nav>

          <div className="pharma-navbar-actions">
            <div className="relative" ref={langRef}>
              <button className={`pharma-icon-button ${showLang ? 'active' : ''}`} onClick={() => setShowLang((value) => !value)} type="button" aria-label={t.languageLabel}>
                <Icon name="globe" />
              </button>
              {showLang && (
                <div className="pharma-lang-menu">
                  {languages.map((item) => (
                    <button key={item.code} className={language === item.code ? 'active' : ''} onClick={() => selectLanguage(item.code)} type="button">
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="pharma-icon-button" onClick={onTheme} type="button" aria-label="Toggle theme">
              <Icon name={theme === 'light' ? 'moon' : 'sun'} />
            </button>

            <button className="pharma-menu-button" onClick={() => setMobileOpen((value) => !value)} type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="pharma-drawer-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} />
            <motion.aside className="pharma-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
              <div className="pharma-drawer-head">
                <Logo onClick={() => handleNavigate('home')} />
                <button className="pharma-icon-button" onClick={() => setMobileOpen(false)} type="button" aria-label="Close menu">X</button>
              </div>
              <nav className="pharma-drawer-links">
                {navItems.map((item) => (
                  <button key={item.page} className={page === item.page ? 'active' : ''} onClick={() => handleNavigate(item.page)} type="button">
                    {t.nav[item.key]}
                  </button>
                ))}
              </nav>
              <div className="pharma-drawer-footer">
                {languages.map((item) => (
                  <button key={item.code} className={language === item.code ? 'active' : ''} onClick={() => selectLanguage(item.code)} type="button">
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
