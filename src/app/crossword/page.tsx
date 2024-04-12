
export default function page() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <iframe
                className='border-none w-3/4 block mt-8 rounded-2xl'
                height="640"
                name="crossword"
                allow="web-share"
                allowFullScreen
                src="https://amuselabs.com/pmm/date-picker?set=a2cb26af9da72e25a47ee7235352ec4e96058d6aa183c1c65a7b28550d9c9ef3&style=1&embed=1"
                aria-label="Puzzle Me Game"
            />
        </div>
    )
}

//try to remove the publish date from the crossword game name