/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        ink: "#1A1A1A",
        line: "#E6E4DE",
        muted: "#4A4A46",
        subtle: "#6B6B66",
        forest: {
          DEFAULT: "#0B2B27",
          raised: "#0F3631",
          line: "#1F4741",
          border: "#3C6A63",
          text: "#C9DCD8",
          dim: "#9FC2BC",
        },
        mint: "#7FD3C8",
        accent: {
          DEFAULT: "#0E6E66",
          dark: "#0A4F49",
          soft: "#E3F0EE",
          ink: "#0A3D39",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1040px",
        read: "700px",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#2A2A27",
            "--tw-prose-headings": theme("colors.ink"),
            "--tw-prose-links": theme("colors.accent.DEFAULT"),
            "--tw-prose-bold": theme("colors.ink"),
            "--tw-prose-code": theme("colors.ink"),
            "--tw-prose-pre-bg": "#1E1E1C",
            "--tw-prose-pre-code": "#EDEDE8",
            "--tw-prose-th-borders": theme("colors.line"),
            "--tw-prose-td-borders": theme("colors.line"),
            maxWidth: "none",
            "h2, h3": { fontFamily: theme("fontFamily.display").join(",") },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            ":not(pre) > code": {
              backgroundColor: "#EFEDE7",
              borderRadius: "4px",
              padding: "0.15em 0.35em",
              fontWeight: "500",
            },
            img: { borderRadius: "10px" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
