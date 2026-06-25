import { PageHero } from '../components/PageHero';
import { Stats } from '../components/Stats';
import type { Translation } from '../types';

export const AboutPage = ({ t }: { t: Translation }) => (
  <main>
    <PageHero title={t.aboutPageTitle} text={t.aboutPageText} t={t} />
    <section className="page-section about-grid">
      {t.aboutSections.map((item, index) => (
        <article className="info-card reveal" key={item}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{item}</h3>
          <p>{t.aboutSectionText}</p>
        </article>
      ))}
    </section>
    <section className="page-section about-preview reveal">
      <div className="building-card large">
        <div className="building-sky" />
        <div className="building"><span>SUKHAYA</span></div>
      </div>
      <Stats t={t} />
    </section>
  </main>
);
