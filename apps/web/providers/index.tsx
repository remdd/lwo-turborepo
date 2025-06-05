"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BasketProvider } from "./basket";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <BasketProvider>{children}</BasketProvider>
    </QueryClientProvider>
  );
}
