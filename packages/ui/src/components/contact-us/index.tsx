import { CMS } from "@lwo/cms";
import { FaAt, FaEnvelope, FaPhone } from "react-icons/fa6";
import { Card, Heading } from "../";

type Props = Pick<CMS.Global, "contact_email" | "contact_phone"> & {
  className?: string;
};

export function ContactUs(props: Props) {
  const { contact_email, contact_phone, className = "" } = props;

  return (
    <Card className={className}>
      <Heading level={3} className="mb-4">
        You can get in touch with us:
      </Heading>
      <ul className="md: text-2xl text-xl">
        <li className="mb-8">
          <FaAt size="1.5em" className="mr-8 inline-block flex-shrink-0" />
          By email, at {contact_email}
        </li>
        <li className="mb-8">
          <FaPhone size="1.5em" className="mr-8 inline-block flex-shrink-0" />
          By phone, at {contact_phone}
        </li>
        <li className="mb-8 flex items-start">
          <FaEnvelope
            size="1.5em"
            className="mr-8 inline-block flex-shrink-0"
          />
          <ul className="inline-block">
            <li className="mb-4">By post, at</li>
            <li className="ml-4">Lakeland Wildlife Oasis</li>
            <li className="ml-4">Hale</li>
            <li className="ml-4">Milnthorpe</li>
            <li className="ml-4">Cumbria</li>
            <li className="ml-4">LA7 7FE</li>
          </ul>
        </li>
      </ul>
    </Card>
  );
}
