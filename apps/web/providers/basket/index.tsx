import { type CMS } from "@lwo/cms";
import { createContext, ReactNode, useContext } from "react";
import { type BasketStoreState, useBasketStore } from "store";

export type BasketItem = {
  id: string;
  expiry: Date;
  activityTicket: CMS.ActivityTicket;
  date: Date;
  quantity: number;
};

type BasketContextProps = Pick<BasketStoreState, "id" | "expiry"> & {
  items: BasketItem[];
  addItem: (item: Omit<BasketItem, "expiry" | "id">) => void;
  emptyBasket: () => void;
};

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

const BasketProvider = ({ children }: { children: ReactNode }) => {
  const { id, expiry, initBasketStore, isBasketExpired } = useBasketStore();
  /*
    @TODO - this basket provider should bring together the client-side basket id & expiry (zustand) with the server-side state, ie individual items in the basket (react-query).

    This should be the only basket hook with which the rest of the app interacts. The rest of the app should not need to know about the basket store or react-query.
  */

  const items: BasketItem[] = [];

  // This function should be called before any basket action is taken, to ensure that the basket is present and not expired.
  function validateBasket() {
    if (!id || isBasketExpired()) {
      emptyBasket();
      initBasketStore();
    }
  }

  function addItem(item: Omit<BasketItem, "expiry" | "id">) {
    validateBasket();
    console.log(item);
  }

  function emptyBasket() {
    validateBasket();
    console.log("empty basket");
  }

  return (
    <BasketContext.Provider value={{ id, expiry, items, addItem, emptyBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

const useBasket = (): BasketContextProps => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export { BasketProvider, useBasket };
