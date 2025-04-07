import { type CMS } from "@lwo/cms";
import { GeneralAdmissionPriceTable } from "./general-admission-price-table";
import { GoogleMap } from "./google-map";

type Props = {
  static_content: CMS.StaticContent;
};

export function StaticContent(props: Props) {
  const {
    static_content: { code },
  } = props;

  console.log(code);

  switch (code) {
    case "general-admission-price-table":
      return <GeneralAdmissionPriceTable />;
    case "google-map":
      return <GoogleMap />;
    case "news-carousel":
      return <div>News Carousel</div>;
    default:
      return null;
  }
}
