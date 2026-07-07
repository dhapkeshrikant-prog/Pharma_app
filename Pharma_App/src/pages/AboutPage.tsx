import { motion } from 'framer-motion';
import type { Translation } from '../types';

const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

const milestones = [
  { year: '2009', title: 'Founded', desc: 'Sukhaya Pharmaceutical Pvt. Ltd. was established with a vision of accessible, quality healthcare.' },
  { year: '2013', title: 'WHO-GMP Certified', desc: 'Achieved WHO-GMP certification, reflecting our commitment to international quality standards.' },
  { year: '2017', title: '100+ Products', desc: 'Expanded product portfolio to over 100 formulations across multiple therapeutic categories.' },
  { year: '2021', title: 'Pan-India Reach', desc: 'Distribution network expanded to cover healthcare partners across all major states.' },
  { year: '2024', title: '500+ Partners', desc: 'Trusted by 500+ business partners, doctors, and distributors across the country.' },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Quality First',
    desc: 'Every product undergoes rigorous testing and quality assurance to meet WHO-GMP standards and patient safety requirements.',
    color: 'sky',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="10" />
        <path d="m8 12 3 3 5-6" />
      </svg>
    ),
    title: 'Ethical Practice',
    desc: 'We uphold transparency, ethical business conduct, and long-term partnerships built on mutual trust and integrity.',
    color: 'emerald',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Patient Centered',
    desc: 'From formulation to packaging, every decision is guided by the goal of improving health outcomes for patients.',
    color: 'violet',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'We continuously invest in research-backed formulations and modern pharmaceutical technology to stay at the forefront of healthcare.',
    color: 'orange',
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  sky: { bg: 'bg-sky-50 dark:bg-sky-900/30', text: 'text-sky-600 dark:text-sky-400', ring: 'ring-sky-200 dark:ring-sky-800' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', ring: 'ring-emerald-200 dark:ring-emerald-800' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400', ring: 'ring-violet-200 dark:ring-violet-800' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', ring: 'ring-orange-200 dark:ring-orange-800' },
};

const certifications = [
  { label: 'WHO-GMP', desc: 'World Health Organization Good Manufacturing Practice' },
  { label: 'ISO 9001', desc: 'Quality Management System Certification' },
  { label: 'Drug License', desc: 'Central & State Drug Licensing Authority Approved' },
  { label: 'FSSAI', desc: 'Food Safety and Standards Authority of India' },
];

