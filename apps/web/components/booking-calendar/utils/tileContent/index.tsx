// export function tileContent({
//   activityTicket,
//   date,
//   today,
//   allocations,
// }: {
//   activityTicket: CMS.ActivityTicket;
//   date: Date;
//   today: Date;
//   // @TODO - typing
//   allocations: any[];
// }) {
//   console.log(date, today);

//   console.log(
//     `Date: ${date} - isActive: ${isActive} - isInWeeklyPattern: ${isInWeeklyPattern} - isWithinLeadDays: ${isWithinLeadDays}`,
//   );

//   const hasAllocation = allocations.some((a) =>
//     isSameDay(parseISO(a.date), date),
//   );

//   return (
//     <div
//       className={cx(
//         hasAllocation && "bg-red-200",
//         isActive && "is-active",
//         isInWeeklyPattern && isWithinLeadDays && "is-eligible",
//         "bg-lwo-blue-100 flex h-full w-full items-center justify-center rounded",
//       )}
//     >
//       LABEL
//     </div>
//   );
// }
