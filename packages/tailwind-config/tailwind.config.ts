import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "lwo-blue-50": "#ecf4f8",
        "lwo-blue-100": "#c7ddeb",
        "lwo-blue-200": "#a1c7dd",
        "lwo-blue-300": "#7cb1cf",
        "lwo-blue-400": "#579ac2",
        "lwo-blue-500": "#3d81a8",
        "lwo-blue-600": "#306483",
        "lwo-blue-700": "#22475e",
        "lwo-blue-800": "#142b38",
        "lwo-blue-900": "#070e13",
        "lwo-orange": "#d29500",
        "lwo-yellow": "#fdc000",
      },
    },
  },
  plugins: [],
};
export default config;
