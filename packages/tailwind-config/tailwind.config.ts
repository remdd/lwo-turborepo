import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "lwo-blue-lighter": "#e6f4ff",
        "lwo-blue-light": "#70d0f6",
        "lwo-blue-dark": "#4992bd",
        "lwo-orange": "#d29500",
      },
      // fontFamily: {
      //   body: ["Nunito", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
export default config;
