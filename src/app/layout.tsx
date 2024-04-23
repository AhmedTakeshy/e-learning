import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/themeProvider";
import { manrope, nekst, neonderthaw } from "@/assets/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
import NavMenu from "@/app/_components/navMenu";
import ScrollButton from "@/components/scrollButton";
import SideMenu from "./_components/sideMenu";
import MusicPlayer from "./_components/musicPlayer";
import { headers } from "next/headers";
import Footer from "./_components/footer";
import { BackgroundBeams } from "@/components/background-beams";

export const metadata: Metadata = {
  title: "E-Learning",
  description: "E-Learning platform for everyone to learn English by playing games for all levels.",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  const headersList = headers()
  const isMobile = headersList.get("user-agent")?.includes("Mobile")
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
          {!isMobile && <SideMenu />}
          <MusicPlayer />
          <main className="">
            {children}
          </main>
          <Footer />
          <BackgroundBeams />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
