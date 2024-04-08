"use client"
import { useCallback, useEffect, useState } from 'react';
import words from '../wordList.json';
import HangmanDraw from './hangmanDraw';
import HangmanWord from './hangmanWord';
import Keyboard from './keyboard';
import { toast } from 'sonner';

export default function Game() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    });

    const [guessLetters, setGuessLetters] = useState<string[]>([]);

    // take and filter the letters we guess
    const incorrectLetters = guessLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess
        .split('')
        .every(letter => guessLetters.includes(letter));

    const addGuessLetter = useCallback((letter: string) => {
        if (guessLetters.includes(letter) || isLoser || isWinner) {
            return
        } else {
            setGuessLetters(currentLetters => [...currentLetters, letter])
        }
    }, [guessLetters, isLoser, isWinner])

    // keyboard event handler
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key

            if (!key.match(/^[a-z]$/)) {
                return
            } else {
                e.preventDefault();
                addGuessLetter(key);
            }
        }

        document.addEventListener('keypress', handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessLetters, addGuessLetter]);

    useEffect(() => {
        if (isWinner) {
            toast('Congratulations, you won! 👏', {
                description: `The word was: ${wordToGuess} 🎉`,
            });
        }
    }, [isWinner, wordToGuess]);

    useEffect(() => {
        if (isLoser) {
            toast.error('Oops!', {
                description: `You lost! The word was:  ${wordToGuess} 🤷‍♂️`,
            })
        }
    }, [isLoser, wordToGuess]);

    const resetGame = () => {
        setWordToGuess(words[Math.floor(Math.random() * words.length)]);
        setGuessLetters([]);
    };

    return (
        <div className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-indigo-100 to-purple-200 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900'>
            <div className='flex flex-col items-center max-w-3xl gap-8 pt-12 mx-auto'>
                {/* I want to know how many times I chose the wrong letter */}
                <HangmanDraw numberOfGuess={incorrectLetters.length} />
                <HangmanWord
                    onReset={resetGame}
                    result={isLoser}
                    guessLetters={guessLetters}
                    wordToGuess={wordToGuess}
                />
                <div className='self-stretch px-4 py-6'>
                    <Keyboard
                        disabled={isWinner || isLoser}
                        activeLetter={guessLetters.filter(letter => wordToGuess.includes(letter))}
                        inactiveLetter={incorrectLetters}
                        addGuessLetter={addGuessLetter}
                    />
                </div>
            </div>
        </div>
    )
}