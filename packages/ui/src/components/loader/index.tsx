import cx from "classnames";
import "./loader.css";

type Props = {
  className?: string;
};

export function Loader(props: Props) {
  const { className = "" } = props;

  return (
    <div
      className={cx(className, "flex h-24 w-24 items-center justify-center")}
    >
      <div className="loader" />
    </div>
  );
}
