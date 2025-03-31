import { type CMS } from "@lwo/cms";

type Props = {
  id: CMS.StaticContentId;
};

export function StaticContent(props: Props) {
  const { id } = props;

  switch (id) {
    case "news-carousel":
      return <>NEWS CAROUSEL</>;
  }
}
