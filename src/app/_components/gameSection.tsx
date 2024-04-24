"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/aurora-background";
import { HoverEffect } from "@/components/card-hover-effect";

const games = [
    {
        title: "Crossword Puzzle (Easy)",
        description: "A crossword puzzle is a word puzzle that usually takes the form of a square or a rectangular grid of white- and black-shaded squares.",
        link: "/crossword-easy",
        src: "/images/crosswordEasy.webp",
        level: "easy"
    },
    {
        title: "Word Search",
        description: "A word search is a puzzle that consists of letters of words placed in a grid.",
        link: "/word-search",
        src: "/images/wordsearch.jpg",
        level: "easy"
    },
    {
        title: "Quiz",
        description: "A quiz is a form of game or mind sport in which players attempt to answer questions correctly.",
        link: "/quiz",
        src: "/images/quiz.jpg",
        level: "easy"
    },
    {
        title: "Memory Game",
        description: "A memory game is a game where you have to find matching pairs of cards.",
        link: "/memory-game",
        src: "/images/memory.webp",
        level: "hard"
    },
    {
        title: "Hangman",
        description: "Hangman is a classic word game in which you must guess as many secret words as you can before time runs out!",
        link: "/hangman",
        src: "/images/hangman.png",
        level: "hard"
    },
    {
        title: "Crossword Puzzle (Hard)",
        description: "A crossword puzzle is a word puzzle that usually takes the form of a square or a rectangular grid of white- and black-shaded squares.",
        link: "/crossword-hard",
        src: "/images/crosswordHard.jpg",
        level: "hard"
    },
]

type GameSectionProps = {
    level: string | undefined;
}

export default function GameSection({ level }: GameSectionProps) {

    return (
        <AuroraBackground className="z-10 w-screen h-auto mt-32">
            <section
                id="games"
                className="mx-4 text-center dark:text-white text-slate-800"
            >
                <motion.div
                    initial={{ opacity: 0.0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col items-center justify-center gap-4 mt-4">
                    <h1 className="text-2xl font-bold text-center lg:text-7xl md:text-4xl font-nekst">Game Section</h1>
                    <p className="mb-4 text-center uppercase lg:text-2xl md:text-lg">
                        Here where the <span className="text-transparent animate-text bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500">fun </span> begins! <br /> Play games and learn at the same time.
                    </p>
                    <h2 className="lg:text-4xl md:text-2xl sm:text-lg">
                        First let&apos;s start with your level, choose one of the following:
                    </h2>
                    <div className="flex items-center justify-between gap-3 sm:gap-6">
                        <Link href={{ query: { level: null } }} scroll={false} className="p-[3px] relative font-semibold">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                All
                            </div>
                        </Link>
                        <Link className="p-[3px] relative font-semibold" scroll={false} href={{ query: { level: "A1-A2" } }}>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                A1/A2
                            </div>
                        </Link>
                        <Link href={{ query: { level: "B1-B2" } }} scroll={false} className="p-[3px] relative font-semibold">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                B1/B2
                            </div>
                        </Link>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2 my-8 lg:text-xl md:text-lg">
                        <p>
                            If you don&apos;t yet, it is not an issue here you can find out your level.
                        </p>
                        <Link
                            className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-full w-fit mt-2 `}
                            target="_blank"
                            href="https://www.cambridgeenglish.org/test-your-english/general-english/"
                        >
                            Take a level test
                        </Link>
                    </div>
                    <HoverEffect level={level} items={games} />
                </motion.div>
            </section>
        </AuroraBackground>
    )
}