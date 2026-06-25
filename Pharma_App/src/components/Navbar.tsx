import { useState } from 'react';
import type { Language, Page, Theme, Translation } from '../types';
import { Icon } from './Icon';
import { Logo } from './Logo';

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

  const selectLanguage = (nextLanguage: Language) => {
    onLanguage(nextLanguage);
    setShowLang(false);
  };

  return (
    <>
      {showLang && <button className="dropdown-overlay" onClick={() => setShowLang(false)} type="button" aria-label="Close language menu" />}
      <header className="navbar">
        <Logo onClick={() => onNavigate('home')} />
        <nav>
          {navItems.map((item) => (
            <button className={page === item.page ? 'active' : ''} key={item.page} onClick={() => onNavigate(item.page)} type="button">
              <Icon name={item.icon} />
              <span>{t.nav[item.key]}</span>
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="language-menu">
            <button className="icon-button" onClick={() => setShowLang((value) => !value)} type="button" aria-label={t.languageLabel}>
              <Icon name="globe" />
            </button>
            {showLang && (
              <div className="language-dropdown">
                <small>{t.languageLabel}</small>
                {languages.map((item) => (
                  <button className={language === item.code ? 'selected' : ''} key={item.code} onClick={() => selectLanguage(item.code)} type="button">
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="icon-button theme-button" onClick={onTheme} type="button" aria-label="Toggle theme">
            <Icon name={theme === 'light' ? 'moon' : 'sun'} />
          </button>
        </div>
      </header>
    </>
  );
};
