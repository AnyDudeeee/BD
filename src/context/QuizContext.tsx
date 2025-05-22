import React, { createContext, useState, useContext, useEffect } from 'react';
import { Question, UserAnswer, QuizContextType } from '../types/types';
import { quizQuestions } from '../data/questions';

const initialContextValue: QuizContextType = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  isQuizFinished: false,
  timeElapsed: 0,
  setCurrentQuestionIndex: () => {},
  answerQuestion: () => {},
  finishQuiz: () => {},
  calculateScore: () => 0,
  resetQuiz: () => {},
  updateTime: () => {},
};

const QuizContext = createContext<QuizContextType>(initialContextValue);

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const getRandomQuestions = () => {
    // Create a copy of the questions array
    const shuffled = [...quizQuestions];
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Take the first 20 questions
    return shuffled.slice(0, 20);
  };

  useEffect(() => {
    setQuestions(getRandomQuestions());
  }, []);

  const answerQuestion = (questionId: number, answerId: string, isCorrect: boolean) => {
    const updatedUserAnswers = [...userAnswers];
    const existingAnswerIndex = updatedUserAnswers.findIndex(a => a.questionId === questionId);

    if (existingAnswerIndex !== -1) {
      updatedUserAnswers[existingAnswerIndex] = { questionId, answerId, isCorrect };
    } else {
      updatedUserAnswers.push({ questionId, answerId, isCorrect });
    }

    setUserAnswers(updatedUserAnswers);
  };

  const finishQuiz = () => {
    setIsQuizFinished(true);
  };

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const incorrectAnswers = userAnswers.length - correctAnswers;
    const score = (correctAnswers * 0.5) - (incorrectAnswers * 0.2);
    return Math.max(0, Math.round(score * 100) / 100); // Ensure no negative scores and round to 2 decimal places
  };

  const resetQuiz = () => {
    setQuestions(getRandomQuestions());
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizFinished(false);
    setTimeElapsed(0);
  };

  const updateTime = (time: number) => {
    setTimeElapsed(time);
  };

  const value = {
    questions,
    currentQuestionIndex,
    userAnswers,
    isQuizFinished,
    timeElapsed,
    setCurrentQuestionIndex,
    answerQuestion,
    finishQuiz,
    calculateScore,
    resetQuiz,
    updateTime,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};