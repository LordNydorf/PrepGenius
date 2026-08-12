import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { StreakProvider } from './context/StreakContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { CatPage } from './pages/subjects/CatPage';
import { GatePage } from './pages/subjects/GatePage';
import { GrePage } from './pages/subjects/GrePage';
import { ComputerCoursesPage } from './pages/subjects/ComputerCoursesPage';
import { SamplePapersPage } from './pages/SamplePapersPage';
import { QuizPage } from './pages/QuizPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <StreakProvider>
          <div className="app-container">
            <ScrollToTop />
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subjects/cat" element={<CatPage />} />
                <Route path="/subjects/gate" element={<GatePage />} />
                <Route path="/subjects/gre" element={<GrePage />} />
                <Route path="/subjects/computer-courses" element={<ComputerCoursesPage />} />
                <Route path="/sample-papers" element={<SamplePapersPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </StreakProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
export default App;
