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
import { pages } from "cms/pages";
import { ActivityTicket } from "components";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const activityCategories = await getActivityCategories();

  return activityCategories.map((category) => ({
    activity_category_code: category.activity_category_code,
  }));
}

function getMinPrice(category: CMS.ActivityCategory): number {
  const prices = [
    ...(category.category_tickets || []).map((ticket) => ticket.price),
    ...category.activity_subcategories.flatMap((subcategory) =>
      (subcategory.activity_tickets || []).map((ticket) => ticket.price),
    ),
  ];
  return prices.length === 0 ? 0 : Math.min(...prices);
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ activity_category_code: string }>;
}) {
  const activity_category_code = (await params).activity_category_code;
  const activityCategory = await getActivityCategory(activity_category_code);

  if (!activityCategory) {
    return notFound();
  }

  const minPrice = getMinPrice(activityCategory);

  const getBookingHref = (activity_ticket_code: string) =>
    `${pages.EXPERIENCES.path}/${activityCategory.activity_category_code}/${activity_ticket_code}`;

  return (
    <PageArea>
      <Heading level={1}>{activityCategory.name}</Heading>

      <div className="relative mb-24">
        <Card>
          <RichText richText={activityCategory.description} />
        </Card>

        {minPrice > 0 && (
          <PriceSticker
            className="absolute -bottom-16 right-0 -translate-x-1/2"
            price={minPrice}
          />
        )}
      </div>

      <div className="mb-8 w-full">
        <Card className="max-w-xl">
          <Heading level={3} className="mb-4">
            Book your tickets:
          </Heading>

          {activityCategory.category_tickets?.map((ticket) => {
            const { activity_ticket_code, documentId } = ticket;
            return (
              <ActivityTicket
                activity_ticket={ticket}
                href={getBookingHref(activity_ticket_code)}
                key={documentId}
                className="mt-4"
              />
            );
          })}
        </Card>
      </div>

      {activityCategory.activity_subcategories.map((subcategory) => (
        <ContentRow
          className="mb-8"
          leftBasis={8}
          key={subcategory.activity_subcategory_code}
          left={
            <Card>
              <RichText richText={subcategory.description} />
              {(subcategory.activity_tickets || []).map((ticket) => {
                const { activity_ticket_code, documentId } = ticket;
                return (
                  <ActivityTicket
                    activity_ticket={ticket}
                    href={getBookingHref(activity_ticket_code)}
                    key={documentId}
                    className="mt-4"
                  />
                );
              })}
            </Card>
          }
          right={<Photo image={subcategory.cover_image} rotate="right" />}
        />
      ))}
    </PageArea>
  );
}
