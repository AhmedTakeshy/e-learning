"use client"
import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io"
import { Button } from './ui/button'

export default function ScrollButton() {
    const [showBtn, setShowBtn] = useState(false);

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollTo();
        window.addEventListener("scroll", () => {
            window.scrollY >= 550 ? setShowBtn(true) : setShowBtn(false);
        });
    }, []);

    return (
        <Button aria-label='scroll' aria-description='scroll to top' onClick={scrollTo} size="icon" className={`border-1 ${showBtn ? "opacity-100" : "opacity-0 pointer-events-none"} duration-300 transition-all shadow-md z-30 fixed  flex items-center justify-center right-4 bottom-4`} >
            <IoIosArrowUp size={25} />
        </Button>
    )
}
