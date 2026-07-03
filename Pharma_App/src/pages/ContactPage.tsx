import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import type { Translation } from '../types';

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Address',
    value: '123, Pharma City, Pune – 411028, Maharashtra',
    href: 'https://maps.google.com/?q=Pune+Maharashtra',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.88 19.79 19.79 0 0 1 1.06 3.24 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 860 315 9426',
    href: 'tel:+918603159426',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'info@sukhayapharma.com',
    href: 'mailto:info@sukhayapharma.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    href: null,
  },
];

export const ContactPage = ({
  onSubmit,
  submitted,
  t,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitted: boolean;
  t: Translation;
}) => (
  <main className="max-w-[1480px] mx-auto px-6 py-16 lg:py-24 min-h-screen">
    {/* Page Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-3">
        Get In Touch
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
        {t.contactPageTitle}
      </h1>
      <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
        {t.contactPageText}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
      {/* Left: Form */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-7">Send Us a Message</h2>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-5">
              {t.formLabels.map((label, index) => {
                const inputName =
                  index === 0 ? 'name' : index === 1 ? 'email' : index === 2 ? 'phone' : 'message';
                return (
                  <label className="block" key={label}>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 block">{label}</span>
                    {index === 3 ? (
                      <textarea
                        required
                        rows={5}
                        name={inputName}
                        placeholder={`Enter your ${label.toLowerCase()}`}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all dark:text-white resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm"
                      />
                    ) : (
                      <input
                        required
                        type={index === 1 ? 'email' : index === 2 ? 'tel' : 'text'}
                        name={inputName}
                        placeholder={`Enter your ${label.toLowerCase()}`}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm"
                      />
                    )}
                  </label>
                );
              })}
            </div>

            <button
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-sky-600/20 transform hover:-translate-y-1"
              type="submit"
            >
              {t.submitInquiry} <Icon name="arrow" />
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-5 flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </div>
                <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm">{t.successMessage}</p>
              </motion.div>
            )}
          </form>
        </div>

        {/* WhatsApp CTA */}
        <motion.a
          href="https://wa.me/918603159426"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-4 flex items-center gap-4 p-5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors group"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-emerald-700 dark:text-emerald-400">Chat on WhatsApp</p>
            <p className="text-sm text-emerald-600 dark:text-emerald-500">Quick replies during business hours</p>
          </div>
          <svg className="ml-auto text-emerald-500 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Right: Info + Map */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-6"
      >
        {/* Company Info */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Sukhaya Pharmaceutical Pvt. Ltd.</h2>

          <div className="flex flex-col gap-5">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-200 font-medium hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-700 dark:text-slate-200 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl flex-1 min-h-[280px] relative">
          <iframe
            title="Sukhaya Pharmaceutical Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242120.67088878086!2d73.72283865625!3d18.524564499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '280px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Overlay CTA */}
          <a
            href="https://maps.google.com/?q=Pune+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 font-bold text-sm rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-sky-900/40 transition-colors whitespace-nowrap"
          >
            Open in Google Maps →
          </a>
        </div>
      </motion.div>
    </div>
  </main>
);
