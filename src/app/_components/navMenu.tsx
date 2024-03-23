"use client"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { ModeToggler } from "@/components/modeToggler"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button, buttonVariants } from "@/components/ui/button"

import { LuUserCircle2 } from "react-icons/lu";
import { signOut, useSession } from "next-auth/react"


export default function NavMenu() {
    const [open, setOpen] = useState<boolean>(false)
    const { data: session } = useSession()


    return (
        <header className={`flex mt-6 mb-10 mx-auto md:justify-around justify-between items-center w-full md:px-8 px-3 font-nekst`}>
            <h1 className="text-5xl text-center font-neon dark:animate-dark-neonize">
                E-learning
            </h1>
            <NavigationMenu className={` items-center  justify-between hidden gap-2 md:flex`}>
                <NavigationMenuList className="items-center justify-between hidden gap-2 md:flex">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base font-bold`}>Home</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/products" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base font-bold`}>Products</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/services" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base font-bold`}>Services</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base font-bold`}>About</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="items-center justify-between hidden gap-4 md:flex ">
                {session?.user ?
                    <Button
                        className="w-full md:w-auto"
                        variant="destructive"
                        onClick={() => signOut({ callbackUrl: "/" })}
                    >
                        Sign out
                    </Button>
                    :
                    <Link href="/signin" aria-description="open profile" aria-label="open profile" aria-controls="navbar-default" aria-expanded="false" className={buttonVariants({ variant: "outline" })}>
                        Sign in
                    </Link>}
                <ModeToggler />
            </div>

            {/* Nav for small screens */}
            <div className={`flex items-center justify-between h-full md:hidden rounded-xl `}>
                <Popover onOpenChange={setOpen} open={open}>
                    <PopoverTrigger aria-controls="2" aria-labelledby="open menu button" asChild>
                        <div className="flex items-center gap-2">
                            <Button aria-description="open main menu" aria-label="open menu" data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </Button>
                            <ModeToggler />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="relative w-screen mx-px ">
                        <div className="flex flex-col items-center mx-auto">
                            <NavigationMenu>
                                <NavigationMenuList className="flex flex-col items-center justify-center gap-2">
                                    <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink onClick={() => setOpen(false)} className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/products" legacyBehavior passHref>
                                            <NavigationMenuLink onClick={() => setOpen(false)} className={navigationMenuTriggerStyle()}>Products</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/services" legacyBehavior passHref>
                                            <NavigationMenuLink onClick={() => setOpen(false)} className={navigationMenuTriggerStyle()}>Services</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/about" legacyBehavior passHref>
                                            <NavigationMenuLink onClick={() => setOpen(false)} className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            <Link href="/signin" className={`${buttonVariants({ variant: "default" })} my-2 w-full mx-4 relative group hover:animate-flip perspective hover:bg-cyan-950`}>
                                <LuUserCircle2 className="w-6 h-6" />
                                <span className="flex items-center justify-center text-lg shadow-md shadow-blue-500 backface">Sign in</span>
                            </Link>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    )
}