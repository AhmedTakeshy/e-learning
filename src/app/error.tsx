'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center w-full mt-8 h-[calc(100vh-13.68rem)] space-x-8 space-y-16 lg:flex-row lg:space-y-0 2xl:space-x-0">
            <div className="flex flex-col items-center justify-center w-full text-center lg:w-1/2 lg:px-2 xl:px-0">
                <span className="font-bold tracking-wider text-gray-300 text-7xl md:text-8xl lg:text-9xl">500</span>
                <p className="mt-2 text-4xl font-bold tracking-wider text-gray-300 md:text-5xl lg:text-6xl">Server error.</p>
                <p className="my-12 text-lg text-gray-500 md:text-xl lg:text-2xl">
                    Unfortunately, there was an error with our servers.
                </p>
                <Button variant="outline" size="lg" onClick={reset}>
                    Try again.
                </Button>
            </div>
            <div className="flex justify-center w-1/2 p-4 lg:h-full lg:items-baseline">
                <Image src="/images/not-found.png" alt="pageNot found" width={700} height={500} className="object-cover" />
            </div>
        </div>
    )
}