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

export type BasketStoreState = {
  id: string;
  expiry: Date;
  initBasketStore: () => void;
  isBasketExpired: () => boolean;
};

export const useBasketStore = create<BasketStoreState>()(
  persist(
    (set, get) => ({
      id: "",
      expiry: new Date(),
      initBasketStore: () => {
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
