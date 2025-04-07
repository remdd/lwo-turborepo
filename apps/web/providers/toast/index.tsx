import { Toast } from "@lwo/ui/components";
import { toast } from "react-toastify";

export function addSuccessToast(message: string) {
  toast.success(<Toast>{message}</Toast>);
}

export function addErrorToast(message: string) {
  toast.error(<Toast>{message}</Toast>);
}

export function addInfoToast(message: string) {
  toast.success(<Toast>{message}</Toast>);
}

export function addWarningToast(message: string) {
  toast.success(<Toast>{message}</Toast>);
}
