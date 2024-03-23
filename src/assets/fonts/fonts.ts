import localFont from 'next/font/local'
import { Manrope, Neonderthaw } from 'next/font/google'

export const nekst = localFont({
    src: [
        {
            path: "./Nekst/nekst-regular.otf",
            weight: "400",
            style: "normal"
        },
        {
            path: "./Nekst/nekst-medium.otf",
            weight: "500",
            style: "normal"
        },
        {
            path: "./Nekst/nekst-semibold.otf",
            weight: "600",
            style: "normal"
        },
        {
            path: "./Nekst/nekst-bold.otf",
            weight: "700",
            style: "normal"
        },
        {
            path: "./Nekst/nekst-black.otf",
            weight: "800",
            style: "normal"
        }
    ],
    variable: "--font-nekst"
})

export const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-manrope"
})

export const neonderthaw = Neonderthaw({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
    variable: "--font-neonderthaw"
})