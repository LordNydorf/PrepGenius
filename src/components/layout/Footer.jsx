import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-color)',
        padding: '3.5rem 0 2rem 0',
        marginTop: 'auto'
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Column 1: Brand */}
          <div style={{ maxWidth: '300px' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                marginBottom: '0.85rem'
              }}
            >
              <img src="/favicon.svg" alt="PrepGenius" style={{ height: '28px', width: '28px' }} />
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                PrepGenius
              </span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              A comprehensive learning platform for competitive exams like CAT, GATE, GRE, GMAT, and IELTS with study materials, sample papers, and interactive quizzes.
            </p>
          </div>

          {/* Column 2: Competitive Exams */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Competitive Exams
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
              <li>
                <Link to="/subjects/cat" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  CAT Preparation
                </Link>
              </li>
              <li>
                <Link to="/subjects/gate" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  GATE Preparation
                </Link>
              </li>
              <li>
                <Link to="/subjects/gre" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  GRE Preparation
                </Link>
              </li>
              <li>
                <Link to="/sample-papers" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Sample Papers (2018–2023)
                </Link>
              </li>
              <li>
                <Link to="/quiz" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Daily Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Computer Courses */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Computer Courses
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
              <li>
                <Link to="/subjects/computer-courses#data" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Data Structures
                </Link>
              </li>
              <li>
                <Link to="/subjects/computer-courses#algo" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Algorithms
                </Link>
              </li>
              <li>
                <Link to="/subjects/computer-courses#cpp" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  C / C++ Programming
                </Link>
              </li>
              <li>
                <Link to="/subjects/computer-courses#java" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Java Programming
                </Link>
              </li>
              <li>
                <Link to="/subjects/computer-courses#python" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Python Core
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Jumps */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Platform Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
              <li>
                <Link to="/" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Login / Register
                </Link>
              </li>
              <li>
                <a href="#contactus_section" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <p>© {new Date().getFullYear()} PrepGenius. All rights reserved.</p>
          <p>A Comprehensive Learning Platform for Competitive Exams</p>
        </div>
      </div>
    </footer>
  );
};
