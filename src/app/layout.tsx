import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/themeProvider";
import { manrope, nekst, neonderthaw } from "@/assets/fonts/fonts";
// import AuthProvider from "@/context/authProvider";
import { Toaster } from "@/components/ui/sonner";
import NavMenu from "@/app/_components/navMenu";
import ScrollButton from "@/components/scrollButton";
import SideMenu from "./_components/sideMenu";

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
      <body className={`${manrope.variable} ${neonderthaw.variable} ${nekst.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AuthProvider> */}
          <NavMenu />
          <ScrollButton />
          <SideMenu />
          <main className="h-[5000px]">
            {children}
          </main>
          <Toaster richColors />
          {/* </AuthProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
