'use client';

import { useState, useEffect, useRef } from 'react';
import { questions, labels } from './questions';

export default function Quiz() {
    const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(questions.length).fill(false));
    const [score, setScore] = useState(100);
    const [progress, setProgress] = useState(0);
    const quizContainerRef = useRef<HTMLDivElement>(null);

    const handleCheck = (index: number) => {
        setCheckedItems(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    useEffect(() => {
        const newScore = 100 - checkedItems.filter(Boolean).length;
        setScore(newScore);
    }, [checkedItems]);

    useEffect(() => {
        const handleScroll = () => {
            if (quizContainerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = quizContainerRef.current;
                const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
                setProgress(Math.min(scrollPercentage, 1));
            }
        };

        const container = quizContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

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

    const handleReset = () => {
        setCheckedItems(new Array(questions.length).fill(false));
        setScore(100);
        setProgress(0);
        if (quizContainerRef.current) {
            quizContainerRef.current.scrollTop = 0;
        }
    };

    const getLabel = (score: number) => {
        for (const { range, label } of labels) {
            if (score >= range[0] && score <= range[1]) {
                return label;
            }
        }
        return "Unknown";
    };

    return (
        <div className="bg-quiz-background min-h-screen text-quiz-text font-quiz">
            <header className="fixed top-0 left-0 right-0 bg-quiz-highlight text-white p-4 z-10 shadow-md flex flex-col">
                <div className="max-w-4xl mx-auto flex justify-between items-center relative w-full">
                    <h1 className="text-quiz-title font-bold tracking-quiz-title md:absolute md:left-1/2 md:-translate-x-1/2 md:w-full md:text-center">
                        Rice Purity Test
                    </h1>
                    <div className="ml-auto bg-quiz-text text-quiz-background text-quiz-score px-2 rounded-full font-medium border-quiz-score border-white shadow-quiz-score">
                        {score} / 100
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-quiz-text/20">
                    <div 
                        className="h-full bg-quiz-accent transition-all duration-300 ease-out"
                        style={{ width: `${progress * 100}%` }}
                    ></div>
                </div>
            </header>

            <main 
                ref={quizContainerRef}
                className="pt-24 px-4 md:px-8 lg:px-16 max-w-full mx-auto overflow-y-auto h-screen"
            >
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
                                    ? 'bg-quiz-button-checked shadow-quiz-checked'
                                    : 'bg-quiz-button-unchecked shadow-quiz-unchecked hover:shadow-quiz-unchecked-hover'
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

                <div className="mt-8 mb-4 flex flex-col items-center space-y-4">
                    <div className="bg-quiz-highlight text-white p-3 rounded-lg text-center w-full">
                        <span className="text-xl font-bold">
                            {getLabel(score)} ({score} / {questions.length})
                        </span>
                    </div>

                    {/* Existing buttons */}
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={handleShare}
                            className="bg-quiz-accent text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-quiz-hover transition-all duration-200"
                        >
                            Share My Score
                        </button>
                        <button
                            onClick={handleReset}
                            className="bg-quiz-text text-quiz-background px-6 py-3 rounded-full font-bold shadow-md hover:bg-quiz-text/80 transition-all duration-200"
                        >
                            Reset Quiz
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}