import sharedConfig from "@lwo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content" | "safelist"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
