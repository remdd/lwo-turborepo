import { getSingleType, type CMS } from "@lwo/cms";
import { ContentBlock, GeneralAdmissionPrices } from "@lwo/ui/components";
import { singleTypes } from "cms/single-types";
import { ticketCodes } from "cms/tickets";

export async function OpeningTimes(block: CMS.ContentBlock) {
  const generalAdmission = await getSingleType(
    singleTypes.GENERAL_ADMISSION.cmsId,
  );

  return (
    <section className="flex flex-col items-start md:flex-row">
      <ContentBlock block={block} className="basis-5/12 md:mr-4" />
      <GeneralAdmissionPrices
        className="basis-7/12 md:ml-4"
        tickets={generalAdmission.tickets}
        ticketCodes={ticketCodes}
      />
    </section>
  );
}