export const AboutPage = ({ t }: { t: Translation }) => (
  <main className="w-full">

    {/* Page Hero */}
    <section className="max-w-[1480px] mx-auto px-6 pt-16 lg:pt-24 pb-12">
      <FadeUp>
        <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-3">
          {t.pageHeroEyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
          About <span className="text-sky-500">Sukhaya</span> Pharmaceutical
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {t.aboutPageText}
        </p>
      </FadeUp>
    </section>

    {/* Introduction + Image */}
    <section className="max-w-[1480px] mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeUp delay={0.1} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          <p className="mb-6 text-xl text-slate-800 dark:text-slate-200 font-semibold">
            Building a healthier nation through trusted pharmaceutical care.
          </p>
          <p className="mb-5">
            SUKHAYA Pharmaceutical Pvt. Ltd. is a growing pharmaceutical company committed to delivering safe, effective, and affordable healthcare products. Founded on principles of quality and patient-first care, we serve healthcare professionals, distributors, and patients across India.
          </p>
          <p>
            Our comprehensive product range spans tablets, capsules, syrups, dry syrups, nutraceuticals, and specialty formulations — all manufactured in WHO-GMP certified facilities and backed by rigorous quality assurance protocols.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="text-center">
              <p className="text-4xl font-black text-sky-600 dark:text-sky-400">15+</p>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Years</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-sky-600 dark:text-sky-400">500+</p>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Products</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-sky-600 dark:text-sky-400">100+</p>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Partners</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-sky-600 dark:text-sky-400">1M+</p>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Patients</p>
            </div>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <figure className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 h-[420px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9d42e3c5128f?auto=format&fit=crop&w=1200&q=80"
              alt="Modern pharmaceutical laboratory and quality workspace"
              className="w-full h-full object-cover"
            />
          </figure>
        </FadeUp>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="bg-gradient-to-br from-slate-50 to-sky-50/50 dark:from-slate-900 dark:to-slate-900/50 border-y border-slate-200 dark:border-slate-800 py-20">
      <div className="max-w-[1480px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Mission & Vision</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeUp delay={0.1}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-lg h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
              <div className="w-14 h-14 rounded-2xl bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                To provide high-quality, safe, and affordable pharmaceutical products that improve patient health outcomes — delivered with integrity, ethical practices, and unwavering commitment to healthcare standards.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-3xl p-8 lg:p-10 shadow-xl shadow-sky-600/20 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15 15 0 0 1 0 20" />
                  <path d="M12 2a15 15 0 0 0 0 20" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-sky-100 leading-relaxed text-lg">
                To be a nationally recognized, trusted pharmaceutical company known for innovation, consistent quality, and meaningful healthcare partnerships that make a lasting difference in the lives of patients across India.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="max-w-[1480px] mx-auto px-6 py-20">
      <FadeUp>
        <div className="text-center mb-14">
          <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-2">Our Principles</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Core Values</h2>
        </div>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => {
          const c = colorMap[v.color];
          return (
            <FadeUp key={v.title} delay={i * 0.08}>
              <div className={`group bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full`}>
                <div className={`w-14 h-14 rounded-2xl ${c.bg} ring-1 ${c.ring} flex items-center justify-center ${c.text} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{v.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>

    {false && (
    <>
    {/* Journey / Timeline */}
    <section className="bg-slate-900 dark:bg-slate-950 py-20">
      <div className="max-w-[1480px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-sky-400 font-bold tracking-widest uppercase text-sm mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Milestones That Define Us</h2>
          </div>
        </FadeUp>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-sky-600/50 to-transparent -translate-x-px" />
          <div className="flex flex-col gap-8">
            {milestones.map((m, i) => (
              <FadeUp key={m.year} delay={i * 0.1}>
                <div className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`flex-1 bg-slate-800 dark:bg-slate-900 rounded-2xl p-6 border border-slate-700 dark:border-slate-800 shadow-lg ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold tracking-wider mb-3 uppercase">{m.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                  {/* Center Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-5 h-5 rounded-full bg-sky-500 ring-4 ring-sky-500/30 ring-offset-2 ring-offset-slate-900 z-10" />
                  {/* Empty space for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="max-w-[1480px] mx-auto px-6 py-20">
      <FadeUp>
        <div className="text-center mb-14">
          <p className="text-sky-600 dark:text-sky-400 font-bold tracking-widest uppercase text-sm mb-2">Our Accreditations</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Certifications & Compliance</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Our operations are fully compliant with national and international regulatory standards, ensuring the highest levels of product safety and quality.
          </p>
        </div>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, i) => (
          <FadeUp key={cert.label} delay={i * 0.08}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 shadow-sm hover:shadow-lg hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 group hover:-translate-y-1 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-black tracking-tight">{cert.label.split(' ')[0]}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cert.label}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{cert.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>

    {/* Manufacturing */}
    <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="max-w-[1480px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-sky-200 font-bold tracking-widest uppercase text-sm mb-3">Our Facilities</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              State-of-the-Art Manufacturing Infrastructure
            </h2>
            <p className="text-sky-100 leading-relaxed text-lg mb-8">
              Our manufacturing facilities are equipped with modern technology, automated processes, and rigorous quality control systems — all operating under WHO-GMP guidelines to ensure every product meets the highest standards.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Advanced automated manufacturing lines',
                'In-house quality control & testing laboratory',
                'Cold-chain compliant storage and distribution',
                'ERP-driven batch tracking and traceability',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sky-100">
                  <svg className="w-5 h-5 text-sky-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <figure className="rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/50 h-[380px] border-2 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?auto=format&fit=crop&w=1200&q=80"
                alt="Pharmaceutical manufacturing facility"
                className="w-full h-full object-cover"
              />
            </figure>
          </FadeUp>
        </div>
      </div>
    </section>
    </>
    )}

  </main>
);
