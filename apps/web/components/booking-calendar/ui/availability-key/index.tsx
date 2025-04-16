import { Text } from "@lwo/ui/components";
import { FaRegCircleXmark } from "react-icons/fa6";

export function AvailabilityKey() {
  return (
    <>
      <Text className="mb-4">
        Select an available day in the calendar to add tickets to your basket.
      </Text>
      <div className="flex flex-col items-center">
        <ul className="flex w-full max-w-xl list-none flex-col items-start justify-start sm:flex-row sm:items-stretch sm:justify-between sm:text-center">
          <li className="mb-2 inline-block flex flex-row-reverse items-center justify-between sm:mb-0 sm:flex-col sm:items-start sm:items-center sm:justify-between">
            <Text className="mb-0 ml-2 sm:mb-2 sm:ml-0">Available</Text>
            <div className="h-8 w-16 rounded-lg border-2 border-blue-400 bg-blue-50 sm:h-12 sm:w-24" />
          </li>
          <li className="mb-2 inline-block flex flex-row-reverse items-center justify-between sm:mb-0 sm:flex-col sm:items-start sm:items-center sm:justify-between">
            <Text className="mb-0 ml-2 sm:mb-2 sm:ml-0">
              Limited availability
            </Text>
            <div className="relative h-8 w-16 overflow-hidden rounded-lg border-2 border-blue-400 bg-blue-50 sm:h-12 sm:w-24">
              <div className="absolute bottom-0 left-0 h-2/3 w-full bg-blue-100" />
            </div>
          </li>
          <li className="mb-2 inline-block flex flex-row-reverse items-center justify-between sm:mb-0 sm:flex-col sm:items-start sm:items-center sm:justify-between">
            <Text className="mb-0 ml-2 sm:mb-2 sm:ml-0">Fully booked</Text>
            <div className="h-8 w-16 rounded-lg border-2 border-gray-300 bg-gray-200 sm:h-12 sm:w-24" />
          </li>
          <li className="mb-2 inline-block flex flex-row-reverse items-center justify-between sm:mb-0 sm:flex-col sm:items-start sm:items-center sm:justify-between">
            <Text className="mb-0 ml-2 sm:mb-2 sm:ml-0">Not available</Text>
            <div className="flex h-8 w-16 flex-col items-center justify-center sm:h-12 sm:w-24">
              <FaRegCircleXmark size="1.5em" className="text-gray-400" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
