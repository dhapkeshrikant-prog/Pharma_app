import type { Translation } from '../types';

export const Stats = ({ t }: { t: Translation }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-1 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-sky-800 text-white shadow-2xl">
    {t.stats.map(([value, label], idx) => (
      <div className="p-8 text-center border-white/10 border-[0.5px]" key={label}>
        <strong className="block text-4xl lg:text-5xl font-black mb-2 tracking-tight">{value}</strong>
        <span className="text-sky-100 font-bold text-sm tracking-widest uppercase">{label}</span>
      </div>
    ))}
  </div>
);
