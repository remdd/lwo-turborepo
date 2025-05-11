import { getNewExpiryDate } from "store/helpers";
import { v4 as uuid } from "uuid";

export function getInitBasket() {
  return {
    id: uuid(),
    expiry: getNewExpiryDate(),
  };
}
