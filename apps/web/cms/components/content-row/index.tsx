import { type CMS } from "@lwo/cms";
import { ContentBlock, Photo } from "@lwo/ui/components";
import cx from "classnames";
import { StaticContent } from "../static-content";

type Props = {
  content_row: CMS.ContentRow;
};

export function ContentRow(props: Props) {
  const { content_row } = props;
  const {
    left_basis,
    left_content_block,
    left_image,
    left_static_content,
    right_content_block,
    right_image,
    right_static_content,
  } = content_row;

  const leftContent = left_content_block || left_static_content || left_image;
  const rightContent =
    right_content_block || right_static_content || right_image;

  if (!(leftContent && rightContent)) {
    console.warn('Content row must have one "left" and one "right" item');
    return null;
  }

  return (
    <section className="flex flex-col items-center md:w-full md:flex-row md:items-start">
      <div
        className={cx(`md:w-${left_basis}/12`, "mb-8 w-full max-w-fit md:mr-4")}
      >
        {left_content_block ? (
          <ContentBlock block={left_content_block} />
        ) : left_image ? (
          <Photo image={left_image} rotate="left" />
        ) : left_static_content ? (
          <StaticContent static_content={left_static_content} />
        ) : null}
      </div>

      <div
        className={cx(
          `md:w-${12 - left_basis}/12`,
          "mb-8 w-full max-w-fit md:ml-4",
        )}
      >
        {right_content_block ? (
          <ContentBlock block={right_content_block} />
        ) : right_image ? (
          <Photo image={right_image} rotate="right" />
        ) : right_static_content ? (
          <StaticContent static_content={right_static_content} />
        ) : null}
      </div>
    </section>
  );
}
