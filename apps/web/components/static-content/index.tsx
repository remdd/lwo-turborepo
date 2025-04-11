import { type CMS } from "@lwo/cms";
import { GeneralAdmissionPriceTable } from "./general-admission-price-table";
import { GoogleMap } from "./google-map";
import { NewsCarousel } from "./news-carousel";

type Props = {
  static_content: CMS.StaticContent;
};

export function StaticContent(props: Props) {
  const {
    static_content: { code },
  } = props;

  switch (code) {
    case "general-admission-price-table":
      return <GeneralAdmissionPriceTable />;
    case "google-map":
      return <GoogleMap />;
    case "news-carousel":
      return <NewsCarousel />;
    default:
      return null;
  }
}
