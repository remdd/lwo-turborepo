import { type CMS } from "@lwo/types";
import { formatCurrency } from "@lwo/utils/formatting";
import cx from "classnames";

type Props = {
  className?: string;
  tickets: CMS.Ticket[];
  ticketCodes: Record<string, string>;
};

export function GeneralAdmissionPrices(props: Props) {
  const { tickets, ticketCodes, className = "" } = props;

  // @TODO - this is horrible
  const adult = tickets.find((ticket) => ticket.code === ticketCodes.ADULT);
  const adultGa = tickets.find(
    (ticket) => ticket.code === ticketCodes.ADULT_GA,
  );
  const child = tickets.find((ticket) => ticket.code === ticketCodes.CHILD);
  const childGa = tickets.find(
    (ticket) => ticket.code === ticketCodes.CHILD_GA,
  );
  const concession = tickets.find(
    (ticket) => ticket.code === ticketCodes.CONCESSION,
  );
  const concessionGa = tickets.find(
    (ticket) => ticket.code === ticketCodes.CONCESSION_GA,
  );
  const family2_2 = tickets.find(
    (ticket) => ticket.code === ticketCodes.FAMILY_2_2,
  );
  const family2_2Ga = tickets.find(
    (ticket) => ticket.code === ticketCodes.FAMILY_2_2_GA,
  );
  const family2_3 = tickets.find(
    (ticket) => ticket.code === ticketCodes.FAMILY_2_3,
  );
  const family2_3Ga = tickets.find(
    (ticket) => ticket.code === ticketCodes.FAMILY_2_3_GA,
  );

  const rows: [string, CMS.Ticket, CMS.Ticket][] = [
    ["Adult", adultGa!, adult!],
    ["Child", childGa!, child!],
    ["Concession", concessionGa!, concession!],
    ["Family 2 + 2", family2_2Ga!, family2_2!],
    ["Family 2 + 3", family2_3Ga!, family2_3!],
  ];

  const cellStyle = "border-2 border-gray-600 px-4 py-2";

  return (
    <article className={cx("mb-8 w-full bg-white text-center", className)}>
      <table className="w-full">
        <thead>
          <tr className="bg-blue-200">
            <th className={cellStyle}>General admission</th>
            <th className={cellStyle}>Price including gift aid</th>
            <th className={cellStyle}>Price without gift aid</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ga, ticket]) => (
            <tr key={label} className="odd:bg-white even:bg-blue-50">
              <td className={cellStyle}>{label}</td>
              <td className={cellStyle}>{formatCurrency(ga!.price)}</td>
              <td className={cellStyle}>{formatCurrency(ticket!.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
