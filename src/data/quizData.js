export const quizCategories = [
  { id: "gate", name: "GATE CS & IT", icon: "Cpu", count: 5, difficulty: "Advanced", desc: "Theory of computation, OS, DBMS & Computer Networks." },
  { id: "dsa", name: "Data Structures", icon: "Binary", count: 5, difficulty: "Intermediate", desc: "Arrays, Trees, Graphs, Heaps, and Hash Maps." },
  { id: "algorithms", name: "Algorithms & Complexity", icon: "Workflow", count: 5, difficulty: "Advanced", desc: "Dynamic programming, Greedy, Divide & Conquer, and Asymptotics." },
  { id: "cpp", name: "C / C++ Fundamentals", icon: "Code2", count: 5, difficulty: "Intermediate", desc: "Pointers, OOP concepts, Memory management, and STL." },
  { id: "java", name: "Java Programming", icon: "Coffee", count: 5, difficulty: "Intermediate", desc: "JVM internals, Collections framework, Multithreading, and OOP." },
  { id: "python", name: "Python Core", icon: "Terminal", count: 5, difficulty: "Beginner to Pro", desc: "List comprehensions, Generators, Decorators, and Data structures." },
  { id: "javascript", name: "Modern JavaScript", icon: "FileCode", count: 5, difficulty: "Intermediate", desc: "Closures, Event loop, Async/Await, and ES6+ features." },
  { id: "aptitude", name: "Quantitative Aptitude", icon: "Calculator", count: 5, difficulty: "Mixed", desc: "Percentages, Time & Work, Speed & Distance, Probability." },
  { id: "interview", name: "Technical Interview QA", icon: "HelpCircle", count: 5, difficulty: "Hard", desc: "High-frequency engineering interview questions." }
];

