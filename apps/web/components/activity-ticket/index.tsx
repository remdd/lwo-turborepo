import { CMS } from "@lwo/cms";
import {
  ActivityTicket as ActivityTicketComponent,
  Link,
} from "@lwo/ui/components";

type Props = {
  activity_ticket: CMS.ActivityTicket;
  href: string;
  className?: string;
};

export function ActivityTicket(props: Props) {
  const {
    className = "",
    href,
    activity_ticket: { is_enabled, name, price },
  } = props;

  if (!is_enabled) {
    return null;
  }

  const label = `${name}`;

  return (
    <Link href={href}>
      <ActivityTicketComponent className={className} price={price}>
        {label}
      </ActivityTicketComponent>
    </Link>
  );
}
