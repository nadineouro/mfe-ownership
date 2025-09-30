import React from "react";

export function ProductImages({ images = [], name }: { images: string[]; name: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ width: '100%', aspectRatio: '1.2', background: '#f3f4f6', borderRadius: 12, overflow: 'hidden', display: 'flex', alignItems: 'stretch', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        {images[0] && (
          <img src={images[0]} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {images.slice(1).map((img, idx) => (
          <div key={idx} style={{ width: 60, height: 60, background: '#f3f4f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb' }}>
            {img && (
              <img src={img} alt={name + ' thumb'} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 8, objectFit: 'contain' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
