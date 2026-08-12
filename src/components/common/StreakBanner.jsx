import React, { useState } from 'react';
import { Flame, Award, Zap, CheckCircle2, Sparkles, Trophy } from 'lucide-react';
import { useStreak } from '../../context/StreakContext';

export const StreakBanner = () => {
  const { streakCount, totalXP, checkedInToday, milestones, history, claimDailyCheckIn } = useStreak();
  const [feedback, setFeedback] = useState(null);

  const handleCheckIn = () => {
    const res = claimDailyCheckIn();
    setFeedback(res.message);
    setTimeout(() => setFeedback(null), 4000);
  };

  return (
    <div
      className="glass-card"
      style={{
        padding: '2.25rem',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        background: 'linear-gradient(135deg, var(--bg-card) 60%, rgba(255, 46, 99, 0.08) 100%)'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.75rem'
        }}
      >
        {/* Left: Flame & Streak Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '20px',
              background: 'var(--brand-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(255, 46, 99, 0.45)',
              flexShrink: 0
            }}
          >
            <Flame size={40} color="#FFFFFF" fill="#FFFFFF" />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
                {streakCount} Days Active Study Streak
              </h3>
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#F59E0B',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  border: '1px solid rgba(245, 158, 11, 0.3)'
                }}
              >
                <Zap size={14} fill="#F59E0B" /> {totalXP} XP
              </span>
            </div>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
              {checkedInToday
                ? "Daily streak secured for today! Complete practice quizzes to level up faster."
                : "Claim your daily check-in or complete a quiz to preserve your learning momentum."}
            </p>
          </div>
        </div>

        {/* Right: Check-in Button */}
        <div>
          {checkedInToday ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.5rem',
                borderRadius: '14px',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10B981',
                fontWeight: 800,
                fontSize: '0.95rem',
                border: '1px solid rgba(16, 185, 129, 0.35)'
              }}
            >
              <CheckCircle2 size={20} /> Streak Secured (+100 XP)
            </div>
          ) : (
            <button
              onClick={handleCheckIn}
              className="btn btn-primary glow-effect"
              style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
            >
              <Sparkles size={18} /> Claim Daily Check-in (+100 XP)
            </button>
          )}
        </div>
      </div>

      {/* Week Tracker & Milestones */}
      <div
        style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}
      >
        {/* Weekly Day Circles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Weekly Tracker:
          </span>
          {history.map((h, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: h.active ? 'var(--brand-gradient)' : 'var(--bg-secondary)',
                  color: h.active ? '#FFF' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  boxShadow: h.active ? '0 3px 10px rgba(255, 46, 99, 0.35)' : 'none',
                  border: h.active ? 'none' : '1px solid var(--border-color)'
                }}
              >
                ✓
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>{h.day}</span>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Milestones:
          </span>
          {milestones.map((m, idx) => (
            <div
              key={idx}
              title={`${m.days} Days Streak - ${m.label}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                background: m.unlocked ? 'var(--brand-subtle)' : 'var(--bg-secondary)',
                border: m.unlocked ? '1px solid rgba(255, 46, 99, 0.35)' : '1px solid var(--border-color)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: m.unlocked ? 'var(--primary)' : 'var(--text-muted)',
                opacity: m.unlocked ? 1 : 0.6
              }}
            >
              <Trophy size={13} color={m.unlocked ? '#FF2E63' : 'currentColor'} /> {m.days}d ({m.label})
            </div>
          ))}
        </div>
      </div>

      {feedback && (
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '24px',
            background: 'var(--text-primary)',
            color: 'var(--bg-main)',
            padding: '0.5rem 1rem',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 700,
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.2s ease-in'
          }}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};
