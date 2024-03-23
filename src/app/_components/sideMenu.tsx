"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CgGames } from 'react-icons/cg'
import { FaRegUser } from 'react-icons/fa6'
import { FiMessageSquare } from 'react-icons/fi'
import { HiOutlineHomeModern } from 'react-icons/hi2'

export default function SideMenu() {
    const [sideMenu, setSideMEnu] = useState(false);

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollTo();
        window.addEventListener("scroll", () => {
            window.scrollY >= 300 ? setSideMEnu(true) : setSideMEnu(false);
        });
    }, []);

    return (
        <ul
            className={`z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-gray-800/30 dark:bg-gray-700/20 py-8 px-2 shadow-lg backdrop-blur dark:border-slate-600/60  fixed top-2/4 -translate-y-2/4 ${sideMenu ? "left-8 " : "-left-24"} transition-all min-h-[auto] min-w-[64px] flex-col rounded-full border duration-500 ease-in-out font-nekst`}
        >
            <Link href="/" className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'>
                <HiOutlineHomeModern size={20} />
                <small className="text-xs font-medium text-center">Home</small>
            </Link>
            <Link href="/#games" className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'>
                <CgGames size={20} />
                <small className="text-xs font-medium text-center">Games</small>
            </Link>
            <Link href="/#contact" className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'>
                <FiMessageSquare size={20} />
                <small className="text-xs font-medium text-center">Contact</small>
            </Link>
            <hr className="dark:border-gray-700/60" />
            <Link href="/#profile" className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'>
                <FaRegUser size={20} />
                <small className="text-xs font-medium text-center">Profile</small>
            </Link>
        </ul>
    )
}
