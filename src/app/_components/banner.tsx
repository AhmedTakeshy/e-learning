import React from 'react'

export default function Banner() {
    return (
        <section id='banner' className='container'>
            {/* <Image src={bannerBg} alt="Banner" priority className="object-cover w-screen h-screen" /> */}
            <div className="flex flex-col px-4 justify-center items-center absolute inset-0 z-[1] text-center tracking-[2px] uppercase text-white">
                <h2 className="text-4xl font-bold text-center">From button to memory</h2>
                <h1 className="my-3 font-black text-7xl"><span className="text-transparent text- animate-text bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500">Fitness </span>with us</h1>
                <p className="text-2xl tracking-normal normal-case">Build your body and fitness with professional touch.</p>
            </div>
        </section>
    )
}
