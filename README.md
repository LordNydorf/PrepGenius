# PrepGenius — Competitive Exams & Learning Platform


**PrepGenius** is an exam preparation and computer science learning web application. It provides study materials, video playlists, official solved question papers (CAT 2018–2023), and interactive practice quizzes for competitive exams such as **CAT, GATE, GRE, GMAT, and IELTS**.

---

## 📚 Key Features

* **Subject & Exam Hubs**:
  * **CAT Preparation**: Quantitative Aptitude, Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), syllabus breakdowns, and video lectures.
  * **GATE Examination**: Branch-wise syllabus and marks weightage for Computer Science (CS), Electronics (ECE), and Mechanical Engineering (ME).
  * **GRE Preparation**: Section guides for Quantitative, Verbal, and Analytical Writing (AWA), along with an interactive vocabulary flashcard trainer with speech pronunciation.
  * **Computer Courses & DSA**: Core modules for Data Structures, Algorithms, C/C++, Java, Python, and high-frequency technical interview questions.
* **Sample Papers Archive (2018–2023)**:
  * 16 official CAT question papers with answer keys in downloadable PDF format.
  * Searchable by year and slot with one-click downloads and bookmarking.
* **Daily Practice Quizzes**:
  * Multiple-choice practice questions across GATE CS, Data Structures, Algorithms, C++, Java, Python, JavaScript, and Aptitude.
  * 30-second timers, instant answer evaluation, score calculation, and conceptual explanations.
* **Learning Streaks**:
  * Daily check-in system tracking consecutive active study days and milestone achievements.
* **Clean UI & Dark/Light Themes**:
  * Built with clean, accessible Inter typography, royal blue accents, and dark/light mode toggle.

---

## 🛠️ Project Structure

```
PrepGenius/
├── public/
│   ├── favicon.svg             # Clean SVG browser icon
│   ├── images/                 # Course icons and assets
│   └── samplePapers/           # CAT question paper PDFs (2018–2023)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── FlashcardTrainer.jsx  # Vocabulary flashcard trainer
│   │   │   ├── SearchBar.jsx         # Live course/topic search
│   │   │   └── StreakBanner.jsx      # Daily study streak tracker
│   │   ├── layout/
│   │   │   ├── Navbar.jsx            # Responsive navigation bar
│   │   │   └── Footer.jsx            # Footer with navigation links
│   │   └── quiz/
│   │       └── QuizPlayer.jsx        # Interactive quiz engine
│   ├── context/
│   │   ├── AuthContext.jsx           # User state, bookmarks, quiz history
│   │   ├── StreakContext.jsx         # Daily streak logic & XP
│   │   └── ThemeContext.jsx          # Dark/Light mode theme state
│   ├── data/
│   │   ├── coursesData.js            # Authentic course & stats data
│   │   ├── flashcardsData.js         # GRE vocabulary dataset
│   │   ├── papersData.js             # CAT sample papers metadata
│   │   └── quizData.js               # Multi-category MCQs with explanations
│   ├── pages/
│   │   ├── Home.jsx                  # Main landing page
│   │   ├── DashboardPage.jsx         # Student dashboard & streak milestones
│   │   ├── LoginPage.jsx             # Sign in & registration portal
│   │   ├── QuizPage.jsx              # Quiz category selector
│   │   ├── SamplePapersPage.jsx      # Filterable PDF archive
│   │   └── subjects/
│   │       ├── CatPage.jsx           # CAT preparation hub
│   │       ├── ComputerCoursesPage.jsx # CS, DSA, & Interview Q&A
│   │       ├── GatePage.jsx          # GATE branch weightage & syllabus
│   │       └── GrePage.jsx           # GRE guides & vocabulary trainer
│   ├── styles/
│   │   └── index.css                 # Clean CSS tokens & utilities
│   ├── App.jsx                       # Root React Router SPA component
│   └── main.jsx                      # Application entry point
├── index.html                        # Root HTML template
├── package.json                      # Project dependencies & scripts
└── vite.config.js                    # Vite configuration
```

---

## 🚀 Setup & Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 3. Build for Production
```bash
npm run build
```

---

