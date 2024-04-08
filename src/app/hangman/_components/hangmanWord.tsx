import { Button } from "@/components/ui/button"

type HangmanWordProps = {
    guessLetters: string[],
    wordToGuess: string,
    result?: boolean
    onReset?: () => void
}

export default function HangmanWord({ guessLetters, wordToGuess, onReset, result = false }: HangmanWordProps) {
    return (
        <div className="flex items-end justify-between gap-12">
            <div className='flex gap-3 text-3xl font-bold uppercase lg:text-6xl'>
                {/* take the word, create individual characters, write with map */}
                {wordToGuess.split('').map((letter, index) => (
                    <span className='border-b-8 border-black rounded-md' key={index}>
                        <span style={{
                            visibility: guessLetters.includes(letter) || result
                                ? 'visible'
                                : 'hidden',
                            color: !guessLetters.includes(letter) && result ? '#BE123C' : '#1C1917'
                        }}>
                            {letter}
                        </span>
                    </span>
                ))}
            </div>
            {result ? <Button size="lg" onClick={onReset} variant="secondary" className="shadow-lg">Restart</Button> : null}
        </div>
    )
}