
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex items-center justify-between w-screen ">
            <div className="flex flex-col items-center justify-between px-5 text-gray-700 md:flex-row">
                <div className="w-full mx-8 lg:w-1/2 dark:text-slate-100">
                    <span className="mb-8 font-bold text-blue-500 text-7xl">404</span>
                    <p className="mb-8 text-2xl font-light leading-normal md:text-3xl">
                        Sorry we couldn&apos;t find this page.
                    </p>
                    <Link href="/" className="inline px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-500 bg-blue-600 border border-transparent rounded-lg shadow-2xl focus:outline-none active:bg-purple-600 hover:bg-purple-700">
                        Go back home
                    </Link>
                </div>
                <div className="w-full mx-5 my-12 lg:flex lg:justify-end lg:w-1/2">
                    <Image width={700} height={436} src="/images/not-found.png" className="w-full" alt="Page not found" />
                </div>
            </div>
        </div>
    )
}
