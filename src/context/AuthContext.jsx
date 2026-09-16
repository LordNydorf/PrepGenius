import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('prepgenius_user');
      return saved ? JSON.parse(saved) : null;
    } catch (err) {
      console.warn('Failed to parse prepgenius_user from localStorage, resetting to null:', err);
      return null;
    }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('prepgenius_bookmarks');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.warn('Failed to parse prepgenius_bookmarks from localStorage, resetting to []:', err);
      return [];
    }
  });

  const [quizHistory, setQuizHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('prepgenius_quiz_history');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.warn('Failed to parse prepgenius_quiz_history from localStorage, resetting to []:', err);
      return [];
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('prepgenius_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('prepgenius_user');
      }
    } catch (err) {
      console.warn('Failed to write prepgenius_user to localStorage:', err);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('prepgenius_bookmarks', JSON.stringify(bookmarks));
    } catch (err) {
      console.warn('Failed to write prepgenius_bookmarks to localStorage:', err);
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('prepgenius_quiz_history', JSON.stringify(quizHistory));
    } catch (err) {
      console.warn('Failed to write prepgenius_quiz_history to localStorage:', err);
    }
  }, [quizHistory]);

  const login = (userData) => {
    const profile = {
      username: userData.username || 'PrepScholar',
      email: userData.email || 'student@prepgenius.edu',
      fullName: userData.fullName || 'Prep Scholar',
      avatar: '/images/creator/roshan.jpeg',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      targetExam: userData.targetExam || 'CAT 2026'
    };
    setUser(profile);
    return profile;
  };

  const logout = () => {
    setUser(null);
  };

  const toggleBookmark = (item) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.id === item.id);
      if (exists) {
        return prev.filter(b => b.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isBookmarked = (id) => {
    return bookmarks.some(b => b.id === id);
  };

  const recordQuizResult = (result) => {
    setQuizHistory(prev => [
      {
        ...result,
        timestamp: new Date().toISOString(),
        dateFormatted: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      },
      ...prev.slice(0, 49) // Keep last 50 attempts
    ]);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      bookmarks,
      toggleBookmark,
      isBookmarked,
      quizHistory,
      recordQuizResult
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
