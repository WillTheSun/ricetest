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

    const handleShare = async () => {
        if (navigator.share) {
            const shareData = {
                title: 'Rice Purity Test',
                text: `I scored ${score} on the Rice Purity Test! Take the test yourself:`,
                url: window.location.href,
            };

                await navigator.share(shareData);
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    };

    return (
        <div className="bg-quiz-background min-h-screen pb-20 text-quiz-text">
            <header className="fixed top-0 left-0 right-0 bg-quiz-highlight text-white p-4 z-10 shadow-md transition-all duration-300 ease-in-out">
                <div className="max-w-4xl mx-auto flex justify-between items-center relative">
                    <h1 className="text-2xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2 md:w-full md:text-center">
                        Rice Purity Test
                    </h1>
                    <div className="ml-auto">
                        <div className="bg-quiz-text text-quiz-background px-4 py-2 rounded-full font-bold">
                            Score: {score} / {questions.length}
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-24 px-4 max-w-2xl mx-auto">
                <div className="text-xs text-center mb-6 space-y-2 text-quiz-text/70">
                    <p>Welcome to the updated Rice Purity Test.</p>
                    <p>Click on every experience you&apos;ve had. MPS = Member of the Preferred Sex.</p>
                    <p>Note: This is not a bucket list. Attempting to check off every item could lead to serious, even fatal, consequences.</p>
                </div>

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

                <div className="mt-8 flex justify-center">
                    <button
                        onClick={handleShare}
                        className="bg-quiz-highlight text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-opacity-90 transition-all duration-200"
                    >
                        Share My Score
                    </button>
                </div>
            </main>
        </div>
    );
}