import type { Translation } from '../types';

export const Stats = ({ t }: { t: Translation }) => (
  <div className="stats-panel">
    {t.stats.map(([value, label]) => (
      <div className="stat" key={label}>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    ))}
  </div>
);
