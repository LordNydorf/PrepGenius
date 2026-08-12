import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, FileText, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';

export const CatPage = () => {
  const [activeSection, setActiveSection] = useState('quant');

  const catModules = [
    {
      id: 'quant',
      title: 'Quantitative Aptitude (QA)',
      count: '22 Questions • 40 Mins',
      desc: 'Master Arithmetic, Algebra, Geometry, Number Systems, and Modern Math.',
      topics: [
        { name: 'Arithmetic', sub: 'Percentages, Profit & Loss, Simple/Compound Interest, Time & Work, Speed Distance' },
        { name: 'Algebra', sub: 'Linear/Quadratic Equations, Logarithms, Progressions (AP/GP/HP), Functions & Graphs' },
        { name: 'Geometry & Mensuration', sub: 'Triangles, Circles, Polygons, Coordinate Geometry, Trigonometry' },
        { name: 'Number System & Modern Math', sub: 'Divisibility, Remainders, Permutations & Combinations, Probability' }
      ],
      playlistUrl: 'https://www.youtube.com/playlist?list=PLG4bwc5fquzj0Rkn0DVWZP9FxF9iG7OgB',
      videoEmbeds: [
        { title: 'Arithmetic Video Tutorials', id: '2IeY6bB8yE4' },
        { title: 'Algebra Video Tutorials', id: 'KhNeTrBYbYo' }
      ]
    },
    {
      id: 'varc',
      title: 'Verbal Ability & Reading Comprehension (VARC)',
      count: '24 Questions • 40 Mins',
      desc: 'Reading comprehension passages, para-jumbles, para-summary, and critical reasoning.',
      topics: [
        { name: 'Reading Comprehension (RC)', sub: '16 Questions across 4 Passages: Tone, Main Idea, Inference, Vocabulary' },
        { name: 'Para Jumbles & Odd Sentence', sub: 'Logical sentence sequencing (TITA) and sentence elimination' },
        { name: 'Para Summary & Completion', sub: 'Identifying essence of paragraphs and logical paragraph extensions' },
        { name: 'Critical Reasoning', sub: 'Strengthening/Weakening arguments and underlying assumptions' }
      ],
      playlistUrl: 'https://www.youtube.com/playlist?list=PLh-uxFrOdsq90Rxb61KNJ54L1j3HiUaIX',
      videoEmbeds: [
        { title: 'Verbal Ability Lecture Series', id: '2IeY6bB8yE4' }
      ]
    },
    {
      id: 'dilr',
      title: 'Data Interpretation & Logical Reasoning (DILR)',
      count: '20 Questions • 40 Mins',
      desc: 'Data interpretation sets, tables, charts, matrix arrangements, and reasoning caselets.',
      topics: [
        { name: 'Data Interpretation Sets', sub: 'Tables, Bar Charts, Pie Charts, Radar Graphs, Missing Data Caselets' },
        { name: 'Logical Reasoning Arrangements', sub: 'Linear, Circular, Matrix Matching, Blood Relations, Directions' },
        { name: 'Games & Tournaments', sub: 'Round-robin, Knockout tournaments, Binary Logic, Truth-Teller & Liar puzzles' },
        { name: 'Venn Diagrams & Set Theory', sub: '3-Set and 4-Set Venn diagrams, Maxima-Minima optimization' }
      ],
      playlistUrl: 'https://youtu.be/KhNeTrBYbYo?si=wZ6XaqjUgIsEQrTj',
      videoEmbeds: [
        { title: 'DILR Problem Solving Playlist', id: 'KhNeTrBYbYo' }
      ]
    }
  ];

  const currentModule = catModules.find(m => m.id === activeSection) || catModules[0];

  return (
    <div className="cat-prep-page" style={{ padding: '3rem 0 5rem 0' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h1 className="section-title">Prepare for CAT Exams on PrepGenius</h1>
          <p className="section-subtitle">
            Learn from PrepGenius for management studies in Indian Institutes of Management (IIMs).
          </p>
        </div>

        {/* Overview Stats */}
        <div
          className="clean-card"
          style={{
            padding: '1.5rem',
            marginBottom: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Questions</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>66 Qs</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>24 VARC, 20 DILR, 22 QA</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Exam Duration</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>120 Mins</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>40 mins per section</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Marking Scheme</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-green)' }}>+3 / -1</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>No negative marking for TITA</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Solved Papers</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>2018–2023</div>
            <Link to="/sample-papers" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
              Download PDFs →
            </Link>
          </div>
        </div>

        {/* Section Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}
        >
          {catModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveSection(mod.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                border: activeSection === mod.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                background: activeSection === mod.id ? 'var(--primary)' : 'var(--bg-secondary)',
                color: activeSection === mod.id ? '#FFF' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {mod.title.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Module Content */}
        <div
          className="clean-card"
          style={{
            padding: '2rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                {currentModule.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {currentModule.desc}
              </p>
            </div>
            <a
              href={currentModule.playlistUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              <Video size={15} /> Open YouTube Playlist <ExternalLink size={13} />
            </a>
          </div>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem' }}>Topic Breakdown:</h3>
          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            {currentModule.topics.map((t, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '8px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {t.name}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {t.sub}
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem' }}>Video Lectures:</h3>
          <div className="grid-2">
            {currentModule.videoEmbeds.map((vid, idx) => (
              <div key={idx} className="clean-card" style={{ overflow: 'hidden' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div style={{ padding: '0.85rem 1rem', fontWeight: 600, fontSize: '0.9rem' }}>
                  {vid.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link to="/sample-papers" className="btn btn-primary">
            <FileText size={16} /> Solved Papers (2018–2023)
          </Link>
          <Link to="/quiz?category=aptitude" className="btn btn-outline">
            Take Practice Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};
