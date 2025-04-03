import { getSingleType } from "@lwo/cms";
import { GeneralAdmissionPrices } from "@lwo/ui/components";
import { singleTypes } from "cms/single-types";
import { ticketCodes } from "cms/tickets";

export async function GeneralAdmissionPriceTable() {
  const generalAdmission = await getSingleType(
    singleTypes.GENERAL_ADMISSION.cmsId,
  );

  return (
    <GeneralAdmissionPrices
      tickets={generalAdmission.tickets}
      ticketCodes={ticketCodes}
    />
  );
}
