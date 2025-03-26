import { Luckiest_Guy, Nunito, Poetsen_One } from "next/font/google";

// Main body font
export const body = Nunito({ subsets: ["latin"] });

// Cursive header font
export const title = Poetsen_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const subtitle = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});
