import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export const ComputerCoursesPage = () => {
  const [activeTab, setActiveTab] = useState('dsa');
  const [openFaq, setOpenFaq] = useState(null);

  const modules = [
    {
      id: 'dsa',
      name: 'Data Structures & Algorithms',
      desc: 'Fundamental algorithms, linear data structures, trees, graphs, and dynamic programming.',
      topics: [
        { name: 'Linear Data Structures', items: 'Arrays, Linked Lists, Queues, Stacks, Vectors' },
        { name: 'Trees & Hierarchies', items: 'Binary Trees, BST, AVL Trees, Segment Trees, Heaps' },
        { name: 'Graphs', items: 'BFS, DFS, Dijkstra, Bellman-Ford, Kruskal, Prim, Topological Sort' },
        { name: 'Dynamic Programming', items: 'Memoization, Tabulation, 0/1 Knapsack, LCS, Matrix Chain' }
      ]
    },
    {
      id: 'cpp',
      name: 'C / C++ Programming',
      desc: 'Systems programming, memory management, pointers, and the Standard Template Library (STL).',
      topics: [
        { name: 'Pointers & Memory', items: 'Pointers, References, Dynamic Memory Allocation, Memory Management' },
        { name: 'Modern C++', items: 'Smart Pointers (unique_ptr, shared_ptr), Move Semantics, Lambdas' },
        { name: 'OOP Concepts', items: 'Virtual functions, Inheritance, Polymorphism, Abstract classes' },
        { name: 'Standard Template Library (STL)', items: 'vector, map, set, unordered_map, priority_queue' }
      ]
    },
    {
      id: 'java',
      name: 'Java Programming',
      desc: 'Object-oriented programming, collections framework, and JVM architecture.',
      topics: [
        { name: 'JVM Architecture', items: 'ClassLoader, Memory areas (Heap, Stack), Garbage Collection' },
        { name: 'Collections Framework', items: 'ArrayList, LinkedList, HashMap, HashSet, TreeMap' },
        { name: 'Multithreading', items: 'Thread lifecycle, Synchronization, Locks, ExecutorService' },
        { name: 'Java 8+ Features', items: 'Streams API, Lambda expressions, Functional interfaces' }
      ]
    },
    {
      id: 'python',
      name: 'Python Programming',
      desc: 'Python fundamentals, data structures, generators, and scripting.',
      topics: [
        { name: 'Core Syntax', items: 'List comprehensions, Generators, Iterators, Context managers' },
        { name: 'Advanced Concepts', items: 'Decorators, *args/**kwargs, Dunder methods' },
        { name: 'Concurrency', items: 'GIL, Multiprocessing, Threading, Asyncio' },
        { name: 'Libraries', items: 'NumPy, Pandas, Requests' }
      ]
    }
  ];

  const interviewQuestions = [
    {
      q: "What is the difference between a Process and a Thread?",
      a: "A process is an independent executing program with its own dedicated memory address space. A thread is a lightweight unit of execution within a process; threads within the same process share memory, heap, and open resources, but maintain private call stacks."
    },
    {
      q: "How does a Hash Map handle collisions?",
      a: "Common collision resolution strategies include Separate Chaining (using linked lists or balanced trees at each bucket) and Open Addressing (Linear Probing, Quadratic Probing, Double Hashing)."
    },
    {
      q: "What is the difference between Array and Linked List?",
      a: "Arrays store elements in contiguous memory locations, allowing O(1) random access by index, but have fixed sizes. Linked lists store elements as nodes with pointers, allowing O(1) dynamic insertions/deletions when position is known, but require O(N) sequential traversal."
    },
    {
      q: "What are the core ACID properties in database transactions?",
      a: "Atomicity (all operations succeed or fail together), Consistency (database constraints remain valid), Isolation (concurrent transactions execute independently), and Durability (committed changes persist permanently)."
    }
  ];

  const currentMod = modules.find(m => m.id === activeTab) || modules[0];

  return (
    <div className="computer-courses-page" style={{ padding: '3rem 0 5rem 0' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h1 className="section-title">Computer Courses & DSA</h1>
          <p className="section-subtitle">
            Programming fundamentals, algorithms, data structures, and technical interview questions.
          </p>
        </div>

        {/* Tab Selector */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}
        >
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                border: activeTab === m.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                background: activeTab === m.id ? 'var(--primary)' : 'var(--bg-secondary)',
                color: activeTab === m.id ? '#FFF' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {m.name}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                {currentMod.name}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {currentMod.desc}
              </p>
            </div>
            <Link to={`/quiz?category=${currentMod.id}`} className="btn btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Practice Quiz
            </Link>
          </div>

          <div className="grid-2">
            {currentMod.topics.map((t, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '8px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {t.name}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {t.items}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Q&A Section */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1rem' }}>
            Technical Interview Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {interviewQuestions.map((faq, idx) => (
              <div
                key={idx}
                className="clean-card"
                style={{ overflow: 'hidden' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {openFaq === idx && (
                  <div
                    style={{
                      padding: '0 1.25rem 1.25rem 1.25rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '0.75rem'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
