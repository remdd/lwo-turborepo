import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  onChange?: (date: Date | null) => void;
  onSelect?: (date: Date | null) => void;
  selected?: Date | null;
};

export function DatePicker(props: Props) {
  // const { selected = new Date(), onChange, onSelect } = props

  return (
    <div>
      <DatePickerComponent {...props} />
    </div>
  );
}
