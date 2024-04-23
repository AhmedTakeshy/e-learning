const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

type KeyboardProps = {
    activeLetter: string[],
    inactiveLetter: string[],
    addGuessLetter: (letter: string) => void,
    disabled: boolean
}

export default function Keyboard({ activeLetter, inactiveLetter, addGuessLetter, disabled = false }: KeyboardProps) {
    return (
        <div className='grid sm:grid-cols-7 place-content-center gap-1 lg:grid-cols-11 xl:grid-cols-[repeat(13,minmax(5rem,1fr))] md:grid-cols-9 grid-cols-5 lg:gap-3'>
            {KEYS.map(key => {
                const isActive = activeLetter.includes(key);
                const isInactive = inactiveLetter.includes(key);
                return (
                    <button
                        onClick={() => addGuessLetter(key)}
                        className={`w-full border-4 border-black bg-transparent aspect-square rounded-2xl text-[2.5rem] uppercase p-2 font-bold cursor-pointer text-black max-[480px]:w-12 max-[480px]:h-12 max-[480px]:text-xl max-[480px]:border-2 max-[480px]:flex justify-center items-center max-[480px]:ml-1.5 hover:text-indigo-400  ${isActive ? "bg-lime-500 hover:text-white text-white" : ''} ${isInactive ? "opacity-30 cursor-not-allowed hover:text-black" : ''}`}
                        disabled={isInactive || isActive || disabled}
                        key={key}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}