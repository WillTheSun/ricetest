'use client';

import { useState, useEffect } from 'react';
import { questions } from './questions';

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
        <div className="bg-quiz-background min-h-screen pb-20 text-quiz-text">
            <header className="fixed top-0 left-0 right-0 bg-quiz-highlight text-white p-4 z-10 shadow-md transition-all duration-300 ease-in-out">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="w-1/3"></div> {/* Spacer */}
                    <h1 className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
                        Rice Purity Test
                    </h1>
                    <div className="w-1/3 flex justify-end">
                        <div className="bg-quiz-text text-quiz-background px-4 py-2 rounded-full font-bold">
                            Score: {score} / {questions.length}
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-24 px-4 max-w-2xl mx-auto">
                <p className="text-center italic mb-6">
                    The Purity Test has long been a tradition, bridging the gap between O-week and the real college experience at Rice. It's a voluntary way for O-week groups to connect and for students to reflect on how their experiences evolve throughout their time in college.
                </p>
                <p className="text-center italic mb-6">
                    Click on every experience you've had. MPS refers to Member of the Preferred Sex.
                </p>
                <p className="text-center italic mb-6">
                    Note: This is not a bucket list. Attempting to complete every item on this test could have serious, even fatal, consequences.
                </p>

                <div className="space-y-4">
                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className={`
                                rounded-lg p-4 cursor-pointer transition-all duration-200
                                ${checkedItems[index]
                                    ? 'bg-quiz-background text-quiz-text shadow-quiz-checked'
                                    : 'bg-quiz-text text-quiz-background shadow-quiz-unchecked hover:shadow-quiz-unchecked-hover'
                                }
                            `}
                            onClick={() => handleCheck(index)}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checkedItems[index]}
                                    onChange={() => handleCheck(index)}
                                    className="form-checkbox h-5 w-5 text-quiz-accent rounded focus:ring-quiz-accent mr-4"
                                />
                                <label className={`flex-grow cursor-pointer ${checkedItems[index] ? 'line-through' : ''}`}>
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