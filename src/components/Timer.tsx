import React, { useState, useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import { Clock } from 'lucide-react';

const Timer: React.FC = () => {
  const { isQuizFinished, updateTime } = useQuiz();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: number | undefined;
    
    if (!isQuizFinished) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          const newValue = prevSeconds + 1;
          updateTime(newValue);
          return newValue;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isQuizFinished, updateTime]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center text-gray-700 font-medium">
      <Clock className="h-4 w-4 mr-2" />
      <span>{formatTime(seconds)}</span>
    </div>
  );
};

export default Timer;