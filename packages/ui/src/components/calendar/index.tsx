import CalendarComponent from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

type Props = {};

export function Calendar(props: Props) {
  return <CalendarComponent defaultView="month" {...props} />;
}
