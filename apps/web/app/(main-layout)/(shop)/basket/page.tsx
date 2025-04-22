import { Card, Heading, PageArea } from "@lwo/ui/components";
import { BasketContents, Checkout } from "components";

export default async function BasketPage() {
  return (
    <PageArea>
      <Heading>Your basket</Heading>

      <div className="max-w-lg">
        <BasketContents />

        <Card className="z-0 max-w-lg self-center">
          <Checkout />
        </Card>
      </div>
    </PageArea>
  );
}
