import { isAfter } from "date-fns";

export function isBasketExpired(expiry: Date) {
  return isAfter(new Date(), expiry);
}
