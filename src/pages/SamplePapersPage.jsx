import React, { useState } from 'react';
import { FileText, Download, Bookmark, Search } from 'lucide-react';
import { samplePapersList } from '../data/papersData';
import { useAuth } from '../context/AuthContext';

export const SamplePapersPage = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleBookmark, isBookmarked } = useAuth();

  const years = ['All', '2023', '2022', '2021', '2020', '2019', '2018'];

  const filteredPapers = samplePapersList.filter((paper) => {
    const matchesYear = selectedYear === 'All' || paper.year.toString() === selectedYear;
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.slot.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.setName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  return (
    <div className="sample-papers-page" style={{ padding: '3rem 0 5rem 0' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h1 className="section-title">CAT Sample Papers (2018–2023)</h1>
          <p className="section-subtitle">
            Practice past CAT question papers with official answer keys.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div
          className="clean-card"
          style={{
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {/* Year Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.4rem' }}>
              Year:
            </span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: selectedYear === y ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  background: selectedYear === y ? 'var(--primary)' : 'var(--bg-secondary)',
                  color: selectedYear === y ? '#FFF' : 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              padding: '0.4rem 0.75rem',
              width: '220px'
            }}
          >
            <Search size={15} color="var(--text-muted)" style={{ marginRight: '0.5rem' }} />
            <input
              type="text"
              placeholder="Search set or slot..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                width: '100%',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid-3">
          {filteredPapers.map((paper) => {
            const bookmarked = isBookmarked(paper.id);
            return (
              <div
                key={paper.id}
                className="clean-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {paper.year} • {paper.slot} ({paper.setName})
                    </span>

                    <button
                      onClick={() => toggleBookmark(paper)}
                      title={bookmarked ? "Remove Bookmark" : "Save Paper"}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: bookmarked ? 'var(--primary)' : 'var(--text-muted)',
                        padding: '0.2rem'
                      }}
                    >
                      <Bookmark size={16} fill={bookmarked ? 'var(--primary)' : 'none'} />
                    </button>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {paper.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.25rem' }}>
                    {paper.sections.map((sec, idx) => (
                      <div key={idx} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        • {sec}
                      </div>
                    ))}
                  </div>
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
                    PDF • {paper.size}
                  </span>
                  <a
                    href={paper.file}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="btn btn-primary"
                    style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                  >
                    <Download size={14} /> Download PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPapers.length === 0 && (
          <div className="clean-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              No question papers matched your search criteria.
            </p>
            <button onClick={() => { setSelectedYear('All'); setSearchQuery(''); }} className="btn btn-outline">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
