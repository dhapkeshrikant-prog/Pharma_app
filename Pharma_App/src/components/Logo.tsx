export const Logo = ({ onClick }: { onClick?: () => void }) => (
  <button className="brand-lockup" onClick={onClick} type="button" aria-label="SUKHAYA home">
    <img src="/logo.png" alt="SUKHAYA - Committed to Health Care" className="brand-logo-img" />
    <span className="brand-text-group">
      <span className="brand-name">SUKHAYA</span>
      <span className="brand-tagline">Committed to Health Care</span>
    </span>
  </button>
);
