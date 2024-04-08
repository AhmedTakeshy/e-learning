import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/themeProvider";
import { manrope, nekst, neonderthaw } from "@/assets/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
import NavMenu from "@/app/_components/navMenu";
import ScrollButton from "@/components/scrollButton";
import SideMenu from "./_components/sideMenu";
import MusicPlayer from "./_components/musicPlayer";

export const metadata: Metadata = {
  title: "E-Learning",
  description: "E-Learning platform for everyone to learn English by playing games for all levels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${neonderthaw.variable} ${nekst.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu />
          <ScrollButton />
          <SideMenu />
          <MusicPlayer />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
