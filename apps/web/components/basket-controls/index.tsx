"use client";

import { useBasketStore } from "store";

export function BasketControls() {
  const { emptyBasket } = useBasketStore();

  function onClear() {
    emptyBasket();
  }

  return (
    <div>
      <button onClick={onClear}>Clear basket</button>
    </div>
  );
}
