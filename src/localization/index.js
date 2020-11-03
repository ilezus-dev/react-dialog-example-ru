import LocalizedStrings from "react-localization";
import dayjs from "dayjs";

import "dayjs/locale/ru";
import "dayjs/locale/en";

import ru from "./ru";
import en from "./en";

const language = localStorage.getItem("application-language");
const localization = new LocalizedStrings({
  ru,
  en,
});

dayjs.locale(language || "ru");

if (language) {
  localization.setLanguage(language);
}

export const setLanguage = (language) => {
  localStorage.setItem("application-language", language);
  localization.setLanguage(language);
  dayjs.locale(language);
};

export default localization;
