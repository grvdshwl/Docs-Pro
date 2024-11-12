import { toast } from "react-toastify";

export const showToast = (
  message,
  type = "default",
  options = { autoClose: 500 }
) => {
  switch (type) {
    case "success":
      toast.success(message, { ...options });
      break;
    case "error":
      toast.error(message, { ...options });
      break;
    case "info":
      toast.info(message, { ...options });
      break;
    case "warning":
      toast.warning(message, { ...options });
      break;
    default:
      toast(message, { ...options });
      break;
  }
};

export const textEditorFontSizeList = [
  8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 128,
];
