export const Logo = ({ onClick }: { onClick?: () => void }) => (
  <button className="brand-lockup" onClick={onClick} type="button" aria-label="SUKHAYA home">
    <img src="/sukhaya-logo.svg" alt="SUKHAYA - Committed to Health Care" />
  </button>
);
