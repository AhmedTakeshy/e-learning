"use client"
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { TbPlayerPauseFilled, TbPlayerPlayFilled, TbPlayerTrackNext, TbPlayerTrackPrev, TbVolume, TbVolumeOff } from "react-icons/tb";

const playlist = [
    {
        src: '/music/Argy-Aria-ft-Omnya-10.mp3',
    },
    {
        src: '/music/MRAK_-_Equilibrium_Extended_Mix.mp3',
    },
]

export default function MusicPlayer() {
    const [currentTrack, setTrackIndex] = useState(0)

    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleClickPrev = () => {
        setTrackIndex((currentTrack) =>
            currentTrack > 0 ? currentTrack - 1 : playlist.length - 1
        );
    };

    return (

        <AudioPlayer
            // autoPlay
            preload='metadata'
            loop
            autoPlayAfterSrcChange={false}
            onPlay={() => console.log('onPlay')}
            onEnded={handleClickNext}
            showFilledProgress={false}
            customAdditionalControls={[]}
            customProgressBarSection={[]}
            customVolumeControls={[]}
            volume={1.0}
            showSkipControls
            showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
            src={playlist[currentTrack].src}
            customIcons={{
                play: <span className='block p-1.5 bg-slate-100 rounded-full  hover:bg-rose-600 -rotate-90'>
                    <TbPlayerPlayFilled className='text-indigo-400 w-7 h-7 hover:text-white hover:fill-white [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in hover:animate-none animate-rotate' />
                </span>,
                pause: <span className='block p-1.5  rounded-full  bg-rose-600 hover:bg-slate-100 -rotate-90'>
                    <TbPlayerPauseFilled className='text-white w-7 h-7 fill-white hover:text-indigo-400 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in animate-rotate hover:animate-none' />
                </span>,
                next: <TbPlayerTrackNext className='fill-indigo-400 w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:fill-white text-white hover:text-rose-600 [&_*]:transition-all [&_*]:duration-150 [&_*]:ease-in' />,
                previous: <TbPlayerTrackPrev className='fill-indigo-400 w-7 h-7 hover:fill-white text-white hover:text-rose-600 transition-all duration-500 group-hover:opacity-100 opacity-0 [&_*]:transition-all [&_*]:duration-150 [&_*]:ease-in' />,
                volume: <TbVolume className='fill-indigo-400 w-7 h-7 hover:fill-white text-white hover:text-rose-600 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in' />,
                volumeMute: <TbVolumeOff className='fill-indigo-400 w-7 h-7 hover:fill-white text-white hover:text-rose-600 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in' />,

            }}
            className='music z-50 fixed !w-1/12 p-4 rounded-lg top-12 right-0 duration-1000 ease-in-out transition-all group rotate-90'
        />
    )
}
