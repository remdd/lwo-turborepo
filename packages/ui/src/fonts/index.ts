import { Nunito, Shadows_Into_Light_Two } from "next/font/google";

// Main body font
export const nunito = Nunito({ subsets: ["latin"] });

// Cursive header font
export const shadows = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
});
