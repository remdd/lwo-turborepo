import { title } from "@lwo/ui/fonts";
import cx from "classnames";

type Props = {
  className?: string;
  price: number;
};

export function PriceSticker(props: Props) {
  const { price, className = "" } = props;

  return (
    <div
      className={cx(
        "border-lwo-orange flex -rotate-3 flex-col items-center rounded-full border-4 bg-gradient-to-b from-yellow-100 to-yellow-300 px-8 py-2 font-thin shadow-2xl",
        title.className,
        className,
      )}
    >
      <p className="text-md">From</p>
      <p>
        <span className={cx("text-2xl", title.className)}>£</span>
        <span className="text-bold text-5xl">{price}</span>
      </p>
    </div>
  );
}
