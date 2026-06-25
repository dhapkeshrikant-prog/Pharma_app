import type { Translation } from '../types';
import { Icon } from './Icon';

export const CtaBanner = ({ onContact, t }: { onContact: () => void; t: Translation }) => (
  <section className="cta-banner reveal">
    <div>
      <p className="eyebrow">{t.ctaEyebrow}</p>
      <h2>{t.ctaTitle}</h2>
    </div>
    <button className="primary-button" onClick={onContact} type="button">{t.contactUs} <Icon name="arrow" /></button>
  </section>
);
