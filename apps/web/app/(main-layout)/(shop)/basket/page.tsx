import { Heading, PageArea } from "@lwo/ui/components";
import { BasketControls } from "components/basket-controls";

export default async function BasketPage() {
  return (
    <PageArea>
      <Heading>Basket page</Heading>

      <BasketControls />
    </PageArea>
  );
}
