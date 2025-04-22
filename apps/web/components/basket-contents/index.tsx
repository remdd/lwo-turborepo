"use client";

import { Button, Card, Text } from "@lwo/ui/components";
import { displayDate } from "@lwo/utils";
import { useBasketStore } from "store";

export function BasketContents() {
  const { emptyBasket, items } = useBasketStore();

  function onClear() {
    emptyBasket();
  }

  if (!items) return null;

  return (
    <Card>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="border-bottom flex items-center justify-between py-2"
          >
            <Text>
              <span>
                {item.activityTicket.name} x {item.quantity} on{" "}
                {displayDate(item.date)}
              </span>
              <span>{item.activityTicket.price * item.quantity}</span>
            </Text>
          </li>
        ))}
      </ul>

      <Button onClick={onClear}>Clear basket</Button>
    </Card>
  );
}
