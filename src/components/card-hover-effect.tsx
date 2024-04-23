import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
    level
}: {
    items: {
        title: string;
        description: string;
        link: string;
        src: string;
        level: string | undefined;

    }[];
    className?: string;
    level: string | undefined;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-2.5  py-10",
                className
            )}
        >
            {items
                .filter((item) => item.level === level || level === undefined)
                .map((item, idx) => (
                    <Link
                        href={item?.link}
                        key={item?.link}
                        className="relative group  block p-2 h-80 md:w-96 w-80"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-slate-800 dark:bg-slate-300 block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card src={item.src} title={item.title}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    </Link>
                ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
    src,
    title,
}: {
    className?: string;
    children: React.ReactNode;
    src: string;
    title: string;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden  border border-none dark:border-white/[0.2] group-hover:border-slate-800 relative z-20",
                className
            )}
        >
            <div className="absolute z-30 transition-all bg-slate-900/75 duration-500 bottom-0 group-hover:left-0 -left-96 w-full h-full rounded-2xl" />
            <Image src={`${src}`} alt={`${title}`} className=" object-fill" fill sizes="100" />
            <div className="relative z-40">
                <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-slate-100 font-bold tracking-wide mt-4 text-lg", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-slate-100 tracking-wide leading-relaxed text-base",
                className
            )}
        >
            {children}
        </p>
    );
};
