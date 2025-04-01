import { Link } from "../link";

type Props = {
  className?: string;
};

export function FacebookFeed(props: Props) {
  const { className = "" } = props;

  return (
    <div className={className}>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/wildlifeoasis/"
        data-tabs="timeline"
        data-width="500"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/wildlifeoasis/"
          className="fb-xfbml-parse-ignore"
        >
          <Link href="https://www.facebook.com/wildlifeoasis/">
            Lakeland Wildlife Oasis
          </Link>
        </blockquote>
      </div>
    </div>
  );
}
