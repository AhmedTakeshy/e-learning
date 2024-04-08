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
    const [isPlaying, setIsPlaying] = useState(false)



    const handlePlay = () => {
        setIsPlaying(prev => !prev)

    }

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
            autoPlay={true}
            autoPlayAfterSrcChange={true}
            onEnded={handleClickNext}
            onPlay={handlePlay}
            showFilledProgress={false}
            customAdditionalControls={[]}
            customProgressBarSection={[]}
            customVolumeControls={[]}
            volume={1}
            showSkipControls
            showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
            src={playlist[currentTrack].src}
            customIcons={{
                play: <span className='block p-1.5 bg-white rounded-full shadow-md hover:bg-rose-600 -rotate-90'>
                    <TbPlayerPlayFilled className='text-indigo-400 w-7 h-7 hover:text-white hover:fill-white [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in' />
                </span>,
                pause: <span className='block p-1.5  rounded-full shadow-md bg-rose-600 hover:bg-white -rotate-90'>
                    <TbPlayerPauseFilled className='text-white w-7 h-7 fill-white hover:text-indigo-400 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in' />
                </span>,
                next: <TbPlayerTrackNext className='fill-indigo-400 w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:fill-white text-white hover:text-rose-600 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in' />,
                previous: <TbPlayerTrackPrev className='fill-indigo-400 w-7 h-7 hover:fill-white text-white hover:text-rose-600 transition-all duration-500 group-hover:opacity-100 opacity-0 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in' />,
                volume: <TbVolume className='fill-indigo-400 w-7 h-7 hover:fill-white text-white hover:text-rose-600 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in' />,
                volumeMute: <TbVolumeOff className='fill-indigo-400 w-7 h-7 hover:fill-white text-white hover:text-rose-600 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in' />,

            }}
            className='fixed !w-1/12 p-4 rounded-lg shadow-lg top-8 right-0 duration-1000 ease-in-out transition-all !bg-transparent group rotate-90'
        />
    )
}
