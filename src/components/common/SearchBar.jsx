import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import { popularCourses } from '../../data/coursesData';
import { quizCategories } from '../../data/quizData';

export const SearchBar = ({ onSelectCourse, isMobile = false }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Search catalog index
  const searchableItems = [
    ...popularCourses.map(c => ({
      title: c.title,
      category: c.category,
      type: 'Course',
      path: c.path,
      icon: BookOpen,
      keywords: [c.title, c.category, ...c.topics].join(' ').toLowerCase()
    })),
    {
      title: 'Quantitative Aptitude (CAT)',
      category: 'Exam Prep',
      type: 'Topic',
      path: '/subjects/cat',
      icon: BookOpen,
      keywords: 'quant quantitative math cat time speed work percentage'
    },
    {
      title: 'Verbal Ability & Reading Comprehension (VARC)',
      category: 'Exam Prep',
      type: 'Topic',
      path: '/subjects/cat',
      icon: BookOpen,
      keywords: 'verbal reading comprehension varc english grammar gre cat'
    },
    {
      title: 'Data Structures & Algorithms',
      category: 'Computer Science',
      type: 'Topic',
      path: '/subjects/computer-courses',
      icon: BookOpen,
      keywords: 'dsa data structures algorithms trees graphs dynamic programming'
    },
    {
      title: 'CAT Solved Question Papers (2018 - 2023)',
      category: 'Question Bank',
      type: 'Papers',
      path: '/sample-papers',
      icon: FileText,
      keywords: 'cat previous year sample question papers solutions pdf slots'
    },
    ...quizCategories.map(q => ({
      title: `${q.name} Quiz`,
      category: 'Practice',
      type: 'Quiz',
      path: `/quiz?category=${q.id}`,
      icon: HelpCircle,
      keywords: `quiz test mcq practice ${q.name} ${q.desc}`.toLowerCase()
    }))
  ];

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const cleanQuery = query.toLowerCase().trim();
    const matched = searchableItems.filter(item => item.keywords.includes(cleanQuery)).slice(0, 5);
    setResults(matched);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (path) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
    if (onSelectCourse) onSelectCourse();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleSelect(results[0].path);
    }
  };

  return (
    <div ref={searchRef} style={{ position: 'relative', width: isMobile ? '100%' : '200px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '6px',
          padding: '0.35rem 0.65rem',
          transition: 'all 0.15s ease'
        }}
      >
        <Search size={14} color="var(--text-muted)" style={{ marginRight: '0.4rem', flexShrink: 0 }} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--text-primary)',
            fontSize: '0.825rem',
            width: '100%',
            fontFamily: 'inherit'
          }}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: 0,
              color: 'var(--text-muted)'
            }}
          >
            <X size={13} />
          </button>
        )}
      </div>

      {/* Auto-suggest Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 1100,
            overflow: 'hidden',
            padding: '0.35rem 0',
            width: '280px'
          }}
        >
          {results.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                onClick={() => handleSelect(item.path)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.55rem 0.75rem',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                  borderBottom: idx === results.length - 1 ? 'none' : '1px solid var(--border-color)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                  <IconComponent size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {item.category}
                    </div>
                  </div>
                </div>
                <ArrowRight size={12} color="var(--text-muted)" style={{ flexShrink: 0 }} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
