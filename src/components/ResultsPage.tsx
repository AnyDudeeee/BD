import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { CheckCircle, XCircle, Clock, BarChart, Award, RefreshCw } from 'lucide-react';

const ResultsPage: React.FC = () => {
  const { 
    questions, 
    userAnswers, 
    isQuizFinished,
    calculateScore,
    timeElapsed,
    resetQuiz
  } = useQuiz();
  
  const navigate = useNavigate();

  // Redirect to home if quiz is not finished
  useEffect(() => {
    if (!isQuizFinished && userAnswers.length === 0) {
      navigate('/');
    }
  }, [isQuizFinished, navigate, userAnswers.length]);

  if (userAnswers.length === 0) {
    return null;
  }

  const score = calculateScore();
  const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
  const incorrectAnswers = userAnswers.length - correctAnswers;
  const unansweredQuestions = questions.length - userAnswers.length;

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getScoreMessage = (score: number) => {
    if (score >= 9) return "¡Excelente! Dominas los conceptos de bases de datos.";
    if (score >= 7) return "¡Muy bien! Tienes un buen conocimiento de bases de datos.";
    if (score >= 5) return "¡Aprobado! Conoces los conceptos básicos, pero aún puedes mejorar.";
    return "Necesitas repasar más los conceptos de bases de datos.";
  };

  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/quiz');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-indigo-600 py-6 px-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Resultados del Examen</h1>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 rounded-lg p-6 flex items-center">
                <Award className="h-10 w-10 text-indigo-600 mr-4" />
                <div>
                  <div className="text-sm text-indigo-700 font-medium">Puntuación Total</div>
                  <div className="text-3xl font-bold text-indigo-900">{score} / 10</div>
                  <div className="text-sm text-indigo-600 mt-1">{getScoreMessage(score)}</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-gray-700 font-medium">Tiempo: {formatTime(timeElapsed)}</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-green-50 rounded p-2">
                    <div className="text-lg font-bold text-green-600">{correctAnswers}</div>
                    <div className="text-xs text-green-700">Correctas</div>
                  </div>
                  <div className="bg-red-50 rounded p-2">
                    <div className="text-lg font-bold text-red-600">{incorrectAnswers}</div>
                    <div className="text-xs text-red-700">Incorrectas</div>
                  </div>
                  <div className="bg-gray-100 rounded p-2">
                    <div className="text-lg font-bold text-gray-600">{unansweredQuestions}</div>
                    <div className="text-xs text-gray-700">Sin responder</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-indigo-600" />
              Revisión de Respuestas
            </h2>

            <div className="space-y-6 mb-8">
              {questions.map((question, index) => {
                const userAnswer = userAnswers.find(a => a.questionId === question.id);
                const selectedAnswer = question.answers.find(a => a.id === userAnswer?.answerId);
                const correctAnswer = question.answers.find(a => a.isCorrect);

                return (
                  <div key={question.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                      <span className="font-medium text-gray-700">Pregunta {index + 1}</span>
                      {userAnswer ? (
                        userAnswer.isCorrect ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" /> Correcta
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <XCircle className="h-3 w-3 mr-1" /> Incorrecta
                          </span>
                        )
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Sin responder
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-gray-800 font-medium mb-3">{question.text}</p>
                      
                      {selectedAnswer && (
                        <div className={`p-3 rounded-lg mb-3 ${
                          userAnswer?.isCorrect 
                            ? 'bg-green-50 border border-green-100' 
                            : 'bg-red-50 border border-red-100'
                        }`}>
                          <div className="text-sm font-medium mb-1">Tu respuesta:</div>
                          <div className="flex items-start">
                            {userAnswer?.isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={userAnswer?.isCorrect ? 'text-green-700' : 'text-red-700'}>
                              {selectedAnswer.text}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {!userAnswer?.isCorrect && correctAnswer && (
                        <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                          <div className="text-sm font-medium mb-1">Respuesta correcta:</div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-green-700">{correctAnswer.text}</span>
                          </div>
                        </div>
                      )}
                      
                      {question.explanation && (
                        <div className="mt-3 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-100">
                          <div className="font-medium text-blue-700 mb-1">Explicación:</div>
                          <p>{question.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleRetakeQuiz}
                className="inline-flex items-center justify-center px-5 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Volver a hacer el examen
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;