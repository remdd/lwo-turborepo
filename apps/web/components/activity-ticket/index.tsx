"use client";

import { CMS } from "@lwo/cms";
import { ActivityTicket as ActivityTicketComponent } from "@lwo/ui/components";
import { useBasket } from "providers/basket";
import { addErrorToast, addSuccessToast } from "providers/toast";
import { logError } from "utils/logError";

type Props = {
  activity_ticket: CMS.ActivityTicket;
  className?: string;
};

export function ActivityTicket(props: Props) {
  const {
    className = "",
    activity_ticket,
    activity_ticket: { is_enabled, name, price },
  } = props;
  const { addItem } = useBasket();

  if (!is_enabled) {
    return null;
  }

  function onClick() {
    try {
      addItem(activity_ticket);
      addSuccessToast("Ticket added to basket");
    } catch (error) {
      addErrorToast("There was a problem. Please try again.");
      logError(error);
    }
  }

  const label = `${name}`;

  return (
    <ActivityTicketComponent
      className={className}
      onClick={onClick}
      price={price}
    >
      {label}
    </ActivityTicketComponent>
  );
}
