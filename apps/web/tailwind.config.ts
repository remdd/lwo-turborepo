// tailwind config is required for editor support

import sharedConfig from "@lwo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets" | "safelist"> = {
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig],
  safelist: [
    {
      pattern: /basis-/,
    },
    {
      pattern: /ml-/,
      variants: ["sm", "md", "lg"],
    },
    {
      pattern: /mr-/,
      variants: ["sm", "md", "lg"],
    },
  ],
};

export default config;
