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
      <Heading level={4} className="mb-4">
        You can get in touch with us:
      </Heading>

      <ul className="md: mt-4 text-lg text-xl">
        <li className="mb-6">
          <div className="flex flex-row items-start">
            <FaAt size="1.5em" className="mr-8 inline-block flex-shrink-0" />
            <span>By email, at {contact_email}</span>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex flex-row items-start">
            <FaPhone size="1.5em" className="mr-8 inline-block flex-shrink-0" />
            By phone, at {contact_phone}
          </div>
        </li>
        <li className="mb-6 flex items-start">
          <div className="flex flex-row items-start">
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
          </div>
        </li>
      </ul>
    </Card>
  );
}
