"use client";

import { CMS } from "@lwo/cms";
import { ActivityTicket as ActivityTicketComponent } from "@lwo/ui/components";

type Props = {
  activity_ticket: CMS.ActivityTicket;
  onClick: () => void;
};

export function ActivityTicket(props: Props) {
  const {
    activity_ticket: { is_enabled, name, price },
  } = props;

  if (!is_enabled) {
    return null;
  }

  function onClick() {
    alert(`You clicked on ${props.activity_ticket.name}`);
  }

  const label = `${name}`;

  return (
    <ActivityTicketComponent onClick={onClick} price={price}>
      {label}
    </ActivityTicketComponent>
  );
}
