type IconName = 'home' | 'about' | 'products' | 'contact' | 'help' | 'blog' | 'cart' | 'globe' | 'moon' | 'sun' | 'arrow' | 'check' | 'search' | 'maximize' | 'spark';

export const Icon = ({ name, className = '' }: { name: IconName; className?: string }) => {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
    about: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    products: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="3" /><circle cx="19" cy="6" r="3" /><circle cx="5" cy="18" r="3" /><circle cx="19" cy="18" r="3" /></>,
    contact: <><path d="M5 4h10l4 4v12H5z" /><path d="M15 4v5h5" /><path d="M8 14h8" /><path d="M8 17h5" /></>,
    help: <><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 1 1 4.6 2.5c-.9.6-1.7 1.2-1.7 2.5" /><path d="M12 18h.01" /></>,
    blog: <><path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5Z" /><path d="M8 7h6" /><path d="M8 11h6" /><path d="M8 15h4" /></>,
    cart: <><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H7" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20" /><path d="M12 2a15 15 0 0 0 0 20" /></>,
    moon: <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></>,
    arrow: <><path d="M9 18l6-6-6-6" /></>,
    check: <><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" /></>,
    maximize: <><rect x="3" y="3" width="18" height="18" rx="3" ry="3" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M8 21v-4" /><path d="M16 21v-4" /></>,
    spark: <><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93 8 8" /><path d="M16 16 19.07 19.07" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M6.34 17.66 8 16" /><path d="M19.07 4.93 16 8" /><circle cx="12" cy="12" r="3" /></>,
  };

  return <svg aria-hidden="true" className={className} {...common}>{paths[name]}</svg>;
};
