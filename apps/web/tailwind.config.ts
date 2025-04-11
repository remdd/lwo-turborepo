// tailwind config is required for editor support

import sharedConfig from "@lwo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets" | "safelist"> = {
  content: ["./app/**/*.tsx", "./cms/**/*.tsx", "./components/**/*.tsx"],
  presets: [sharedConfig],
  safelist: [
    {
      pattern: /w-/,
      variants: ["sm", "md", "lg"],
    },
    {
      pattern: /ml-/,
      variants: ["sm", "md", "lg"],
    },
    {
      pattern: /mr-/,
      variants: ["sm", "md", "lg"],
    },
    {
      pattern: /items-/,
      variants: ["sm", "md", "lg"],
    },
  ],
};

export default config;
