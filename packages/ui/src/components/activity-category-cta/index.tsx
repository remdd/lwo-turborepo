import { CMS } from "@lwo/cms";
import Image from "next/image";
import { CardWithImage } from "../card-with-image";
import { Heading } from "../heading";

type Props = {
  className?: string;
  activityCategory: CMS.ActivityCategory;
};

export function ActivityCategoryCta(props: Props) {
  const {
    className = "",
    activityCategory: {
      id,
      name,
      code,
      cover_image: { url, alternativeText },
      is_enabled,
      description,
      activity_subcategories,
      activity_tickets,
      summary,
    },
  } = props;

  return (
    <CardWithImage
      className={className}
      image={
        <div className="relative h-64 w-full">
          <Image
            src={url}
            alt={alternativeText || ""}
            className="object-cover"
            fill
          />
        </div>
      }
    >
      <Heading level={2}>{name}</Heading>
    </CardWithImage>
  );
}
