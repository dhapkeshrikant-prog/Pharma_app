import { useState } from 'react';
import type { Product } from '../types';

export const ProductVisual = ({ product, compact = false }: { product: Product; compact?: boolean }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(product.image && !imageFailed);

  return (
    <div className={`product-pack ${compact ? 'compact' : ''} ${showImage ? 'has-image' : ''}`} style={{ '--pack-color': product.color, '--pack-accent': product.accent } as React.CSSProperties}>
      {showImage ? (
        <img src={product.image} alt={product.imageAlt ?? product.name} onError={() => setImageFailed(true)} />
      ) : (
        <>
          <span className="pack-shine" />
          <span className="pack-capsules"><i /><i /><i /></span>
          <strong>{product.name}</strong>
          <small>{product.composition}</small>
        </>
      )}
    </div>
  );
};
