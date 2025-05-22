export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
  category: 'SQL Básico' | 'Consultas Multi-tabla' | 'Control de Datos';
  explanation?: string;
}

export interface UserAnswer {
  questionId: number;
  answerId: string;
  isCorrect: boolean;
}

export interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  isQuizFinished: boolean;
  timeElapsed: number;
  setCurrentQuestionIndex: (index: number) => void;
  answerQuestion: (questionId: number, answerId: string, isCorrect: boolean) => void;
  finishQuiz: () => void;
  calculateScore: () => number;
  resetQuiz: () => void;
  updateTime: (time: number) => void;
}