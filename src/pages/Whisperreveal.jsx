import React, { useEffect, useState } from 'react';

const DUMMY_WHISPER = {
  user: {
    name: 'Anonymous',
    photo: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Anonymous',
  },
  message:
    'Hey there! I saw you at the coffee shop earlier and thought you had a great style. Just wanted to say hi! Hope you have a wonderful day ahead. Maybe we can catch up sometime soon if you are interested. Stay awesome!',
};

const pad = (num) => String(num).padStart(2, '0');

const FlipClock = ({ seconds }) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: '24px 0 8px' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="flip-clock" style={{ background: '#f1f3f6', borderRadius: 12, padding: '12px 18px', fontSize: 32, fontWeight: 700, color: '#222', boxShadow: '0 2px 8px #e5e7eb' }}>{pad(mins)}</div>
        <div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>Minutes</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div className="flip-clock" style={{ background: '#f1f3f6', borderRadius: 12, padding: '12px 18px', fontSize: 32, fontWeight: 700, color: '#222', boxShadow: '0 2px 8px #e5e7eb' }}>{pad(secs)}</div>
        <div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>Seconds</div>
      </div>
    </div>
  );
};

const Whisperreveal = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f7fb' }}>
      <div style={{ background: '#fff', borderRadius: 32, boxShadow: '0 4px 32px rgba(0,0,0,0.08)', padding: '40px 32px', maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header */}
        <div style={{ fontWeight: 800, fontSize: 28, color: '#222', textAlign: 'center', marginBottom: 8 }}>You have a new Whisper!</div>
        {/* Subheader */}
        <div style={{ color: '#888', fontSize: 16, textAlign: 'center', marginBottom: 28 }}>
          A new Whisper has arrived. Read it now, as it will disappear in <span style={{ color: '#3b82f6', fontWeight: 600 }}>{seconds} seconds</span>.
        </div>
        {/* Whisper Message Card */}
        <div style={{ border: '1.5px solid #e5e7eb', borderRadius: 18, background: '#f8f9fb', padding: 20, width: '100%', marginBottom: 24, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <img src={DUMMY_WHISPER.user.photo} alt="User" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e5e7eb' }} />
          <div>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 4 }}>{DUMMY_WHISPER.user.name}</div>
            <div style={{ color: '#444', background: '#ececec', borderRadius: 10, padding: '10px 14px', fontSize: 15, fontWeight: 500 }}>{DUMMY_WHISPER.message}</div>
          </div>
        </div>
        {/* Flip Clock Timer */}
        <FlipClock seconds={seconds} />
        {/* Close Whisper Button */}
        <button
          onClick={() => window.location.href = '/profile'}
          style={{
            marginTop: 8,
            width: '100%',
            padding: '14px 0',
            border: 'none',
            borderRadius: 16,
            fontWeight: 700,
            fontSize: 17,
            background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
            color: '#fff',
            boxShadow: '0 2px 8px rgba(255,75,43,0.08)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          Close Whisper
        </button>
        {/* Footer Subheader */}
        <div style={{ color: '#888', fontSize: 15, textAlign: 'center', marginTop: 18 }}>
          This Whisper will automatically close when the timer ends. You can also close it manually.
        </div>
      </div>
    </div>
  );
};

export default Whisperreveal; 