import type { FormEvent } from 'react';
import { Icon } from '../components/Icon';
import type { Translation } from '../types';

export const ContactPage = ({ onSubmit, submitted, t }: { onSubmit: (event: FormEvent<HTMLFormElement>) => void; submitted: boolean; t: Translation }) => (
  <main className="page-section page-compact">
    <h1 className="mx-auto mb-8 text-center text-4xl font-extrabold tracking-normal text-[var(--text)] md:text-5xl">{t.contactPageTitle}</h1>
    <section className="contact-grid">
      <form className="contact-form reveal" onSubmit={onSubmit}>
        {t.formLabels.map((label) => (
          <label className="field" key={label}>
            {label === t.formLabels[3] ? <textarea required rows={5} /> : <input required type={label === t.formLabels[1] ? 'email' : 'text'} />}
            <span>{label}</span>
          </label>
        ))}
        <button className="primary-button" type="submit">{t.submitInquiry} <Icon name="arrow" /></button>
        {submitted && <p className="success-message">{t.successMessage}</p>}
      </form>
      <div className="contact-card reveal delay-a">
        <h3>Sukhaya Pharmaceutical Pvt. Ltd.</h3>
        <p>123, Pharma City, Pune - 411028</p>
        <p>+91 860 315 9426</p>
        <p>info@sukhayapharma.com</p>
        <div className="map-card">{t.mapLabel}</div>
      </div>
    </section>
  </main>
);
