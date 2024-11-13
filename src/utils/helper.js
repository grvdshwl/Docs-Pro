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

export const promptMessages = {
  keyTermsPrompt:
    "Given the following text, identify and extract key terms. For each key term, provide a definition or description in simple language. Return the output as a JSON array where each entry contains the term as the key and the definition as the value. Exclude words like data, top, tooltip, my, encodedDefinition, content, background, color, pointer, transition, onmouseover, s.",
};

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const replaceEncodedSpaces = (inputString) => {
  return inputString.replace(/%20/g, " ");
};

export const escapeRegExp = (string) => {
  return string.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, "\\$&");
};

export const removeSpecialCharacters = (input) => {
  return input.replace(/[^\w\s]/g, "");
};

export const removeSpecialCharactersFromObject = (obj) => {
  const cleanedObject = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      typeof value === "string" ? removeSpecialCharacters(value) : value,
    ])
  );

  return cleanedObject;
};
