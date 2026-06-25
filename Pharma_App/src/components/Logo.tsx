export const Logo = ({ onClick }: { onClick?: () => void }) => (
  <button className="brand-lockup" onClick={onClick} type="button" aria-label="SUKHAYA home">
    <span className="brand-mark"><span /></span>
    <span>
      <strong>SUKHAYA</strong>
      <small>Committed to Health Care</small>
    </span>
  </button>
);
