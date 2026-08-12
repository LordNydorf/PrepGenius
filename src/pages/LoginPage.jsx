import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    targetExam: 'CAT 2026',
    agreeTerms: false
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isRegister) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (!formData.agreeTerms) {
        setError('Please agree to the Terms & Conditions');
        return;
      }
      login({
        username: formData.username || formData.email.split('@')[0],
        email: formData.email,
        fullName: formData.fullName || formData.username,
        targetExam: formData.targetExam
      });
    } else {
      login({
        username: formData.username || 'PrepScholar',
        email: formData.email || 'student@prepgenius.edu',
        fullName: formData.fullName || 'Prep Scholar',
        targetExam: formData.targetExam
      });
    }

    navigate('/dashboard');
  };

  const handleGuestLogin = () => {
    login({
      username: 'Guest Scholar',
      email: 'guest@prepgenius.edu',
      fullName: 'Guest Scholar',
      targetExam: 'CAT & GATE'
    });
    navigate('/dashboard');
  };

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
          maxWidth: '440px',
          padding: '2.25rem',
          background: 'var(--bg-card)'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
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
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            {isRegister ? 'Create an Account' : 'Sign In'}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {isRegister ? 'Register to save quizzes and sample papers' : 'Sign in to access your dashboard and study streak'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div
          style={{
            display: 'flex',
            background: 'var(--bg-secondary)',
            padding: '0.25rem',
            borderRadius: '6px',
            marginBottom: '1.5rem'
          }}
        >
          <button
            type="button"
            onClick={() => { setIsRegister(false); setError(''); }}
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '4px',
              border: 'none',
              background: !isRegister ? 'var(--bg-card)' : 'transparent',
              color: !isRegister ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: !isRegister ? 'var(--shadow-sm)' : 'none'
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setIsRegister(true); setError(''); }}
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '4px',
              border: 'none',
              background: isRegister ? 'var(--bg-card)' : 'transparent',
              color: isRegister ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: isRegister ? 'var(--shadow-sm)' : 'none'
            }}
          >
            Register
          </button>
        </div>

        {error && (
          <div
            style={{
              padding: '0.65rem 0.85rem',
              borderRadius: '6px',
              background: 'rgba(220, 38, 38, 0.08)',
              color: 'var(--accent-red)',
              fontSize: '0.85rem',
              marginBottom: '1rem',
              fontWeight: 500
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {isRegister && (
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
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
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
              Username or Email
            </label>
            <input
              type="text"
              required
              placeholder="Username or email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value, username: e.target.value })}
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
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

          {isRegister && (
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                Confirm Password
              </label>
              <input
                type="password"
                required
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
          )}

          {isRegister && (
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer', marginTop: '0.25rem' }}>
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              />
              I agree to the Terms & Conditions
            </label>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}
          >
            {isRegister ? 'Register' : 'Sign In'}
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
