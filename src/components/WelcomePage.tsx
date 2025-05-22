import React from 'react';
import { Link } from 'react-router-dom';
import { DatabaseIcon } from 'lucide-react';

const WelcomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <DatabaseIcon className="h-12 w-12 text-indigo-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Examen de Base de Datos</h1>
        </div>
        
        <div className="mb-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instrucciones:</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white h-5 w-5 text-xs mr-2 mt-0.5">1</span>
              El examen consiste en <strong>20 preguntas de tipo test</strong> sobre conceptos de bases de datos.
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white h-5 w-5 text-xs mr-2 mt-0.5">2</span>
              Cada respuesta correcta suma <strong>0,5 puntos</strong>.
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white h-5 w-5 text-xs mr-2 mt-0.5">3</span>
              Cada respuesta incorrecta resta <strong>0,2 puntos</strong>.
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white h-5 w-5 text-xs mr-2 mt-0.5">4</span>
              La puntuación máxima es de <strong>10 puntos</strong>.
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white h-5 w-5 text-xs mr-2 mt-0.5">5</span>
              Una vez finalizado, podrás ver tus respuestas correctas e incorrectas.
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Importante:</h3>
          <p className="text-yellow-700">
            Este examen cubre conceptos de SQL básico, consultas multi-tabla y lenguaje de control de datos (DCL).
            No incluye preguntas sobre gestión de transacciones (COMMIT y ROLLBACK).
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/quiz" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            Comenzar Examen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;