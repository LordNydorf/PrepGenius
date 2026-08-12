import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const GatePage = () => {
  const [activeBranch, setActiveBranch] = useState('cs');

  const branches = [
    {
      id: 'cs',
      name: 'Computer Science & IT (CS)',
      subjects: [
        { name: 'Theory of Computation', weightage: '7 - 9 Marks', topics: 'DFA/NFA, Regular Expressions, Context-Free Grammars, Pushdown Automata, Turing Machines & Decidability' },
        { name: 'Operating Systems', weightage: '8 - 10 Marks', topics: 'Process Management, CPU Scheduling, Threads, Deadlocks, Memory Management, File Systems' },
        { name: 'Database Management Systems (DBMS)', weightage: '6 - 8 Marks', topics: 'ER Models, Relational Algebra, SQL, Normalization (1NF to BCNF), Transactions & Concurrency' },
        { name: 'Computer Networks', weightage: '7 - 9 Marks', topics: 'OSI/TCP-IP Model, Flow & Error Control, IPv4/IPv6 Subnetting, Routing Algorithms, TCP/UDP, DNS' },
        { name: 'Algorithms & Data Structures', weightage: '12 - 15 Marks', topics: 'Asymptotics, Sorting, Dynamic Programming, Greedy, Graph Algorithms, Trees, Heaps, Hash Tables' },
        { name: 'Compiler Design', weightage: '4 - 6 Marks', topics: 'Lexical Analysis, Parsing (LL, LR, LALR), Syntax Directed Translation, Code Generation' },
        { name: 'Computer Organization & Architecture (COA)', weightage: '6 - 8 Marks', topics: 'Pipelining, Cache Mapping, Addressing Modes, CPU Data Path, Interrupts' },
        { name: 'Digital Logic', weightage: '4 - 6 Marks', topics: 'K-Maps, Combinational & Sequential Circuits, Number Systems' },
        { name: 'Engineering Mathematics & Discrete Math', weightage: '13 - 15 Marks', topics: 'Propositional Logic, Set Theory, Combinatorics, Graph Theory, Linear Algebra, Calculus, Probability' },
        { name: 'General Aptitude', weightage: '15 Marks', topics: 'Verbal Ability, Numerical Reasoning, Analytical Thinking' }
      ],
      videoLessons: [
        { title: 'GATE Computer Science Strategy & Weightage', embedId: '2IeY6bB8yE4' },
        { title: 'Theory of Computation Key Concepts', embedId: 'KhNeTrBYbYo' }
      ]
    },
    {
      id: 'ece',
      name: 'Electronics & Communication (ECE)',
      subjects: [
        { name: 'Signals & Systems', weightage: '8 - 10 Marks', topics: 'LTI Systems, Fourier Series/Transform, Laplace Transform, Z-Transform, Sampling Theorem' },
        { name: 'Analog Circuits', weightage: '9 - 11 Marks', topics: 'Diode Circuits, BJT/MOSFET Biasing, Op-Amp Applications, Filters, Oscillators' },
        { name: 'Communications', weightage: '10 - 12 Marks', topics: 'AM/FM, Digital Modulations (PCM, QPSK), Information Theory, Noise' },
        { name: 'Electromagnetics (EMFT)', weightage: '7 - 9 Marks', topics: 'Maxwell Equations, Plane Waves, Transmission Lines, Waveguides, Antennas' },
        { name: 'Electronic Devices (EDC)', weightage: '8 - 10 Marks', topics: 'Semiconductors, P-N Junction, BJT, MOSFET, Solar Cells' }
      ],
      videoLessons: [
        { title: 'Signals and Systems Review', embedId: '2IeY6bB8yE4' }
      ]
    },
    {
      id: 'me',
      name: 'Mechanical Engineering (ME)',
      subjects: [
        { name: 'Thermodynamics', weightage: '10 - 12 Marks', topics: 'First/Second Laws, Entropy, Rankine/Brayton Cycles, IC Engines, Refrigeration' },
        { name: 'Strength of Materials', weightage: '8 - 10 Marks', topics: 'Stress & Strain, Mohr Circle, SFD/BMD, Torsion, Columns' },
        { name: 'Theory of Machines', weightage: '8 - 10 Marks', topics: 'Mechanisms, Flywheels, Gyroscope, Vibrations, Gears' },
        { name: 'Fluid Mechanics & Heat Transfer', weightage: '10 - 12 Marks', topics: 'Bernoulli Equation, Boundary Layer, Conduction, Convection, Radiation' },
        { name: 'Manufacturing Engineering', weightage: '14 - 16 Marks', topics: 'Casting, Welding, Machining, Metrology, Operations Research' }
      ],
      videoLessons: [
        { title: 'Fluid Mechanics Overview', embedId: 'KhNeTrBYbYo' }
      ]
    }
  ];

  const currentBranch = branches.find(b => b.id === activeBranch) || branches[0];

  return (
    <div className="gate-prep-page" style={{ padding: '3rem 0 5rem 0' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h1 className="section-title">GATE Examination Portal</h1>
          <p className="section-subtitle">
            Branch-wise syllabus, marks weightage breakdown, and video tutorials for GATE preparation.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}
        >
          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBranch(b.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                border: activeBranch === b.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                background: activeBranch === b.id ? 'var(--primary)' : 'var(--bg-secondary)',
                color: activeBranch === b.id ? '#FFF' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Exam Overview Cards */}
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
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Marks</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>100 Marks</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>65 Questions</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Duration</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>180 Mins</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Computer Based Test</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Question Format</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-green)' }}>MCQ / MSQ / NAT</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Multiple Choice & Numerical</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>General Aptitude</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-amber)' }}>15 Marks</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Mandatory for all streams</div>
          </div>
        </div>

        {/* Syllabus Table */}
        <div
          className="clean-card"
          style={{
            padding: '2rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>
              {currentBranch.name} Syllabus & Marks Weightage
            </h2>
            <Link to="/quiz?category=gate" className="btn btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Practice GATE Quiz
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {currentBranch.subjects.map((sub, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}
              >
                <div style={{ maxWidth: '750px' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {sub.name}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {sub.topics}
                  </p>
                </div>

                <div
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {sub.weightage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Lectures */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
            Video Tutorials:
          </h3>
          <div className="grid-2">
            {currentBranch.videoLessons.map((vid, idx) => (
              <div key={idx} className="clean-card" style={{ overflow: 'hidden' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.embedId}`}
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
      </div>
    </div>
  );
};
