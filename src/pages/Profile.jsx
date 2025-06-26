import React, { useState } from 'react';

const initialProfile = {
  photo: '', // Placeholder, replace with actual photo logic
  name: 'Sophia Carter',
  email: 'sophia_carter@email.com',
  bio: '',
  interests: '',
  likes: '',
  dislikes: '',
  photoVisible: true,
};

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [passwords, setPasswords] = useState({ current: '', new: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'photoVisible') {
      setProfile((prev) => ({ ...prev, [name]: checked }));
    } else if (name in profile) {
      setProfile((prev) => ({ ...prev, [name]: value }));
    } else {
      setPasswords((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEditToggle = () => setEditMode((prev) => !prev);
  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
    // TODO: Save logic
  };
  const handleDelete = () => {
    // TODO: Delete account logic
    alert('Account deleted!');
  };
  const handlePhotoChange = () => {
    // TODO: Implement photo upload logic
    alert('Change profile photo clicked!');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f7fb' }}>
      <div className="container" style={{ padding: '32px 0', margin: '32px 0', borderRadius: 40, background: '#fff', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', maxWidth: 600 }}>
        {/* Profile Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24, padding: '0 48px' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={profile.photo || 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sophia'}
              alt="Profile"
              style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid #eee' }}
            />
            <button
              type="button"
              onClick={handlePhotoChange}
              style={{
                position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', fontSize: 10, padding: '2px 8px', borderRadius: 8, background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)', color: '#fff', border: 'none', cursor: 'pointer',
              }}
              disabled={!editMode}
            >
              Change
            </button>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#000' }}>{profile.name}</div>
            <div style={{ color: '#888', fontSize: 14 }}>{profile.email}</div>
          </div>
          <button type="button" className="ghost" onClick={handleEditToggle} style={{ minWidth: 120, background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)', color: '#fff', border: 'none', borderRadius: 20, padding: '8px 24px', fontWeight: 'bold', boxShadow: editMode ? '0 2px 8px rgba(255,75,43,0.08)' : 'none' }}>
            {editMode ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
        {/* Profile Details */}
        <form onSubmit={handleSave} style={{ padding: '0 48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <label style={{ textAlign: 'left', fontWeight: 600, color: '#000' }}>Bio
            </label>
            <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                disabled={!editMode}
                style={{ width: '100%', minWidth: 500, maxWidth: 400, minHeight: 48, background: '#eee', border: 'none', borderRadius: 10, padding: 15, marginTop: 1, color: '#000', resize: 'none' }}
              />
            <label style={{ textAlign: 'left', fontWeight: 600, color: '#000' }}>Interests
            </label>
            <textarea
                name="interests"
                value={profile.interests}
                onChange={handleChange}
                placeholder="What are your hobbies and interests?"
                disabled={!editMode}
                style={{ width: '100%', minWidth: 500, maxWidth: 400, minHeight: 48, background: '#eee', border: 'none', borderRadius: 10, padding: 12, marginTop: 1, color: '#000', resize: 'none' }}
              />
            <label style={{ textAlign: 'left', fontWeight: 600, color: '#000' }}>Likes
            </label>
            <textarea
                name="likes"
                value={profile.likes}
                onChange={handleChange}
                placeholder="Things you enjoy..."
                disabled={!editMode}
                style={{ width: '100%', minWidth: 500, maxWidth: 400, minHeight: 48, background: '#eee', border: 'none', borderRadius: 10, padding: 12, marginTop: 1, color: '#000', resize: 'none' }}
              />
            <label style={{ textAlign: 'left', fontWeight: 600, color: '#000' }}>Dislikes
            </label><textarea
                name="dislikes"
                value={profile.dislikes}
                onChange={handleChange}
                placeholder="Things you prefer to avoid..."
                disabled={!editMode}
                style={{ width: '100%', minWidth: 500, maxWidth: 400, minHeight: 48, background: '#eee', border: 'none', borderRadius: 10, padding: 12, marginTop: 1, color: '#000', resize: 'none' }}
              />
          </div>
          <button type="submit" style={{ marginTop: 24, width: '100%', background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)', color: '#fff', border: 'none', borderRadius: 20, padding: '12px 0', fontWeight: 'bold', fontSize: 16, boxShadow: '0 2px 8px rgba(255,75,43,0.08)' }} disabled={!editMode}>
            Save Changes
          </button>
        </form>
        {/* Account Settings */}
        <div style={{ borderTop: '1px solid #eee', margin: '32px 0 0', padding: '32px 48px 0' }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: '#000' }}>Account Settings</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handleChange}
              placeholder="Current Password"
              style={{ background: '#eee', border: 'none', borderRadius: 8, padding: 12 }}
            />
            <input
              type="password"
              name="new"
              value={passwords.new}
              onChange={handleChange}
              placeholder="Enter new password"
              style={{ background: '#eee', border: 'none', borderRadius: 8, padding: 12 }}
            />
            <button
              type="button"
              style={{ marginTop: 8, width: '100%', background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)', color: '#fff', border: 'none', borderRadius: 20, padding: '12px 0', fontWeight: 'bold', fontSize: 16, boxShadow: '0 2px 8px rgba(255,75,43,0.08)' }}
              onClick={() => alert('Password change confirmed!')}
            >
              Confirm Password Change
            </button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontWeight: 600, color: '#000', fontSize: 16, lineHeight: 1 }}>Photo Visibility</div>
                <div style={{ color: '#607080', fontSize: 15, marginTop: 2 }}>Toggle visibility of your profile photo and other photos.</div>
              </div>
              {/* Custom Switch Toggle */}
              <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', marginLeft: 16, position: 'relative' }}>
                <input
                  type="checkbox"
                  name="photoVisible"
                  checked={profile.photoVisible}
                  onChange={handleChange}
                  style={{ opacity: 0, width: 0, height: 0, position: 'absolute' }}
                />
                <span style={{
                  width: 48, height: 28, borderRadius: 20, background: profile.photoVisible ? '#2563eb' : '#ff4b2b', boxShadow: profile.photoVisible ? '0 2px 8px #2563eb' : '0 2px 8px #ff4b2b', display: 'inline-block', position: 'relative', transition: 'background 0.2s',
                }}>
                  <span style={{
                    position: 'absolute', left: profile.photoVisible ? 22 : 4, top: 4, width: 20, height: 20, borderRadius: '50%', background: '#fff', boxShadow: '0 2px 8px #d1d5db', transition: 'left 0.2s',
                  }} />
                </span>
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <button
                type="button"
                onClick={handleDelete}
                style={{ background: '#fff', color: '#ff4b2b', border: '1px solid #ff4b2b', borderRadius: 20, padding: '8px 24px', fontWeight: 'bold' }}
              >
                Delete Account
              </button>
              <button
                type="button"
                style={{ background: '#cdc8c7', color: '#000000 ', border: '1px solid #000000 ', borderRadius: 20, padding: '8px 24px', fontWeight: 'bold' }}
                onClick={() => alert('Logged out!')}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 