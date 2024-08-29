'use client';

import { useState, useEffect } from 'react';

const questions = [
  "Hiked a nature trail?",
  "Identified a wild bird species?",
  "Planted a tree?",
  "Watched a sunrise in nature?",
  "Swam in a natural body of water?",
  // ... Add more questions to reach 100
];

// Repeat the questions to reach 100 (for demonstration purposes)
while (questions.length < 100) {
  questions.push(...questions.slice(0, 100 - questions.length));
}

export default function Quiz() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [score, setScore] = useState(0);

  const handleCheck = (index: number) => {
    setCheckedItems(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  useEffect(() => {
    const newScore = checkedItems.filter(Boolean).length;
    setScore(newScore);
  }, [checkedItems]);

  return (
    <div className="bg-vintage-bg min-h-screen pb-20">
      <header className="fixed top-0 left-0 right-0 bg-vintage-border text-white p-4 z-10 shadow-md transition-all duration-300 ease-in-out">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nature Enthusiast Quiz</h1>
          <div className="bg-white text-vintage-border px-4 py-2 rounded-full font-bold">
            Score: {score} / {questions.length}
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-2xl mx-auto">
        <p className="text-center italic mb-6 text-vintage-text">
          Explore your connection with nature through this quiz. Each experience counts!
        </p>
        
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div 
              key={index}
              className={`
                border-2 rounded-lg p-4 cursor-pointer transition-all duration-200
                ${checkedItems[index] 
                  ? 'border-vintage-text bg-vintage-bg shadow-inner' 
                  : 'border-vintage-border bg-white hover:shadow-md'}
              `}
              onClick={() => handleCheck(index)}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems[index]}
                  onChange={() => handleCheck(index)}
                  className="form-checkbox h-5 w-5 text-vintage-text rounded focus:ring-vintage-text mr-4"
                />
                <label className={`flex-grow text-gray-800 cursor-pointer ${checkedItems[index] ? 'line-through' : ''}`}>
                  {index + 1}. {question}
                </label>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}