import type { Translation } from '../types';

export const PageHero = ({ text, title, t }: { text: string; title: string; t: Translation }) => (
  <section className="page-hero">
    <p className="eyebrow">{t.pageHeroEyebrow}</p>
    <h1>{title}</h1>
    <p>{text}</p>
  </section>
);
