"use client"
import { useState, useEffect } from "react";
const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];


export default function Game() {
    const [boardData, setBoardData] = useState<string[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        initialize();
    }, []);

    useEffect(() => {
        if (matchedCards.length == 16) {
            setGameOver(true);
        }
    }, [moves, matchedCards]);

    const initialize = () => {
        shuffle();
        setGameOver(false);
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
    };

    const shuffle = () => {
        const shuffledCards = [...board, ...board]
            .sort(() => Math.random() - 0.5)
            .map((v) => v);

        setBoardData(shuffledCards);
    };

    const updateActiveCards = (i: number) => {
        if (!flippedCards.includes(i)) {
            if (flippedCards.length == 1) {
                const firstIdx = flippedCards[0];
                const secondIdx = i;
                if (boardData[firstIdx] == boardData[secondIdx]) {
                    setMatchedCards((prev) => [...prev, firstIdx, secondIdx]);
                }

                setFlippedCards([...flippedCards, i]);
            } else if (flippedCards.length == 2) {
                setFlippedCards([i]);
            } else {
                setFlippedCards([...flippedCards, i]);
            }

            setMoves((v) => v + 1);
        }
    };

    return (
        <div className="py-8">
            <div className="flex justify-between">
                <p className="text-xl font-semibold">{`Moves - ${moves}`}</p>
            </div>


            <div className="grid grid-cols-[repeat(4,4.75rem)] gap-2">
                {boardData.map((data, i) => {
                    const flipped = flippedCards.includes(i) ? true : false;
                    const matched = matchedCards.includes(i) ? true : false;
                    return (
                        <div
                            onClick={() => {
                                updateActiveCards(i);
                            }}
                            key={i}
                            className={`card select-none transition-all duration-200 rounded-sm relative text-center font-bold text-4xl h-[4.75rem] transform-[preserve-3d] ${flipped || matched ? " rotate-180" : ""} ${matched ? "text-white bg-amber-100" : ""} ${gameOver ? "pointer-events-none" : ""}`}
                        >
                            <div className="card-front text-white leading-[4.4rem] align-middle text-center text-[3.15rem] z-[2] absolute left-0 top-0 w-full h-full rounded-[50%] rotate-180 bg-zinc-100">{data}</div>
                            <div className="card-back absolute left-0 top-0 w-full h-full rounded-[50%] bg-zinc-300 z-[1] rotate-0 after:absolute after:w-3/4 after:top-0 after:left-0 after:h-3/4 after:rounded-[50%]"></div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between">
                <p className="text-xl font-semibold">{`GameOver - ${gameOver}`}</p>
                <button onClick={() => initialize()} className="reset-btn">
                    Reset
                </button>
            </div>
        </div>
    );
}