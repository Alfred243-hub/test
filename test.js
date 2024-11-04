import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const DailyCounterWidget = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 24 * 60 * 60 * 1000); // Incrémente le compteur tous les jours

    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-6xl font-bold">{count}</div>
      <Button onClick={handleReset}>
        Réinitialiser le compteur
      </Button>
    </div>
  );
};

export default DailyCounterWidget;