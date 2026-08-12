import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Flame, Zap, Award, Bookmark, FileText, 
  RotateCcw, ArrowRight, Download, LogOut 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStreak } from '../context/StreakContext';

export const DashboardPage = () => {
  const { user, logout, bookmarks, quizHistory } = useAuth();
  const { streakCount, totalXP, milestones } = useStreak();

  if (!user) {
    return (
      <div className="section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="clean-card" style={{ padding: '2.5rem', maxWidth: '480px' }}>
          <User size={36} color="var(--primary)" style={{ margin: '0 auto 0.75rem auto' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Student Dashboard
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Sign in to track your learning streaks, review quiz scores, and view saved question papers.
          </p>
          <Link to="/login" className="btn btn-primary">
            Sign In or Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page" style={{ padding: '3rem 0 5rem 0' }}>
      <div className="section-container">
        {/* Profile Card */}
        <div
          className="clean-card"
          style={{
            padding: '2rem',
            marginBottom: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '8px',
                background: 'var(--primary-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--primary-border)'
              }}
            >
              <User size={30} color="var(--primary)" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{user.fullName}</h1>
                <span
                  style={{
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--primary)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {user.targetExam}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {user.email}
              </p>
            </div>
          </div>

          {/* Stats pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Flame size={16} color="#D97706" fill="#D97706" />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>STREAK</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{streakCount} Days</div>
              </div>
            </div>

            <div
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Zap size={16} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>XP SCORE</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{totalXP} XP</div>
              </div>
            </div>

            <button onClick={logout} className="btn btn-outline" style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem' }}>
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        </div>

        {/* 2-Column Section: Milestones & Bookmarks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {/* Milestones */}
          <div className="clean-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={18} color="var(--primary)" /> Streak Milestones
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '6px',
                    background: m.unlocked ? 'var(--primary-subtle)' : 'var(--bg-secondary)',
                    border: m.unlocked ? '1px solid var(--primary-border)' : '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    opacity: m.unlocked ? 1 : 0.65
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{m.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.days} consecutive active days</div>
                  </div>
                  {m.unlocked ? (
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-green)' }}>Unlocked</span>
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>In progress</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bookmarks */}
          <div className="clean-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Bookmark size={18} color="var(--primary)" /> Saved Question Papers ({bookmarks.length})
            </h3>

            {bookmarks.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  No question papers bookmarked yet.
                </p>
                <Link to="/sample-papers" className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}>
                  Browse Papers
                </Link>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', maxHeight: '250px', overflowY: 'auto' }}>
                {bookmarks.map((paper) => (
                  <div
                    key={paper.id}
                    style={{
                      padding: '0.75rem 0.9rem',
                      borderRadius: '6px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{paper.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{paper.year} • {paper.slot}</div>
                    </div>
                    <a
                      href={paper.file}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="btn btn-primary"
                      style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem' }}
                    >
                      <Download size={12} /> PDF
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Quiz History */}
        <div className="clean-card" style={{ padding: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>
              Recent Quiz Attempts
            </h3>
            <Link to="/quiz" className="btn btn-primary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}>
              Take Quiz
            </Link>
          </div>

          {quizHistory.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No quiz attempts recorded yet.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {quizHistory.map((q, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '6px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      {q.categoryName}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {q.dateFormatted} • +{q.earnedXP} XP
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: q.percentage >= 60 ? 'var(--accent-green)' : 'var(--accent-red)' }}>
                      {q.score} / {q.total} ({q.percentage}%)
                    </div>
                    <Link
                      to={`/quiz?category=${q.categoryId}`}
                      className="btn btn-outline"
                      style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem' }}
                    >
                      <RotateCcw size={12} /> Retake
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
