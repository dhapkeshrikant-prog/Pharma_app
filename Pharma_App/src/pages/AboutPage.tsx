import type { Translation } from '../types';

export const AboutPage = ({ t }: { t: Translation }) => (
  <main className="page-section page-compact">
    <h1 className="mx-auto mb-8 text-center text-4xl font-extrabold tracking-normal text-[var(--text)] md:text-5xl">About Us</h1>
    <section className="about-simple">
      <div className="about-simple-copy">
        <p>
          {t.aboutPageText}
        </p>
        <p>
          SUKHAYA Pharmaceutical focuses on dependable formulations, responsible distribution, and long-term value for healthcare partners. Our work is guided by careful quality practices, clear communication, and a commitment to making trusted medicines accessible.
        </p>
      </div>
      <figure className="about-image">
        <img
          src="https://images.unsplash.com/photo-1581093458791-9d42e3c5128f?auto=format&fit=crop&w=1200&q=80"
          alt="Modern pharmaceutical laboratory and quality workspace"
        />
      </figure>
    </section>
  </main>
);
