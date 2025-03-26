import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#ecf4f8",
          100: "#c7ddeb",
          200: "#a1c7dd",
          300: "#7cb1cf",
          400: "#579ac2",
          500: "#3d81a8",
          600: "#306483",
          700: "#22475e",
          800: "#142b38",
          900: "#070e13",
        },
        "lwo-orange": "#d29500",
        "lwo-yellow": "#fdc000",
      },
    },
  },
  plugins: [],
  // @TODO - we want to allow all classes to be used in each package, so in development we whitelist everything. Should be streamlined for production.
  safelist: [
    {
      pattern: /.*/,
    },
  ],
};
export default config;
