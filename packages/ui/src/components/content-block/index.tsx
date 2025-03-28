import { type CMS, type Web } from "@lwo/types";
import { Card, RichText } from "@lwo/ui/components";
import cx from "classnames";
import { ThemeProvider } from "../../contexts/theme";
import "./styles.css";

type Props = {
  richText: CMS.RichText;
  className?: string;
  theme?: Web.Theme;
};

export function ContentBlock(props: Props) {
  const { richText, theme = "standard", className = "" } = props;

  return (
    <ThemeProvider theme={theme}>
      <Card className={cx("content-block mb-8", className, `theme-${theme}`)}>
        <RichText richText={richText} />
      </Card>
    </ThemeProvider>
  );
}
