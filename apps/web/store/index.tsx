import { CMS } from "@lwo/cms";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { getInitBasket, isBasketExpired } from "./helpers";

export type BasketItem = {
  id: string;
  expiry: Date;
  activityTicket: CMS.ActivityTicket;
  date: Date;
  quantity: number;
};

interface BasketState {
  id: string;
  expiry: Date;
  initBasket: () => void;
  isBasketExpired: () => boolean;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      id: "",
      expiry: new Date(),
      initBasket: () => {
        set(() => getInitBasket());
      },
      isBasketExpired: () => {
        const { expiry } = get();
        return isBasketExpired(expiry);
      },
    }),
    {
      name: "lwo-basket",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
