"use client"
import { AnimatedTooltip } from '@/components/animated-tooltip';
import { BackgroundBeams } from '@/components/background-beams'
import Link from 'next/link'

export default function Footer() {
    const team = [
        {
            id: 1,
            name: "Hatice Özge Gice",
            designation: "Team Leader",
            image: "/images/ozge.webp",
        },
        {
            id: 2,
            name: "Ahmed Abdelsamie",
            designation: "Web Developer",
            image: "/images/ahmed.jpeg",
        },
        {
            id: 3,
            name: "Batuhan Yaşılak",
            designation: "Researcher for: Games",
            image: "/images/bat.jpg",
        },
        {
            id: 4,
            name: "Okan Sami Yücel",
            designation: "Researcher for: Visual Arts",
            image: "/images/okan.jpg",
        },
        {
            id: 5,
            name: "Seyfullah Altıok",
            designation: "Researcher for: Music Effects",
            image: "/images/sayf.jpg",
        },

    ];
    return (
        <footer id="about" className='relative flex flex-col items-center justify-center gap-2 mt-20 mb-1 h-96'>
            <div className="flex flex-col justify-start gap-4 items-center pt-2.5 relative z-10">
                <div className="flex flex-row items-center justify-center w-full pt-12">
                    <AnimatedTooltip items={team} />
                </div>
                <p className="max-w-lg mx-4 my-2 leading-8 text-justify ">
                    We&apos;re a team of passionate student who decided to make a web app as a project for one of our courses. We made researches and tried to find most effective aspects for those who want to learn English, so we decided to make a web app that provides fun and challenging games. Addition to that, we provide music in app to make the experience more enjoyable. We hope you enjoy our app and learn English in a fun way.
                </p>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 pb-2 mt-8 text-center">
                <p>
                    Copyrights &copy; 2024 E-Learning All Rights Reserved.
                </p>
                <p>
                    Developed by
                    <Link
                        href="https://takeshy.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='font-bold text-transparent animate-text bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500'
                    > Takeshy
                    </Link>
                </p>
            </div>
            <BackgroundBeams className='rotate-180 ' />
        </footer>
    )
}
