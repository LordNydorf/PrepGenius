import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, User, ChevronDown, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { SearchBar } from '../common/SearchBar';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subjectsDropdown, setSubjectsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSubjectsDropdown(false);
  }, [location.pathname]);

  const subjectLinks = [
    { name: 'CAT Preparation', path: '/subjects/cat' },
    { name: 'GATE Preparation', path: '/subjects/gate' },
    { name: 'GRE Preparation', path: '/subjects/gre' },
    { name: 'Computer Courses', path: '/subjects/computer-courses' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        background: isScrolled ? 'var(--navbar-bg)' : 'var(--bg-main)',
        borderBottom: '1px solid var(--border-color)',
        transition: 'background 0.2s ease',
        height: '64px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        className="section-container"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        {/* Left: Brand Logo & Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <img
              src="/favicon.svg"
              alt="PrepGenius"
              style={{ width: '28px', height: '28px', borderRadius: '6px' }}
            />
            <span
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap'
              }}
            >
              PrepGenius
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.5rem'
            }}
            className="desktop-nav-links"
          >
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              })}
            >
              Home
            </NavLink>

            {/* Subjects Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setSubjectsDropdown(true)}
              onMouseLeave={() => setSubjectsDropdown(false)}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  background: 'transparent',
                  border: 'none',
                  color: location.pathname.startsWith('/subjects') ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: location.pathname.startsWith('/subjects') ? 600 : 500,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>Subjects</span>
                <ChevronDown size={13} style={{ transform: subjectsDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }} />
              </button>

              {subjectsDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '200px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    boxShadow: 'var(--shadow-md)',
                    padding: '0.35rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.15rem',
                    zIndex: 1000
                  }}
                >
                  {subjectLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      style={{
                        padding: '0.5rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-secondary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/sample-papers"
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              })}
            >
              Sample Papers
            </NavLink>

            <NavLink
              to="/quiz"
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              })}
            >
              Daily Quiz
            </NavLink>

            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              })}
            >
              Dashboard
            </NavLink>
          </nav>
        </div>

        {/* Right Side: Search, Theme Toggle, Auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="desktop-search-wrapper" style={{ display: 'none' }}>
            <SearchBar />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} color="#D97706" />}
          </button>

          {/* Auth Button */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link
                to="/dashboard"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '6px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  whiteSpace: 'nowrap'
                }}
              >
                <User size={13} color="var(--text-muted)" />
                <span>{user.username}</span>
              </Link>
              <button
                onClick={logout}
                title="Sign Out"
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  padding: '0.35rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary"
              style={{
                padding: '0.4rem 0.9rem',
                fontSize: '0.825rem',
                fontWeight: 600,
                borderRadius: '6px',
                whiteSpace: 'nowrap'
              }}
            >
              Sign In
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="mobile-nav-toggle"
            style={{
              display: 'flex',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.3rem',
              alignItems: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg-card)',
            zIndex: 850,
            padding: '1.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          <SearchBar isMobile={true} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <NavLink
              to="/"
              end
              style={{ fontSize: '0.95rem', fontWeight: 600, padding: '0.5rem 0', color: 'var(--text-primary)' }}
            >
              Home
            </NavLink>

            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginTop: '0.35rem' }}>
              Subjects
            </div>
            {subjectLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  background: 'var(--bg-secondary)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)'
                }}
              >
                {item.name}
              </Link>
            ))}

            <NavLink
              to="/sample-papers"
              style={{ fontSize: '0.95rem', fontWeight: 600, padding: '0.5rem 0', color: 'var(--text-primary)', marginTop: '0.35rem' }}
            >
              Sample Papers
            </NavLink>

            <NavLink
              to="/quiz"
              style={{ fontSize: '0.95rem', fontWeight: 600, padding: '0.5rem 0', color: 'var(--text-primary)' }}
            >
              Daily Quiz
            </NavLink>

            <NavLink
              to="/dashboard"
              style={{ fontSize: '0.95rem', fontWeight: 600, padding: '0.5rem 0', color: 'var(--text-primary)' }}
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      )}

      {/* Responsive Media Query */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav-links {
            display: flex !important;
          }
          .desktop-search-wrapper {
            display: block !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
