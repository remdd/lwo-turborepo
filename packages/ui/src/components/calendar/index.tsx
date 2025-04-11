"use client";

import { type ComponentProps } from "react";
import CalendarComponent from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

type Props = ComponentProps<typeof CalendarComponent> & {};

export function Calendar(props: Props) {
  return <CalendarComponent defaultView="month" {...props} />;
}
