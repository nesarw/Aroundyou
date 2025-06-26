import React, { useState } from 'react';

const WhisperSendModal = () => {
  const [message, setMessage] = useState('');
  const maxWords = 40;

  const handleClose = () => {
    window.location.href = '/profile';
  };

  // Word count logic
  const getWordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;
  const handleChange = (e) => {
    const input = e.target.value;
    const words = input.trim().split(/\s+/).filter(Boolean);
    if (words.length <= maxWords) {
      setMessage(input);
    } else {
      setMessage(words.slice(0, maxWords).join(' '));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', minWidth: '100vw', position: 'fixed', top: 0, left: 0 }}>
      <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', padding: '32px 32px 24px', maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', position: 'relative' }}>
        {/* Header Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, marginTop: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L20 2L11 20L10 13L2 11Z" fill="#2563eb"/>
              </svg>
            </span>
            <span style={{ fontWeight: 800, fontSize: 22, color: '#222' }}>Send a Whisper</span>
          </div>
          {/* Close Icon */}
          <button onClick={handleClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: '#888', marginLeft: 12 }} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L16 16M16 6L6 16" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        {/* Divider */}
        <div style={{ borderBottom: '1.5px solid #f1f3f6', margin: '8px 0 18px' }} />
        {/* Title */}
        <div style={{ color: '#888', fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Your message</div>
        {/* Textarea */}
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="What's on your mind? (40 words max)"
          style={{ width: '100%', minHeight: 130, background: '#f1f3f6', border: '1.5px solid #e5e7eb', borderRadius: 10, padding: 14, color: '#222', fontSize: 16, marginBottom: 6, resize: 'none', outline: 'none' }}
        />
        <div style={{ textAlign: 'right', color: '#888', fontSize: 13, marginBottom: 18 }}>{getWordCount(message)}/{maxWords} words</div>
        {/* Buttons */}
        <div style={{ display: 'flex', gap: 12, width: '100%', justifyContent: 'flex-end' }}>
          <button
            onClick={handleClose}
            style={{
              flex: 1,
              padding: '13px 0',
              border: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              background: '#f1f3f6',
              color: '#222',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            Discard
          </button>
          <button
            style={{
              flex: 1,
              padding: '13px 0',
              border: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'background 0.2s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9L16 3L10 17L9 11L2 9Z" fill="#fff"/>
            </svg>
            Send Whisper
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhisperSendModal; 