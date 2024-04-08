import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        man: ["var(--font-manrope)"],
        neon: ["var(--font-neonderthaw)"],
        nekst: ["var(--font-nekst)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "dark-neonize": {
          from: {
            textShadow: "0 0 4px #fff, 0 0 10px #fff, 0 0 30px #FF1E1E, 0 0 50px #FF1E1E, 0 0 70px #FF1E1E, 0 0 90px #FF1E1E"
          },
          to: {
            textShadow: "0 0 2px #fff, 0 0 5px #fff, 0 0 15px #FF1E1E, 0 0 25px #FF1E1E, 0 0 35px #FF1E1E, 0 0 45px #FF1E1E"
          }
        },
        neonize: {
          from: {
            textShadow: "0 0 4px #fff, 0 0 10px #fff, 0 0 30px #FFF455, 0 0 50px #FFF455, 0 0 70px #FFF455, 0 0 90px #FFF455"
          },
          to: {
            textShadow: "0 0 2px #fff, 0 0 5px #fff, 0 0 15px #FFF455, 0 0 25px #FFF455, 0 0 35px #FFF455, 0 0 45px #FFF455"
          }
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "dark-neonize": "dark-neonize 2s infinite alternate ease-in-out",
        neonize: "neonize 2s infinite alternate ease-in-out",
        text: "text 5s ease infinite",
        rotate: "rotate 3s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config