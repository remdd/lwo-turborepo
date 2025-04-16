"use client";

import { CMS } from "@lwo/cms";
import { createContext, ReactNode, useContext, useReducer } from "react";

type BasketItem = {
  activityTicket: CMS.ActivityTicket;
  date: Date;
  quantity: number;
};

interface BasketState {
  items: BasketItem[];
}

interface BasketContextProps {
  state: BasketState;
  addItem: (item: BasketItem) => void;
  removeItem: (id: string) => void;
  clearBasket: () => void;
}

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

const basketReducer = (state: BasketState, action: any): BasketState => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_BASKET":
      return {
        ...state,
        items: [],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(basketReducer, { items: [] });

  const addItem = (item: BasketItem) =>
    dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearBasket = () => dispatch({ type: "CLEAR_BASKET" });

  return (
    <BasketContext.Provider value={{ state, addItem, removeItem, clearBasket }}>
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
