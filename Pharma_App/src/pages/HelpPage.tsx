import { Icon } from '../components/Icon';
import type { Translation } from '../types';

export const HelpPage = ({ onContact, t }: { onContact: () => void; t: Translation }) => (
  <main className="page-section page-compact">
    <h1 className="mx-auto mb-8 text-center text-4xl font-extrabold tracking-normal text-[var(--text)] md:text-5xl">Help</h1>
    <section className="help-panel">
      <div>
        <h2>How can we support you?</h2>
        <p>
          Reach out for product availability, business partnerships, documentation, or general support. Our team will respond with the right product and company information.
        </p>
      </div>
      <button className="primary-button" onClick={onContact} type="button">
        {t.contactUs} <Icon name="arrow" />
      </button>
    </section>
  </main>
);
