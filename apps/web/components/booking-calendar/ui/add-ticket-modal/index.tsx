"use client";

import { CMS } from "@lwo/cms";
import { Button, Modal, Text } from "@lwo/ui/components";
import { displayDate } from "@lwo/utils";
import { FaRegSquareMinus, FaRegSquarePlus } from "react-icons/fa6";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  activityTicket: CMS.ActivityTicket;
  selectedDate: Date;
  onAddToBasket: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedDateAvailableTickets: number;
  selectedTickets: number;
  setSelectedTickets: React.Dispatch<React.SetStateAction<number>>;
};

export function AddTicketModal(props: Props) {
  const {
    isOpen,
    onClose,
    activityTicket: { name },
    selectedDate,
    onAddToBasket,
    selectedDateAvailableTickets,
    selectedTickets,
    setSelectedTickets,
  } = props;

  return (
    <Modal title="Add to basket" isOpen={isOpen} onClose={onClose}>
      <Text className="mb-2">
        Do you want to add this booking to your basket?
      </Text>
      <p className="mb-2 text-lg md:text-xl">
        {name} on {displayDate(selectedDate)}
      </p>

      <div className="flex flex-col">
        <div className="mb-2 flex flex-row items-center text-lg md:text-xl">
          <span>Tickets to add:</span>
          {selectedDateAvailableTickets > 1 && (
            <Button
              onClick={() => setSelectedTickets((prevState) => prevState - 1)}
              isDisabled={selectedTickets === 1}
              className="mx-2"
            >
              <FaRegSquareMinus size="1em" />
            </Button>
          )}
          <span className="mx-2">{selectedTickets}</span>
          {selectedDateAvailableTickets > 1 && (
            <Button
              onClick={() => setSelectedTickets((prevState) => prevState + 1)}
              isDisabled={selectedTickets === selectedDateAvailableTickets}
              className="mx-2"
            >
              <FaRegSquarePlus size="1em" />
            </Button>
          )}
        </div>
      </div>

      <div className="mt-4 flex w-full flex-row items-center justify-between">
        <Button theme="cancel" onClick={onClose} className="mr-2 w-full">
          Cancel
        </Button>
        <Button onClick={(e) => onAddToBasket(e)} className="ml-2 w-full">
          Add
        </Button>
      </div>
    </Modal>
  );
}
