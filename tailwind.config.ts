import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /^bg-gradient-to-(r|br|b|bl|l)$/ },
    { pattern: /^from-(violet|purple|pink|blue|cyan|amber|orange|red|indigo|green|emerald|sky|teal|slate)-(400|500|600|700)$/ },
    { pattern: /^to-(violet|purple|pink|blue|cyan|amber|orange|red|indigo|green|emerald|sky|teal|slate)-(400|500|600|700)$/ },
    { pattern: /^via-(violet|purple|pink|blue|cyan|amber|orange|red|indigo|green|emerald|sky|teal|slate)-(400|500|600|700)$/ },
    { pattern: /^shadow-(violet|purple|pink|blue|cyan|amber|orange|red|indigo|green|sky|teal)-(100|200|300)$/ },
    { pattern: /^bg-(violet|purple|pink|blue|cyan|amber|orange|red|indigo|green|emerald|sky|teal|slate)-(50|100|200|300|400|500|600|700)$/ },
    { pattern: /^text-(violet|purple|pink|blue|cyan|amber|orange|red|indigo|green|emerald|sky|teal|slate)-(100|200|300|400|500|600|700|800)$/ },
    { pattern: /^border-(violet|purple|pink|blue|cyan|amber|orange|red|indigo|green|sky|teal)-(100|200|300|400|500)$/ },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
