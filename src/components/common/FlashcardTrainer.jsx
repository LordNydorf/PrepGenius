import React, { useState } from 'react';
import { RotateCw, ChevronLeft, ChevronRight, Volume2, Check } from 'lucide-react';
import { greVocabFlashcards } from '../../data/flashcardsData';

export const FlashcardTrainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mastered, setMastered] = useState([]);

  const currentCard = greVocabFlashcards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % greVocabFlashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + greVocabFlashcards.length) % greVocabFlashcards.length);
  };

  const toggleMastered = (id) => {
    setMastered((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const speakWord = (word) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      className="clean-card"
      style={{
        padding: '2.5rem 2rem',
        maxWidth: '640px',
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--primary)',
            background: 'var(--primary-subtle)',
            padding: '0.25rem 0.65rem',
            borderRadius: '4px',
            border: '1px solid var(--primary-border)'
          }}
        >
          GRE Vocabulary ({currentIndex + 1} of {greVocabFlashcards.length})
        </span>

        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          Mastered: <strong style={{ color: 'var(--accent-green)' }}>{mastered.length}</strong> / {greVocabFlashcards.length}
        </span>
      </div>

      {/* Card Content Area */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '10px',
          padding: '2.5rem 1.5rem',
          minHeight: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          marginBottom: '2rem'
        }}
      >
        {!isFlipped ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {currentCard.word}
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakWord(currentCard.word);
                }}
                title="Pronunciation"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Volume2 size={20} />
              </button>
            </div>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              {currentCard.phonetic} • <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{currentCard.pos}</span>
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
              <RotateCw size={13} /> Click to show definition
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'left', width: '100%' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Definition
            </div>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.5 }}>
              {currentCard.definition}
            </p>

            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Example Sentence
            </div>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
              "{currentCard.example}"
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {currentCard.synonyms.map((s, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    background: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
        <button onClick={handlePrev} className="btn btn-outline" style={{ padding: '0.55rem 1.1rem' }}>
          <ChevronLeft size={16} /> Prev
        </button>

        <button
          onClick={() => toggleMastered(currentCard.id)}
          className={mastered.includes(currentCard.id) ? "btn btn-primary" : "btn btn-outline"}
          style={{
            borderColor: mastered.includes(currentCard.id) ? 'transparent' : 'var(--accent-green)',
            color: mastered.includes(currentCard.id) ? '#FFF' : 'var(--accent-green)'
          }}
        >
          <Check size={15} /> {mastered.includes(currentCard.id) ? "Mastered" : "Mark Mastered"}
        </button>

        <button onClick={handleNext} className="btn btn-primary" style={{ padding: '0.55rem 1.1rem' }}>
          Next <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
