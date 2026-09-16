import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const StreakContext = createContext();

const defaultMilestones = [
  { days: 5, label: "Continuous Learning", unlocked: false },
  { days: 10, label: "Persistent Effort", unlocked: false },
  { days: 20, label: "Unstoppable", unlocked: false }
];

const defaultHistory = [
  { day: 'Mon', active: false },
  { day: 'Tue', active: false },
  { day: 'Wed', active: false },
  { day: 'Thu', active: false },
  { day: 'Fri', active: false },
  { day: 'Sat', active: false },
  { day: 'Sun', active: false }
];

export const StreakProvider = ({ children }) => {
  const [streakData, setStreakData] = useState(() => {
    try {
      const saved = localStorage.getItem('prepgenius_streak_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return {
            count: typeof parsed.count === 'number' ? parsed.count : 0,
            lastDate: parsed.lastDate || null,
            totalXP: typeof parsed.totalXP === 'number' ? parsed.totalXP : 0,
            checkedInToday: Boolean(parsed.checkedInToday),
            history: Array.isArray(parsed.history) && parsed.history.length === 7 ? parsed.history : defaultHistory,
            milestones: Array.isArray(parsed.milestones) ? parsed.milestones : defaultMilestones
          };
        }
      }
    } catch (e) {
      console.warn('Failed to parse prepgenius_streak_v2 from localStorage, resetting:', e);
    }
    return {
      count: 0,
      lastDate: null,
      totalXP: 0,
      checkedInToday: false,
      history: defaultHistory,
      milestones: defaultMilestones
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('prepgenius_streak_v2', JSON.stringify(streakData));
    } catch (err) {
      console.warn('Failed to write prepgenius_streak_v2 to localStorage:', err);
    }
  }, [streakData]);

  // Check in for the day
  const claimDailyCheckIn = () => {
    if (streakData.checkedInToday) return { success: false, message: "Already checked in today!" };

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const newCount = streakData.count + 1;
    const newXP = streakData.totalXP + 100;
    const todayStr = new Date().toISOString().split('T')[0];

    const updatedMilestones = streakData.milestones.map(m => {
      if (newCount >= m.days) return { ...m, unlocked: true };
      return m;
    });

    setStreakData(prev => ({
      ...prev,
      count: newCount,
      lastDate: todayStr,
      totalXP: newXP,
      checkedInToday: true,
      milestones: updatedMilestones
    }));

    return { success: true, message: `Streak increased to ${newCount} day${newCount > 1 ? 's' : ''}!` };
  };

  const addXP = (amount) => {
    setStreakData(prev => ({
      ...prev,
      totalXP: prev.totalXP + amount
    }));
  };

  return (
    <StreakContext.Provider value={{
      streakCount: streakData.count,
      totalXP: streakData.totalXP,
      checkedInToday: streakData.checkedInToday,
      milestones: streakData.milestones,
      history: streakData.history,
      claimDailyCheckIn,
      addXP
    }}>
      {children}
    </StreakContext.Provider>
  );
};

export const useStreak = () => useContext(StreakContext);
