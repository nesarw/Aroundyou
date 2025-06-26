import React from 'react';

const PhotoRevealModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', minWidth: '100vw', position: 'fixed', top: 0, left: 0 }}>
      <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', padding: '40px 32px 24px', maxWidth: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Eye Icon */}
        <div style={{ marginBottom: 18 }}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="19" cy="19" rx="19" ry="19" fill="#f1f3f6"/>
            <path d="M19 13C15 13 11.73 15.11 10 18.5C11.73 21.89 15 24 19 24C23 24 26.27 21.89 28 18.5C26.27 15.11 23 13 19 13Z" stroke="#2563eb" strokeWidth="2"/>
            <circle cx="19" cy="18.5" r="2.5" fill="#2563eb"/>
          </svg>
        </div>
        {/* Header */}
        <div style={{ fontWeight: 800, fontSize: 26, color: '#222', textAlign: 'center', marginBottom: 10 }}>Reveal Your Photo?</div>
        {/* Subheader */}
        <div style={{ color: '#888', fontSize: 16, textAlign: 'center', marginBottom: 28, maxWidth: 320 }}>
          You've got a new match! Would you like to reveal your real photo to them? This action is mutual.
        </div>
        {/* Buttons */}
        <div style={{ display: 'flex', gap: 16, width: '100%', justifyContent: 'center', marginBottom: 8 }}>
          <button
            style={{
              flex: 1,
              padding: '14px 0',
              border: 'none',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 16,
              background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
              color: '#fff',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            Yes, Reveal
          </button>
          <button
            style={{
              flex: 1,
              padding: '14px 0',
              border: 'none',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 16,
              background: '#f1f3f6',
              color: '#222',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            Not Yet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoRevealModal; 