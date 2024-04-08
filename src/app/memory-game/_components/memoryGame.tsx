"use client"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { categories } from "../categories";

const board = ["A", "B", "C", "D", "E", "F", "G", "H"];


export default function MemoryGame() {
    const [startGame, setStartGame] = useState<boolean>(false);
    const [level, setLevel] = useState<number>(8);
    const [category, setCategory] = useState<string[]>(categories[0].words);
    const [translation, setTranslation] = useState<string[]>(categories[0].translation);
    const [boardData, setBoardData] = useState<string[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (matchedCards.length === level * 2) {
            setGameOver(true);
        }
    }, [matchedCards, moves, level]);

    const start = (status: boolean) => {
        setStartGame(status);
        initialize();
    }

    const initialize = () => {
        shuffle();
        setGameOver(false);
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
    };

    const shuffle = () => {
        const categorySliced = category.slice(0, level);
        const shuffledCards = [...categorySliced, ...categorySliced]
            .sort(() => Math.random() - 0.5)
            .map((v) => v)

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

        !startGame ? (
            <div className="flex flex-col gap-2 absolute top-40 bg-slate-700/50 backdrop-blur
            p-2.5 z-[3] min-w-96 justify-between rounded-xl">
                <h2 className="text-xl font-semibold text-center dark:text-slate-100 !mb-4">Select the difficulty</h2>
                <Button size="lg" className={`w-full hover:bg-muted-foreground ${level === 8 ? "bg-muted-foreground" : ""}`} onClick={() => setLevel(8)}>Easy</Button>
                <Button size="lg" className={`w-full hover:bg-muted-foreground ${level === 15 ? "bg-muted-foreground" : ""}`} onClick={() => setLevel(15)}>Medium</Button>
                <Button size="lg" className={`w-full hover:bg-muted-foreground ${level === 25 ? "bg-muted-foreground" : ""}`} onClick={() => setLevel(25)}>Hard</Button>
                <div className="grid grid-cols-2 gap-2 !mt-8">
                    <h2 className="text-xl font-semibold text-center dark:text-slate-100 !mb-4 sm:col-span-2">Select the the category</h2>
                    {categories.map((cat, i) => (
                        <Button key={i} size="lg" className={`w-full hover:bg-muted-foreground ${category === cat.words ? " bg-muted-foreground" : ""}`} onClick={() => {
                            setCategory(cat.words);
                            setTranslation(cat.translation);
                        }}>{cat.name}</Button>
                    ))}
                </div>
                <Button onClick={() => start(true)} size="lg" className="w-full mt-4">Start</Button>
            </div>
        ) : (
            <>
                <h1 className="text-4xl font-bold text-center mb-12">Memory Game</h1>
                <div className="flex justify-between items-center gap-12">
                    <p className="text-xl font-semibold">{`Moves - ${moves}`}</p>
                    <Button onClick={() => start(false)} size="lg">
                        Reset
                    </Button>
                </div>
                <div className="py-6 space-y-12 relative">
                    {gameOver ? (
                        <p className="text-center text-2xl font-semibold">Game Over! Congratulations! 👏🏻👏🏻</p>
                    ) : (
                        <div className={`grid ${level === 8 ? "grid-cols-[repeat(4,8.5rem)]" : (level === 15 ? "grid-cols-[repeat(6,8.5rem)]" : (level === 25 ? "grid-cols-[repeat(8,8.5rem)]" : ""))} gap-4 border-2 p-8 rounded-xl border-zinc-300`}>
                            {boardData.map((data, i) => {
                                const flipped = flippedCards.includes(i);
                                const matched = matchedCards.includes(i);
                                return (
                                    <div
                                        onClick={() => {
                                            updateActiveCards(i);
                                        }}
                                        key={i}
                                        className={`card cursor-pointer select-none transition-all duration-200 rounded-xl relative text-center font-bold text-4xl h-16 ${flipped || matched ? " [transform:rotateY(180deg)]" : ""} ${matched ? "text-white bg-amber-100" : ""} ${gameOver ? "pointer-events-none" : ""}`}
                                    >
                                        <div className="card-front text-slate-800 flex justify-center items-center align-middle text-center text-lg z-[2] absolute left-0 top-0 w-full h-full rounded-xl [transform:rotateY(180deg)] bg-zinc-100">{data}</div>
                                        <div className="card-back absolute left-0 top-0 w-full h-full rounded-xl bg-zinc-300 z-[1] [transform:rotateY(0deg)] after:absolute after:w-3/4 after:top-0 after:left-0 after:h-3/4 after:rounded-xl"></div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <ul className="mx-auto grid grid-cols-2">
                        {translation.map((word, i) => (
                            <li className="text-lg font-semibold" key={i}>{category[i]}  -  {word}</li>
                        ))}
                    </ul>
                </div>
            </>
        )

    );
}