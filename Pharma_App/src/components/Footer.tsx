import type { Page, Translation } from '../types';
import { Logo } from './Logo';

const categories = ['Tablets', 'Capsules', 'Syrups', 'Dry Syrups'];

export const Footer = ({ onNavigate, t }: { onNavigate: (page: Page) => void; t: Translation }) => (
  <footer className="site-footer">
    <div>
      <Logo onClick={() => onNavigate('home')} />
      <p>{t.footerText}</p>
      <div className="social-row"><span>f</span><span>in</span><span>ig</span><span>yt</span></div>
    </div>
    <div>
      <h3>{t.quickLinks}</h3>
      <button onClick={() => onNavigate('home')} type="button">{t.nav.home}</button>
      <button onClick={() => onNavigate('about')} type="button">{t.nav.about}</button>
      <button onClick={() => onNavigate('products')} type="button">{t.nav.products}</button>
      <button onClick={() => onNavigate('contact')} type="button">{t.nav.contact}</button>
    </div>
    <div>
      <h3>{t.productCategories}</h3>
      {categories.map((item) => <span key={item}>{item}</span>)}
    </div>
    <div>
      <h3>{t.newsletter}</h3>
      <p>{t.newsletterText}</p>
      <div className="newsletter"><input placeholder="Enter your email" /><button type="button">{t.subscribe}</button></div>
    </div>
  </footer>
);
