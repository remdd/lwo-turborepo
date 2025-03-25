import { Luckiest_Guy, Nunito, Shadows_Into_Light_Two } from "next/font/google";

// Main body font
export const body = Nunito({ subsets: ["latin"] });

// Cursive header font
export const title = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
});

export const subtitle = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});
