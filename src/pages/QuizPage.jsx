import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  HelpCircle, Cpu, Binary, Workflow, Code2, Coffee, 
  Terminal, FileCode, Calculator, ArrowRight 
} from 'lucide-react';
import { quizCategories, quizQuestions } from '../data/quizData';
import { QuizPlayer } from '../components/quiz/QuizPlayer';

const iconMap = {
  Cpu, Binary, Workflow, Code2, Coffee, Terminal, FileCode, Calculator, HelpCircle
};

export const QuizPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizKey, setQuizKey] = useState(0);

  useEffect(() => {
    const catId = searchParams.get('category');
    if (catId) {
      const found = quizCategories.find(c => c.id === catId);
      if (found) setSelectedCategory(found);
    }
  }, [searchParams]);

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSearchParams({ category: cat.id });
    setQuizKey(prev => prev + 1);
  };

  const handleClearCategory = () => {
    setSelectedCategory(null);
    setSearchParams({});
  };

  const handleRestart = () => {
    setQuizKey(prev => prev + 1);
  };

  return (
    <div className="quiz-page" style={{ padding: '3rem 0 5rem 0' }}>
      <div className="section-container">
        {!selectedCategory ? (
          <>
            <div className="section-header">
              <h1 className="section-title">Daily Practice Quizzes</h1>
              <p className="section-subtitle">
                Select a subject to start a timed multiple-choice practice session.
              </p>
            </div>

            <div className="grid-3">
              {quizCategories.map((cat) => {
                const IconComponent = iconMap[cat.icon] || HelpCircle;
                const questionsCount = quizQuestions[cat.id]?.length || 5;

                return (
                  <div
                    key={cat.id}
                    className="clean-card"
                    style={{
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleSelectCategory(cat)}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '8px',
                            background: 'var(--primary-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <IconComponent size={22} color="var(--primary)" />
                        </div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px',
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          {cat.difficulty}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                        {cat.name}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                        {cat.desc}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-color)'
                      }}
                    >
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {questionsCount} Questions • 30s Timer
                      </span>
                      <button
                        className="btn btn-primary"
                        style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                      >
                        Start <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <QuizPlayer
            key={quizKey}
            category={selectedCategory}
            questions={quizQuestions[selectedCategory.id] || []}
            onRestart={handleRestart}
            onSelectCategory={handleClearCategory}
          />
        )}
      </div>
    </div>
  );
};
