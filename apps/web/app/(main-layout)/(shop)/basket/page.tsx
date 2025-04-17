import { Card, Heading, PageArea } from "@lwo/ui/components";
import { BasketControls, Checkout } from "components";

export default async function BasketPage() {
  return (
    <PageArea>
      <Heading>Basket page</Heading>

      <BasketControls />

      <Card className="max-w-lg self-center">
        <Checkout />
      </Card>
    </PageArea>
  );
}