export const quizQuestions = {
  gate: [
    {
      id: 1,
      question: "Which of the following problems is undecidable for Turing Machines?",
      options: [
        "Membership problem for Context-Free Grammars",
        "The Halting Problem of Turing Machines",
        "Emptiness problem for Finite Automata",
        "Equivalence of two Deterministic Finite Automata (DFAs)"
      ],
      correctIndex: 1,
      explanation: "Alan Turing proved in 1936 that the Halting Problem is undecidable—no general algorithm can determine if an arbitrary Turing machine halts on an arbitrary input."
    },
    {
      id: 2,
      question: "In standard TCP, which mechanism is primarily used to prevent receiver buffer overflow?",
      options: [
        "Congestion Window (cwnd)",
        "Flow Control via Advertised Window (rwnd)",
        "Slow Start Algorithm",
        "Fast Retransmit"
      ],
      correctIndex: 1,
      explanation: "Flow control prevents the sender from overwhelming the receiver's buffer by having the receiver advertise its available buffer size (rwnd) in TCP headers."
    },
    {
      id: 3,
      question: "What is the worst-case time complexity of searching for an element in an AVL tree with n nodes?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      correctIndex: 1,
      explanation: "AVL trees are strictly height-balanced binary search trees with height strictly bounded by O(log n). Therefore, search, insertion, and deletion are guaranteed O(log n) in the worst case."
    },
    {
      id: 4,
      question: "Which scheduling algorithm is non-preemptive and provably achieves the minimum average waiting time for a given set of stationary processes?",
      options: [
        "First-Come, First-Served (FCFS)",
        "Shortest Job First (SJF - Non-preemptive)",
        "Round Robin (RR)",
        "Priority Scheduling"
      ],
      correctIndex: 1,
      explanation: "Shortest Job First (SJF) is mathematically optimal with respect to minimizing average waiting time because it schedules the shortest bursts first."
    },
    {
      id: 5,
      question: "Which of the following database normal forms eliminates transitive functional dependencies on the primary key?",
      options: [
        "1NF (First Normal Form)",
        "2NF (Second Normal Form)",
        "3NF (Third Normal Form)",
        "BCNF (Boyce-Codd Normal Form)"
      ],
      correctIndex: 2,
      explanation: "3NF requires that a relation is in 2NF and no non-prime attribute is transitively dependent on any candidate key."
    }
  ],

  dsa: [
    {
      id: 1,
      question: "What is the amortized time complexity of inserting an element into a dynamic array (like std::vector in C++ or ArrayList in Java)?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      correctIndex: 0,
      explanation: "While resizing takes O(n) intermittently, geometric capacity doubling ensures that across N insertions, total copies are <= 2N, giving an amortized O(1) time per append."
    },
    {
      id: 2,
      question: "Which data structure is fundamentally used for Breadth-First Search (BFS) graph traversal?",
      options: ["Stack", "Queue", "Priority Queue", "Disjoint Set (Union-Find)"],
      correctIndex: 1,
      explanation: "BFS visits nodes level-by-level using a FIFO (First-In, First-Out) Queue data structure."
    },
    {
      id: 3,
      question: "In a min-heap with N elements, what is the time complexity to find the minimum element vs delete the minimum element?",
      options: [
        "O(1) to find, O(log N) to delete",
        "O(log N) to find, O(1) to delete",
        "O(1) to find, O(1) to delete",
        "O(log N) to find, O(log N) to delete"
      ],
      correctIndex: 0,
      explanation: "The minimum element is always at the root array index 0 (O(1) lookup). Deleting it requires replacing with the last leaf and bubbling down (O(log N))."
    },
    {
      id: 4,
      question: "What technique does the Floyd Cycle Detection algorithm use to detect loops in a linked list?",
      options: [
        "Two pointers moving at different speeds (Slow and Fast)",
        "Hash map storing visited memory addresses",
        "Modifying node values to sentinel flags",
        "Recursive call stack depth tracking"
      ],
      correctIndex: 0,
      explanation: "Floyd's algorithm uses a slow pointer (1 step) and a fast pointer (2 steps). If a cycle exists, the fast pointer will inevitably lap the slow pointer in O(n) time and O(1) auxiliary space."
    },
    {
      id: 5,
      question: "Which self-balancing binary search tree guarantees that no path from root to leaf is more than twice as long as any other path?",
      options: ["Red-Black Tree", "Splay Tree", "Trie", "B-Tree"],
      correctIndex: 0,
      explanation: "Red-Black tree properties ensure that the longest path (alternating red and black nodes) is at most twice the length of the shortest path (all black nodes)."
    }
  ],

  algorithms: [
    {
      id: 1,
      question: "Dijkstra's Single-Source Shortest Path algorithm fails or may produce incorrect results when:",
      options: [
        "The graph is a directed acyclic graph (DAG)",
        "The graph contains negative edge weights",
        "The graph contains cycles with positive weights",
        "The graph is disconnected"
      ],
      correctIndex: 1,
      explanation: "Dijkstra's algorithm greedily assumes that adding an edge to a path cannot decrease its total length. Negative edge weights violate this assumption; Bellman-Ford should be used instead."
    },
    {
      id: 2,
      question: "What is the optimal recurrence relation for the 0/1 Knapsack Problem with capacity W and items (weights w_i, values v_i)?",
      options: [
        "dp[i][w] = max(dp[i-1][w], v[i] + dp[i-1][w - w[i]])",
        "dp[i][w] = dp[i-1][w] + dp[i-1][w - w[i]]",
        "dp[i][w] = min(dp[i-1][w], dp[i][w - w[i]])",
        "dp[i][w] = max(dp[i][w-1], v[i] * w)"
      ],
      correctIndex: 0,
      explanation: "For each item i, we decide whether to exclude it (taking dp[i-1][w]) or include it (gaining v[i] and using remaining capacity dp[i-1][w - w[i]])."
    },
    {
      id: 3,
      question: "Which comparison-based sorting algorithm has a worst-case time complexity of O(n log n) and sorts in-place with O(1) extra space?",
      options: ["Quick Sort", "Merge Sort", "Heap Sort", "Insertion Sort"],
      correctIndex: 2,
      explanation: "Heap Sort sorts strictly in O(n log n) in all cases (best, average, worst) and does so in-place with O(1) auxiliary space, unlike Merge Sort (O(n) auxiliary space)."
    },
    {
      id: 4,
      question: "What does the Master Theorem solve?",
      options: [
        "Asymptotic bounds for divide-and-conquer recurrence relations of the form T(n) = aT(n/b) + f(n)",
        "Maximum flow in residual flow networks",
        "String matching in linear time",
        "Graph coloring bounds in polynomial time"
      ],
      correctIndex: 0,
      explanation: "The Master Theorem provides a cookbook solution for divide-and-conquer recurrences T(n) = aT(n/b) + O(n^d)."
    },
    {
      id: 5,
      question: "Which string matching algorithm uses a 'Prefix Function' (π table) to achieve O(N + M) search time without backtracking?",
      options: ["Knuth-Morris-Pratt (KMP)", "Rabin-Karp", "Boyer-Moore", "Aho-Corasick"],
      correctIndex: 0,
      explanation: "KMP precomputes the Longest Proper Prefix which is also a Suffix (LPS array) so that mismatches skip redundant comparisons in O(N + M) time."
    }
  ],

  cpp: [
    {
      id: 1,
      question: "What does the 'virtual' keyword in a C++ base class destructor ensure?",
      options: [
        "It prevents inheritance of the class",
        "It ensures the derived class destructor is called when deleting via a base class pointer",
        "It allocates the object in static memory",
        "It makes the class abstract"
      ],
      correctIndex: 1,
      explanation: "Without a virtual destructor, deleting a derived class object through a base pointer causes undefined behavior and resource leaks because only the base destructor runs."
    },
    {
      id: 2,
      question: "In modern C++ (C++11 and later), which smart pointer guarantees exclusive ownership of dynamically allocated memory?",
      options: ["std::shared_ptr", "std::unique_ptr", "std::weak_ptr", "std::auto_ptr"],
      correctIndex: 1,
      explanation: "`std::unique_ptr` maintains strict exclusive ownership with zero runtime overhead compared to raw pointers and cannot be copied, only moved."
    },
    {
      id: 3,
      question: "What is RAII in C++?",
      options: [
        "Resource Acquisition Is Initialization: binding resource lifecycle to object lifetime",
        "Runtime Allocation of Interface Instances",
        "Recursive Algorithm for Iterative Indexing",
        "Read-After-Input Instruction Set"
      ],
      correctIndex: 0,
      explanation: "RAII ties resource acquisition to constructor execution and resource release to destructor execution, preventing memory and file descriptor leaks automatically."
    },
    {
      id: 4,
      question: "What is the underlying data structure of std::map in standard C++ implementations?",
      options: ["Hash Table", "Red-Black Tree (Self-Balancing BST)", "Array", "Linked List"],
      correctIndex: 1,
      explanation: "`std::map` keeps elements ordered and is implemented using Red-Black trees (O(log N) lookup). `std::unordered_map` uses Hash Tables (O(1) average lookup)."
    },
    {
      id: 5,
      question: "What is an R-value reference (&&) primarily used for in C++11?",
      options: [
        "Implementing Move Semantics and Perfect Forwarding to avoid expensive deep copies",
        "Creating references to read-only hardware registers",
        "Increasing compiler optimization levels",
        "Allowing multiple inheritance"
      ],
      correctIndex: 0,
      explanation: "R-value references enable move semantics by stealing resources from temporary objects instead of performing deep copy operations."
    }
  ],

  java: [
    {
      id: 1,
      question: "What is the difference between `==` and `.equals()` when comparing two String objects in Java?",
      options: [
        "`==` compares memory reference addresses; `.equals()` compares string content character by character",
        "`==` compares character content; `.equals()` compares memory addresses",
        "There is no difference in modern Java",
        "`==` is used for StringBuffers, while `.equals()` is for String literals"
      ],
      correctIndex: 0,
      explanation: "In Java, `==` tests object reference identity (memory location), whereas `String.equals()` is overridden to compare actual string contents."
    },
    {
      id: 2,
      question: "Which of the following statements about Java Garbage Collection is true?",
      options: [
        "Garbage collection guarantees that an unreferenced object is deleted immediately",
        "Developers can explicitly force garbage collection via `System.gc()`",
        "The JVM divides the heap into generations (Young, Old/Tenured) to optimize garbage collection efficiency",
        "Garbage collection cleans stack memory, not heap memory"
      ],
      correctIndex: 2,
      explanation: "Generational garbage collection exploits the weak generational hypothesis (most objects die young) by splitting heap space into Eden, Survivor, and Tenured spaces."
    },
    {
      id: 3,
      question: "What is the purpose of the `volatile` keyword in Java?",
      options: [
        "It prevents a method from being overridden",
        "It guarantees visibility of changes to variables across threads by forcing reads/writes to main memory",
        "It makes an object immutable",
        "It serializes an object across network sockets"
      ],
      correctIndex: 1,
      explanation: "`volatile` ensures that reads and writes of the variable are observed directly from main memory without caching in CPU registers/L1 cache."
    },
    {
      id: 4,
      question: "Which Java collection is synchronized and thread-safe by default?",
      options: ["ArrayList", "Vector", "HashSet", "HashMap"],
      correctIndex: 1,
      explanation: "`Vector` and `Hashtable` are legacy synchronized collections where each method is thread-safe (though `ConcurrentHashMap` or `CopyOnWriteArrayList` are preferred in modern Java)."
    },
    {
      id: 5,
      question: "What happens if a Java class implements two interfaces that have default methods with the exact same signature?",
      options: [
        "The compiler throws a duplicate method / conflict error unless the implementing class overrides the method explicitly",
        "The JVM randomly picks one at runtime",
        "The interface listed first in `implements` always takes priority",
        "Both methods execute sequentially"
      ],
      correctIndex: 0,
      explanation: "Java requires the developer to resolve multiple inheritance conflicts explicitly by overriding the conflicting method in the implementing class."
    }
  ],

  python: [
    {
      id: 1,
      question: "What is the Global Interpreter Lock (GIL) in standard CPython?",
      options: [
        "A mutex that allows only one native thread to execute Python bytecode at a time",
        "A security sandbox that locks malicious file access",
        "A database transaction lock for SQLite",
        "A compilation flag for Cython"
      ],
      correctIndex: 0,
      explanation: "The GIL prevents multi-threaded CPython programs from executing Python bytecode in parallel across multiple CPU cores (multiprocessing is used instead for CPU-bound parallelism)."
    },
    {
      id: 2,
      question: "What is the output of `[i*2 for i in range(5) if i % 2 == 0]` in Python?",
      options: [
        "[0, 4, 8]",
        "[0, 2, 4, 6, 8]",
        "[2, 6, 10]",
        "[0, 4]"
      ],
      correctIndex: 0,
      explanation: "`range(5)` is [0, 1, 2, 3, 4]. Evens are 0, 2, 4. Multiplying each by 2 yields [0, 4, 8]."
    },
    {
      id: 3,
      question: "How do Python generators (`yield`) differ from standard functions (`return`)?",
      options: [
        "Generators return an iterator and yield items lazily one at a time, preserving local state across calls with minimal memory footprint",
        "Generators execute on GPU threads",
        "Generators are immutable functions",
        "Generators cannot take arguments"
      ],
      correctIndex: 0,
      explanation: "`yield` produces values on-demand (lazy evaluation), allowing iteration over massive or infinite sequences without loading everything into RAM."
    },
    {
      id: 4,
      question: "What is the difference between `deepcopy` and `copy` (shallow copy) in Python?",
      options: [
        "Shallow copy copies references to nested objects; deepcopy recursively creates brand new copies of nested objects",
        "Deepcopy only works on dictionaries",
        "Shallow copy is slower than deepcopy",
        "There is no difference in Python 3"
      ],
      correctIndex: 0,
      explanation: "Shallow copy constructs a new compound object but inserts references into it. `deepcopy` duplicates everything recursively so mutations do not affect the original."
    },
    {
      id: 5,
      question: "What is the time complexity of dictionary key lookup in Python on average?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 0,
      explanation: "Python dictionaries are implemented with dynamic hash tables, providing average O(1) time complexity for insertions, deletions, and lookups."
    }
  ],

  javascript: [
    {
      id: 1,
      question: "What is a closure in JavaScript?",
      options: [
        "A function bundled together with references to its surrounding lexical state (lexical environment)",
        "A method to close browser tabs programmatically",
        "A syntax error caused by unclosed curly braces",
        "A promise that has fulfilled"
      ],
      correctIndex: 0,
      explanation: "Closures give an inner function access to its outer function's scope even after the outer function has finished executing."
    },
    {
      id: 2,
      question: "In the JavaScript Event Loop, what is the execution priority between Microtasks (e.g. Promise.then) and Macrotasks (e.g. setTimeout)?",
      options: [
        "All microtasks in the microtask queue are executed immediately after current stack before the next macrotask is dequeued",
        "Macrotasks always execute before microtasks",
        "They execute randomly depending on system load",
        "Promises are converted into setTimeout(0)"
      ],
      correctIndex: 0,
      explanation: "The microtask queue (Promise callbacks, queueMicrotask, MutationObserver) is completely drained at the end of each task execution before moving to the next macrotask."
    },
    {
      id: 3,
      question: "What is the output of `typeof NaN` in JavaScript?",
      options: ["'number'", "'NaN'", "'undefined'", "'object'"],
      correctIndex: 0,
      explanation: "In IEEE 754 floating-point specification and JavaScript, `NaN` (Not-a-Number) is formally a numeric data type, so `typeof NaN === 'number'`."
    },
    {
      id: 4,
      question: "What does the `===` operator check compared to `==`?",
      options: [
        "Strict equality: compares both value and type without performing implicit type coercion",
        "Checks only memory addresses",
        "Performs faster string conversions",
        "Compares deep nested object properties"
      ],
      correctIndex: 0,
      explanation: "`===` does not perform type coercion (e.g., `0 === false` is `false`, whereas `0 == false` is `true`)."
    },
    {
      id: 5,
      question: "What is the key difference between `let` / `const` and `var` in terms of scoping?",
      options: [
        "`let` and `const` are block-scoped and reside in the Temporal Dead Zone before declaration; `var` is function-scoped and hoisted with `undefined`",
        "`var` is block-scoped; `let` is global only",
        "`const` allows reassignment of primitive values",
        "There is no difference in modern ES modules"
      ],
      correctIndex: 0,
      explanation: "`let` and `const` respect block `{ ... }` boundaries and cannot be accessed prior to their declaration line due to the Temporal Dead Zone (TDZ)."
    }
  ],

  aptitude: [
    {
      id: 1,
      question: "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
      options: ["89 seconds", "100 seconds", "75 seconds", "65 seconds"],
      correctIndex: 0,
      explanation: "Speed of train = 240m / 24s = 10 m/s. Total distance to cross platform = 240m + 650m = 890m. Time = 890m / 10 m/s = 89 seconds."
    },
    {
      id: 2,
      question: "If A can complete a task in 12 days and B in 16 days, how many days will they take working together?",
      options: ["48/7 days (~6.85 days)", "7 days", "14 days", "6 days"],
      correctIndex: 0,
      explanation: "Rate = 1/12 + 1/16 = (4 + 3)/48 = 7/48. Time taken = 48/7 days."
    },
    {
      id: 3,
      question: "An article is sold at a 20% profit. If the cost price is $250, what is the selling price?",
      options: ["$300", "$280", "$320", "$290"],
      correctIndex: 0,
      explanation: "Selling Price = 250 * 1.20 = $300."
    },
    {
      id: 4,
      question: "Two cards are drawn at random from a standard deck of 52 cards without replacement. What is the probability that both are Aces?",
      options: ["1/221", "1/169", "1/26", "4/52"],
      correctIndex: 0,
      explanation: "Probability = (4/52) * (3/51) = (1/13) * (1/17) = 1/221."
    },
    {
      id: 5,
      question: "The sum of ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
      options: ["4 years", "6 years", "8 years", "5 years"],
      correctIndex: 0,
      explanation: "Let ages be x, x+3, x+6, x+9, x+12. Sum = 5x + 30 = 50 => 5x = 20 => x = 4 years."
    }
  ],

  interview: [
    {
      id: 1,
      question: "In System Design, what does the CAP Theorem state?",
      options: [
        "A distributed data store can simultaneously provide at most two out of three guarantees: Consistency, Availability, and Partition Tolerance",
        "Cache Allocation Protocol ensures zero cache misses",
        "Capacity, Accuracy, and Performance cannot all be optimized",
        "Client-side Authentication Protocol"
      ],
      correctIndex: 0,
      explanation: "Eric Brewer's CAP theorem proves that in the presence of a network partition (P), a distributed system must choose between Consistency (C) and Availability (A)."
    },
    {
      id: 2,
      question: "What is an index in an SQL database and what is its typical trade-off?",
      options: [
        "Indexes speed up SELECT query lookup times (often using B-Trees) at the cost of extra disk space and slower INSERT/UPDATE/DELETE writes",
        "Indexes encrypt sensitive columns",
        "Indexes prevent duplicate rows only",
        "Indexes remove NULL values automatically"
      ],
      correctIndex: 0,
      explanation: "Indexes maintain sorted data structures (B-Tree/B+ Tree) allowing logarithmic lookup, but every mutation requires updating both the table and its associated index trees."
    },
    {
      id: 3,
      question: "What is the difference between Process and Thread in Operating Systems?",
      options: [
        "A process has its own independent address space; threads within the same process share code, data, and open files while having their own stack and registers",
        "Threads cannot run concurrently",
        "Processes share virtual memory by default",
        "A thread always runs on a separate physical machine"
      ],
      correctIndex: 0,
      explanation: "Processes are isolated units of execution with distinct virtual address spaces. Threads are lightweight execution units inside a process sharing the same heap and memory."
    },
    {
      id: 4,
      question: "What is the advantage of using Redis for caching?",
      options: [
        "In-memory data store with sub-millisecond read/write latencies and versatile data structures (strings, hashes, sets, sorted sets)",
        "Replaces relational databases completely",
        "Requires zero memory overhead",
        "Runs only on browser clients"
      ],
      correctIndex: 0,
      explanation: "Redis stores data entirely in RAM, making it exceptionally fast for session caching, rate limiting, and real-time leaderboards."
    },
    {
      id: 5,
      question: "What is a Deadlock in concurrent systems, and what are the 4 Coffman conditions required for it to occur?",
      options: [
        "Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait",
        "Race Condition, Starvation, Priority Inversion, and Livelock",
        "Single-threading, Infinite Loop, Memory Leak, and Stack Overflow",
        "Blocking I/O, Buffer Overflow, Segmentation Fault, and Null Pointer"
      ],
      correctIndex: 0,
      explanation: "Deadlock occurs when processes are permanently blocked waiting for resources. All four Coffman conditions must hold simultaneously for a deadlock to exist."
    }
  ]
};
