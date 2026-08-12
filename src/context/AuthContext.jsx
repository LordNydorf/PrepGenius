import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('prepgenius_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('prepgenius_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const [quizHistory, setQuizHistory] = useState(() => {
    const saved = localStorage.getItem('prepgenius_quiz_history');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('prepgenius_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('prepgenius_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('prepgenius_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('prepgenius_quiz_history', JSON.stringify(quizHistory));
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
