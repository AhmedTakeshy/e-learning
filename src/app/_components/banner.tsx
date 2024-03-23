import React from 'react'

export default function Banner() {
    return (
        <section id='banner' className='container flex flex-col px-4 justify-center items-center text-center tracking-[2px] uppercase '>
            {/* <Image src={bannerBg} alt="Banner" priority className="object-cover w-screen h-screen" /> */}
            <h2 className="text-4xl font-bold text-center">From button to memory</h2>
            <h1 className="my-3 font-black text-7xl"><span className="text-transparent text- animate-text bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500">enjoy </span>with us</h1>
            <p className="text-2xl tracking-normal normal-case">We did not ignore you pleasure while teaching.</p>
        </section>
    )
}
