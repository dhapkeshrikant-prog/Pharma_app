type IconName = 'home' | 'about' | 'products' | 'contact' | 'globe' | 'moon' | 'sun' | 'arrow' | 'check' | 'search';

export const Icon = ({ name }: { name: IconName }) => {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
    about: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    products: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="3" /><circle cx="19" cy="6" r="3" /><circle cx="5" cy="18" r="3" /><circle cx="19" cy="18" r="3" /></>,
    contact: <><path d="M5 4h10l4 4v12H5z" /><path d="M15 4v5h5" /><path d="M8 14h8" /><path d="M8 17h5" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20" /><path d="M12 2a15 15 0 0 0 0 20" /></>,
    moon: <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" /></>,
  };

  return <svg aria-hidden="true" {...common}>{paths[name]}</svg>;
};
