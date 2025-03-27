import sharedConfig from "@lwo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content" | "safelist"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
  // @TODO - we want to allow all classes to be used in each package, so in development we whitelist everything. Should be streamlined for production.
  safelist: [
    {
      pattern: /.*/,
    },
  ],
};

export default config;
