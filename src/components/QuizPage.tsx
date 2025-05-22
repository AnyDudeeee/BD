import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import { CheckCircle, XCircle, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const QuizPage: React.FC = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    setCurrentQuestionIndex, 
    userAnswers, 
    answerQuestion,
    finishQuiz
  } = useQuiz();
  
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const navigate = useNavigate();
  
  // Find if user has already answered this question
  useEffect(() => {
    if (questions.length > 0) {
      const questionId = questions[currentQuestionIndex]?.id;
      const existingAnswer = userAnswers.find(a => a.questionId === questionId);
      if (existingAnswer) {
        setSelectedAnswer(existingAnswer.answerId);
      } else {
        setSelectedAnswer(null);
      }
    }
  }, [currentQuestionIndex, questions, userAnswers]);

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-indigo-600 text-xl">Cargando preguntas...</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (userAnswers.length / questions.length) * 100;

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
    const isCorrect = currentQuestion.answers.find(a => a.id === answerId)?.isCorrect || false;
    answerQuestion(currentQuestion.id, answerId, isCorrect);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishQuiz = () => {
    finishQuiz();
    navigate('/results');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <Timer />
          <div className="text-sm font-medium text-gray-600">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </div>
        </div>
        
        <ProgressBar progress={progress} />

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-6 animate-fade-in">
          <div className="mb-2 text-xs font-medium text-indigo-600 uppercase tracking-wide">
            {currentQuestion.category}
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            {currentQuestion.text}
          </h2>
          
          <div className="space-y-3 mb-8">
            {currentQuestion.answers.map((answer) => (
              <div 
                key={answer.id}
                onClick={() => handleAnswerSelect(answer.id)}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-start ${
                  selectedAnswer === answer.id 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                }`}
              >
                <div className="mr-3 mt-0.5">
                  {selectedAnswer === answer.id ? (
                    <CheckCircle className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <HelpCircle className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <div className="text-gray-700">{answer.text}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium ${
                currentQuestionIndex === 0
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-indigo-500 text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              }`}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={goToNextQuestion}
                disabled={!selectedAnswer}
                className={`inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium ${
                  !selectedAnswer
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-indigo-500 text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                }`}
              >
                Siguiente <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            ) : (
              <button
                onClick={handleFinishQuiz}
                className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Finalizar Examen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;