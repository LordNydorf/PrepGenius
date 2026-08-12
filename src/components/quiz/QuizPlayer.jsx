import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, XCircle, RotateCcw, ArrowRight, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useStreak } from '../../context/StreakContext';

export const QuizPlayer = ({ category, questions = [], onRestart, onSelectCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const { recordQuizResult } = useAuth();
  const { addXP } = useStreak();

  const currentQ = questions[currentIndex];

  useEffect(() => {
    if (isCompleted || isAnswered) return;

    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, isCompleted]);

  useEffect(() => {
    setTimeLeft(30);
    setSelectedOption(null);
    setIsAnswered(false);
  }, [currentIndex]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    setSelectedOption(-1);
    setAnswers(prev => [...prev, { questionId: currentQ.id, selected: -1, isCorrect: false }]);
  };

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setAnswers(prev => [...prev, {
      questionId: currentQ.id,
      selected: idx,
      isCorrect: isCorrect
    }]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsCompleted(true);
    const finalScore = score + (selectedOption === currentQ.correctIndex ? 1 : 0);
    const earnedXP = finalScore * 50 + 50;

    addXP(earnedXP);

    recordQuizResult({
      categoryId: category.id,
      categoryName: category.name,
      score: finalScore,
      total: questions.length,
      percentage: Math.round((finalScore / questions.length) * 100),
      earnedXP: earnedXP
    });
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="clean-card" style={{ padding: '3rem', textAlign: 'center' }}>
        <h3>No questions available for this category.</h3>
        <button onClick={onSelectCategory} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Select Another Category
        </button>
      </div>
    );
  }

  // Completion Screen
  if (isCompleted) {
    const accuracy = Math.round((score / questions.length) * 100);
    return (
      <div
        className="clean-card"
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '2.5rem'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.35rem' }}>
            Quiz Completed
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Category: <strong>{category.name}</strong>
          </p>
        </div>

        {/* Score Summary Box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '2.5rem',
            textAlign: 'center'
          }}
        >
          <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Score</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.25rem' }}>
              {score} / {questions.length}
            </div>
          </div>
          <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Accuracy</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-green)', marginTop: '0.25rem' }}>
              {accuracy}%
            </div>
          </div>
          <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Earned XP</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-amber)', marginTop: '0.25rem' }}>
              +{score * 50 + 50} XP
            </div>
          </div>
        </div>

        {/* Review Questions Breakdown */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
            Question Review & Explanations:
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {questions.map((q, idx) => {
              const userAns = answers.find(a => a.questionId === q.id);
              const wasCorrect = userAns ? userAns.isCorrect : false;
              return (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '8px',
                    background: 'var(--bg-secondary)',
                    borderLeft: `4px solid ${wasCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}`,
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {idx + 1}. {q.question}
                    </span>
                    {wasCorrect ? (
                      <CheckCircle size={18} color="var(--accent-green)" style={{ flexShrink: 0 }} />
                    ) : (
                      <XCircle size={18} color="var(--accent-red)" style={{ flexShrink: 0 }} />
                    )}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    <strong>Correct Answer:</strong> {q.options[q.correctIndex]}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    Explanation: {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
          <button onClick={onRestart} className="btn btn-outline">
            <RotateCcw size={15} /> Retake Quiz
          </button>
          <button onClick={onSelectCategory} className="btn btn-primary">
            Choose Another Category <ArrowRight size={15} />
          </button>
        </div>
      </div>
    );
  }

  // Active Quiz View
  return (
    <div
      className="clean-card"
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '2.5rem'
      }}
    >
      {/* Quiz Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase' }}>
            {category.name}
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Question {currentIndex + 1} of {questions.length}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '6px',
            background: 'var(--bg-secondary)',
            color: timeLeft <= 10 ? 'var(--accent-red)' : 'var(--text-primary)',
            fontWeight: 600,
            fontSize: '0.9rem',
            border: '1px solid var(--border-color)'
          }}
        >
          <Timer size={16} />
          <span>{timeLeft}s</span>
        </div>
      </div>

      {/* Question Text */}
      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          lineHeight: 1.5,
          color: 'var(--text-primary)',
          marginBottom: '1.75rem'
        }}
      >
        {currentQ.question}
      </h3>

      {/* Options List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
        {currentQ.options.map((opt, idx) => {
          let optBg = 'var(--bg-card)';
          let optBorder = 'var(--border-color)';
          let textColor = 'var(--text-primary)';

          if (isAnswered) {
            if (idx === currentQ.correctIndex) {
              optBg = 'rgba(16, 185, 129, 0.08)';
              optBorder = 'var(--accent-green)';
              textColor = 'var(--accent-green)';
            } else if (idx === selectedOption) {
              optBg = 'rgba(220, 38, 38, 0.08)';
              optBorder = 'var(--accent-red)';
              textColor = 'var(--accent-red)';
            }
          }

          const optionLetters = ['A', 'B', 'C', 'D'];

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.95rem 1.15rem',
                borderRadius: '8px',
                background: optBg,
                border: `1px solid ${optBorder}`,
                color: textColor,
                textAlign: 'left',
                fontSize: '0.95rem',
                fontWeight: 500,
                cursor: isAnswered ? 'default' : 'pointer',
                transition: 'all 0.15s ease',
                outline: 'none',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (!isAnswered) {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.background = 'var(--bg-secondary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isAnswered) {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.background = 'var(--bg-card)';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '4px',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-color)',
                    flexShrink: 0
                  }}
                >
                  {optionLetters[idx]}
                </span>
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation alert */}
      {isAnswered && (
        <div
          style={{
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            background: 'var(--bg-secondary)',
            borderLeft: `4px solid ${selectedOption === currentQ.correctIndex ? 'var(--accent-green)' : 'var(--accent-red)'}`,
            marginBottom: '1.75rem',
            border: '1px solid var(--border-color)'
          }}
        >
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedOption === currentQ.correctIndex ? 'var(--accent-green)' : 'var(--accent-red)', marginBottom: '0.25rem' }}>
            {selectedOption === currentQ.correctIndex ? 'Correct' : 'Incorrect'}
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {currentQ.explanation}
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onSelectCategory} className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>
          Quit Quiz
        </button>

        {isAnswered && (
          <button onClick={handleNext} className="btn btn-primary">
            {currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'} <ArrowRight size={15} />
          </button>
        )}
      </div>
    </div>
  );
};
