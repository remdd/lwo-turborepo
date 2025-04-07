"use client";

import { useBasket } from "providers/basket";

export function BasketControls() {
  const basket = useBasket();

  function onClear() {
    console.log(basket);
    basket.clearBasket();
    console.log(basket);
  }

  return (
    <div>
      <button onClick={onClear}>Clear basket</button>
    </div>
  );
}
