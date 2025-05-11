import { addMinutes } from "date-fns";

const BASKET_LIFETIME_MINS = 20;

export function getNewExpiryDate() {
  return addMinutes(new Date(), BASKET_LIFETIME_MINS);
}
