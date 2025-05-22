import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </QuizProvider>
  );
}

export default App;