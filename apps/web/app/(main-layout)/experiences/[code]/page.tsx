import { CMS, getActivityCategories, getActivityCategory } from "@lwo/cms";
import {
  Card,
  ContentRow,
  Heading,
  PageArea,
  Photo,
  PriceSticker,
  RichText,
} from "@lwo/ui/components";
import { ActivityTicket } from "components";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const activityCategories = await getActivityCategories();

  console.log(activityCategories);

  return activityCategories.map((category) => ({
    code: category.activity_category_code,
  }));
}

function getMinPrice(category: CMS.ActivityCategory): number {
  const prices = [
    ...(category.activity_tickets || []).map((ticket) => ticket.price),
    ...category.activity_subcategories.flatMap((subcategory) =>
      (subcategory.activity_tickets || []).map((ticket) => ticket.price),
    ),
  ];
  return prices.length === 0 ? 0 : Math.min(...prices);
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;
  const activityCategory = await getActivityCategory(code);

  console.log(activityCategory);

  if (!activityCategory) {
    return notFound();
  }

  const minPrice = getMinPrice(activityCategory);

  return (
    <PageArea>
      <Heading level={1}>{activityCategory.name}</Heading>

      <div className="relative mb-24">
        <Card>
          <RichText richText={activityCategory.description} />
          {activityCategory.activity_tickets?.map((activity_ticket) => (
            <ActivityTicket
              activity_ticket={activity_ticket}
              key={activity_ticket.documentId}
            />
          ))}
        </Card>
        {minPrice > 0 && (
          <PriceSticker
            className="absolute -bottom-16 right-0 -translate-x-1/2"
            price={minPrice}
          />
        )}
      </div>

      {activityCategory.activity_subcategories.map((subcategory) => (
        <ContentRow
          className="mb-8"
          leftBasis={8}
          key={subcategory.activity_subcategory_code}
          left={
            <Card>
              <RichText richText={subcategory.description} />
              {(subcategory.activity_tickets || []).map((activity_ticket) => (
                <ActivityTicket
                  activity_ticket={activity_ticket}
                  key={activity_ticket.documentId}
                />
              ))}
            </Card>
          }
          right={<Photo image={subcategory.cover_image} rotate="right" />}
        />
      ))}
    </PageArea>
  );
}
