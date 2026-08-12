import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, HelpCircle } from 'lucide-react';
import { FlashcardTrainer } from '../../components/common/FlashcardTrainer';

export const GrePage = () => {
  const [activeTab, setActiveTab] = useState('flashcards');

  const greSections = [
    {
      name: 'Quantitative Reasoning (130 - 170)',
      score: '170 Scale',
      desc: 'Tests arithmetic, algebra, geometry, and data interpretation problem solving.',
      topics: [
        'Arithmetic: Prime numbers, divisibility, percentages, ratios, absolute value, sequences',
        'Algebra: Exponents, linear & quadratic equations, inequalities, coordinate geometry',
        'Geometry: Lines, angles, triangles, quadrilaterals, circles, 3D shapes',
        'Data Analysis: Statistics (mean, median, SD), probability, permutations & combinations'
      ]
    },
    {
      name: 'Verbal Reasoning (130 - 170)',
      score: '170 Scale',
      desc: 'Tests reading comprehension, text completion, and sentence equivalence.',
      topics: [
        'Text Completion: 1, 2, and 3 blank contextual passage questions',
        'Sentence Equivalence: Selecting pairs of words that produce equivalent sentence meanings',
        'Reading Comprehension: Multi-paragraph passages with inference and main idea questions'
      ]
    },
    {
      name: 'Analytical Writing Assessment (AWA)',
      score: '0.0 - 6.0 Scale',
      desc: 'Measures critical thinking and analytical writing through the "Analyze an Issue" task.',
      topics: [
        'Analyze an Issue Task: 30-minute essay constructing a reasoned argument with concrete evidence',
        'Structure: Introduction, clear thesis, 2-3 body paragraphs with support, and conclusion'
      ]
    }
  ];

  return (
    <div className="gre-prep-page" style={{ padding: '3rem 0 5rem 0' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h1 className="section-title">Prepare for GRE on PrepGenius</h1>
          <p className="section-subtitle">
            Quantitative reasoning, verbal ability, and interactive high-frequency vocabulary flashcards.
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <button
            onClick={() => setActiveTab('flashcards')}
            style={{
              padding: '0.65rem 1.25rem',
              borderRadius: '6px',
              border: activeTab === 'flashcards' ? '1px solid var(--primary)' : '1px solid var(--border-color)',
              background: activeTab === 'flashcards' ? 'var(--primary)' : 'var(--bg-secondary)',
              color: activeTab === 'flashcards' ? '#FFF' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Vocabulary Flashcards
          </button>
          <button
            onClick={() => setActiveTab('syllabus')}
            style={{
              padding: '0.65rem 1.25rem',
              borderRadius: '6px',
              border: activeTab === 'syllabus' ? '1px solid var(--primary)' : '1px solid var(--border-color)',
              background: activeTab === 'syllabus' ? 'var(--primary)' : 'var(--bg-secondary)',
              color: activeTab === 'syllabus' ? '#FFF' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Section Syllabus
          </button>
        </div>

        {/* Tab 1: Flashcards */}
        {activeTab === 'flashcards' && (
          <div style={{ marginBottom: '3rem' }}>
            <FlashcardTrainer />
          </div>
        )}

        {/* Tab 2: Syllabus */}
        {activeTab === 'syllabus' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
            {greSections.map((sec, idx) => (
              <div
                key={idx}
                className="clean-card"
                style={{ padding: '1.75rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{sec.name}</h3>
                  <span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', border: '1px solid var(--border-color)' }}>
                    {sec.score}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {sec.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {sec.topics.map((t, i) => (
                    <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      • {t}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Link */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
          <Link to="/quiz?category=aptitude" className="btn btn-primary">
            Take Aptitude Practice Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};
