"use client"
// import Player from '@madzadev/audio-player'
// import '@madzadev/audio-player/dist/index.css'
import { TbPlayerPlayFilled } from "react-icons/tb";

const tracks = [
    {
        url: 'https://music.youtube.com/watch?v=1K6OLeYQftU&list=RDAMVM1K6OLeYQftU',
        title: 'Song 1',
        tags: ['house'],
    },
    {
        url: 'https://music.youtube.com/watch?v=Rybjj4Gpm_A&si=s5IPdqBezDlpSK4-',
        title: 'Song 2',
        tags: ['electronic'],
    },
]

export default function MusicPlayer() {
    return (
        <div className='fixed p-4 [&_*]:transition-all [&_*]:duration-150 [&_*]:ease-in rounded-full cursor-pointer bg-slate-100 top-12 right-8 group'>
            <span className='block px-3 py-3 bg-white rounded-full shadow-md group-hover:bg-rose-600'>
                <TbPlayerPlayFilled className='text-indigo-400 w-7 h-7 group-hover:text-white group-hover:fill-white' />
            </span>
        </div>
    )
}

{/* <Player trackList={tracks} /> */ }