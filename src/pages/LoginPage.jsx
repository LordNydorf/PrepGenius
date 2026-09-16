import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, ShieldCheck, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    username: user?.username || '',
    email: user?.email || '',
    targetExam: user?.targetExam || 'CAT 2026'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = formData.username.trim() || (formData.email ? formData.email.split('@')[0] : 'PrepScholar');
    const fullName = formData.fullName.trim() || username;
    const email = formData.email.trim() || `${username.toLowerCase()}@prepgenius.local`;

    login({
      username,
      fullName,
      email,
      targetExam: formData.targetExam
    });

    navigate('/dashboard');
  };

  const handleGuestLogin = () => {
    login({
      username: 'Guest Scholar',
      email: 'guest@prepgenius.local',
      fullName: 'Guest Scholar',
      targetExam: 'CAT & GATE'
    });
    navigate('/dashboard');
  };

  const examOptions = [
    'CAT 2026',
    'GATE CS 2026',
    'GATE ECE 2026',
    'JEE Advanced',
    'NEET UG',
    'UPSC Civil Services',
    'Placement & Coding',
    'General Studies'
  ];

  return (
    <div
      style={{
        padding: '3.5rem 1.5rem',
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-main)'
      }}
    >
      <div
        className="clean-card"
        style={{
          width: '100%',
          maxWidth: '460px',
          padding: '2.25rem',
          background: 'var(--bg-card)',
          borderRadius: '12px'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <img src="/favicon.svg" alt="PrepGenius" style={{ height: '32px', width: '32px' }} />
            <span
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}
            >
              PrepGenius
            </span>
          </Link>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            {user ? 'Update Student Profile' : 'Student Profile Setup'}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Set up your learning profile to personalize your dashboard and study goals.
          </p>
        </div>

        {/* Transparent Privacy & Security Notice */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.65rem',
            padding: '0.75rem 0.85rem',
            borderRadius: '8px',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            marginBottom: '1.5rem'
          }}
        >
          <ShieldCheck size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
            <strong>Local &amp; Private:</strong> PrepGenius operates entirely client-side. No passwords or server accounts needed—your bookmarks and quiz streaks stay right in your browser.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Alex Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.9rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
              Username or Handle
            </label>
            <input
              type="text"
              placeholder="e.g. prep_scholar"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.9rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
              Target Examination
            </label>
            <select
              value={formData.targetExam}
              onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.9rem',
                fontFamily: 'inherit',
                cursor: 'pointer'
              }}
            >
              {examOptions.map((exam) => (
                <option key={exam} value={exam}>
                  {exam}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 600
            }}
          >
            <span>{user ? 'Save Profile' : 'Enter Dashboard'}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div style={{ textAlign: 'center', margin: '1.25rem 0', position: 'relative' }}>
          <div style={{ height: '1px', background: 'var(--border-color)' }} />
          <span
            style={{
              position: 'absolute',
              top: '-9px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--bg-card)',
              padding: '0 0.5rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}
          >
            or
          </span>
        </div>

        <button
          type="button"
          onClick={handleGuestLogin}
          className="btn btn-outline"
          style={{ width: '100%', padding: '0.65rem', fontSize: '0.85rem' }}
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
};
