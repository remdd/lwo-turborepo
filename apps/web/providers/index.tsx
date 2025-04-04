import { BasketProvider } from "./basket";

export function Providers({ children }: { children: React.ReactNode }) {
  return <BasketProvider>{children}</BasketProvider>;
}
