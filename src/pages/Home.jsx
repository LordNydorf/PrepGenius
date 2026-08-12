import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Flame, Award, Users, Code, CheckCircle2, 
  Play, Search, ChevronRight, MessageSquare, Send, Zap, FileText, HelpCircle, Check
} from 'lucide-react';
import { popularCourses, platformStats, servicesData, aboutText } from '../data/coursesData';
import { useStreak } from '../context/StreakContext';

export const Home = () => {
  const { streakCount, checkedInToday, claimDailyCheckIn } = useStreak();
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.email && contactForm.name) {
      setContactSubmitted(true);
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setContactSubmitted(false), 5000);
    }
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section
        style={{
          padding: '4.5rem 0 3.5rem 0',
          background: 'var(--bg-main)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
              gap: '3rem'
            }}
          >
            {/* Left Hero Content */}
            <div>
              <div className="section-badge">
                Competitive Exam Preparation
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.025em'
                }}
              >
                A Comprehensive Learning Platform for Competitive Exams
              </h1>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  lineHeight: 1.65
                }}
              >
                PrepGenius is designed to provide personalized and engaging learning experiences for students preparing for various competitive exams like <strong>GRE, IELTS, CAT, GMAT, and GATE</strong>. The platform offers interactive quizzes, study materials, and mock tests tailored to individual needs.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link to="/subjects/cat" className="btn btn-primary">
                  Explore Subjects <ArrowRight size={16} />
                </Link>
                <Link to="/quiz" className="btn btn-outline">
                  <HelpCircle size={16} /> Daily Quiz
                </Link>
                <Link to="/sample-papers" className="btn btn-outline">
                  <FileText size={16} /> CAT Solved Papers
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div>
              <div
                className="clean-card"
                style={{
                  padding: '2rem',
                  background: 'var(--bg-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <img src="/favicon.svg" alt="PrepGenius" style={{ width: '28px', height: '28px' }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Quick Access Portals</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Link
                    to="/subjects/cat"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      textDecoration: 'none'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>CAT Exam Preparation</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quantitative Aptitude, VARC & DILR</div>
                    </div>
                    <ChevronRight size={16} color="var(--text-muted)" />
                  </Link>

                  <Link
                    to="/subjects/gate"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      textDecoration: 'none'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>GATE Examination</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>CSE, ECE, Mechanical syllabus & videos</div>
                    </div>
                    <ChevronRight size={16} color="var(--text-muted)" />
                  </Link>

                  <Link
                    to="/subjects/gre"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      textDecoration: 'none'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>GRE Preparation</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quant, Verbal & Vocabulary builder</div>
                    </div>
                    <ChevronRight size={16} color="var(--text-muted)" />
                  </Link>

                  <Link
                    to="/sample-papers"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      textDecoration: 'none'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>CAT Sample Papers (2018–2023)</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official solved PDFs with answer keys</div>
                    </div>
                    <ChevronRight size={16} color="var(--text-muted)" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STREAKS OF LEARNING */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Streaks of Learning</h2>
            <p className="section-subtitle">
              Build consistent daily study habits to reach your target percentiles.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            <div className="clean-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>
                5 Days
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Continuous Learning
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Establish your daily preparation routine.
              </p>
            </div>

            <div className="clean-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '0.25rem' }}>
                10 Days
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Persistent Effort
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Deepen concept retention and problem solving speed.
              </p>
            </div>

            <div className="clean-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-green)', marginBottom: '0.25rem' }}>
                20 Days
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Unstoppable
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Mastery across full syllabus topics and mock papers.
              </p>
            </div>
          </div>

          {/* Interactive Check-in Status */}
          <div
            className="clean-card"
            style={{
              padding: '1.5rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Flame size={24} color="#D97706" fill="#D97706" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                  Current Streak: {streakCount} Days
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {checkedInToday ? "You have completed your daily check-in for today." : "Check in today to keep your streak active."}
                </div>
              </div>
            </div>

            {checkedInToday ? (
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Check size={16} /> Checked In Today
              </span>
            ) : (
              <button onClick={claimDailyCheckIn} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
                Daily Check-in
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. POPULAR SUBJECTS */}
      <section className="section-padding" id="portfolio_section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Popular Subjects on PrepGenius</h2>
            <p className="section-subtitle">
              Choose your exam or engineering track to start learning.
            </p>
          </div>

          <div className="grid-3">
            {popularCourses.map((c) => (
              <div
                key={c.id}
                className="clean-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <img
                      src={c.icon}
                      alt={c.title}
                      style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                      onError={(e) => { e.currentTarget.src = '/favicon.svg'; }}
                    />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{c.title}</h3>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {c.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                    {c.topics.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                  <Link
                    to={c.path}
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}
                  >
                    Open Track <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section className="section-padding" id="about_section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-container">
          <div
            className="clean-card"
            style={{
              padding: '2.5rem',
              maxWidth: '900px',
              margin: '0 auto',
              background: 'var(--bg-card)'
            }}
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>About PrepGenius</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-line', marginBottom: '1.75rem' }}>
              {aboutText.description}
            </p>

            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '8px',
                background: 'var(--bg-secondary)',
                borderLeft: '4px solid var(--primary)',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.6
              }}
            >
              {aboutText.quote}
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PORTFOLIO (REAL STATISTICS) */}
      <section className="section-padding">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-subtitle">
              We're increasing this data every year
            </p>
          </div>

          <div className="grid-4">
            {platformStats.map((stat, idx) => (
              <div
                key={idx}
                className="clean-card"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    marginBottom: '0.25rem'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES */}
      <section className="section-padding" id="services_section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              Core learning tools and resources provided on the PrepGenius platform.
            </p>
          </div>

          <div className="grid-4">
            {servicesData.map((svc) => (
              <Link
                key={svc.id}
                to={svc.path}
                className="clean-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  textDecoration: 'none'
                }}
              >
                <img
                  src={svc.icon}
                  alt={svc.title}
                  style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                  onError={(e) => { e.currentTarget.src = '/favicon.svg'; }}
                />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT US */}
      <section className="section-padding" id="contactus_section">
        <div className="section-container">
          <div
            className="clean-card"
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: '2.5rem'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Contact PrepGenius
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Send us your questions or feedback regarding courses and sample papers.
              </p>
            </div>

            {contactSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: 'var(--accent-green)'
                }}
              >
                <CheckCircle2 size={36} style={{ margin: '0 auto 0.75rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Message Sent
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Thank you for contacting us. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
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
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
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
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject of your message"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
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
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your inquiry or feedback..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
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
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', padding: '0.65rem 1.75rem' }}
                >
                  <Send size={15} /> Submit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
