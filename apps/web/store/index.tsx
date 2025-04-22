import { CMS } from "@lwo/cms";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type BasketItem = {
  id: string;
  activityTicket: CMS.ActivityTicket;
  date: Date;
  quantity: number;
};

interface BasketState {
  items: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (id: string) => void;
  emptyBasket: () => void;
}

// @TODO - basket items need updating in BE DB
// status = 'HELD' | 'RELEASED' | 'CONFIRMED' | 'CANCELLED'
// @TODO - user sessions

export const useBasketStore = create<BasketState>()(
  persist(
    // @TODO - does it matter that 'get' isn't being used here?
    (set, get) => ({
      items: [],
      addToBasket: (item) =>
        set((state) => ({ items: [...state.items, item] })),
      removeFromBasket: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      emptyBasket: () => set(() => ({ items: [] })),
    }),
    {
      name: "lwo-basket",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// export const useBasketStore = create<BasketState>((set) => ({
//   items: [],
//   addToBasket: (item) => set((state) => ({ items: [...state.items, item] })),
//   removeFromBasket: (id) =>
//     set((state) => ({
//       items: state.items.filter((item) => item.id !== id),
//     })),
//   emptyBasket: () => set(() => ({ items: [] })),
// }));
