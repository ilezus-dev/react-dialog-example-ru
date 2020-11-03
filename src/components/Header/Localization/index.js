import React, { useContext } from "react";
import localization from "../../../localization";
import { AppContext } from "../../../context";
import "./styles.css";

const Localization = () => {
  const { toggleLanguage } = useContext(AppContext);

  const onToggleLanguage = (event) => {
    const { language } = event.currentTarget.dataset;
    toggleLanguage(language);
  };

  return (
    <div className="localization">
      {localization.languages.map((language) => {
        return (
          <div
            key={language.value}
            className="language"
            data-language={language.value}
            onClick={onToggleLanguage}
          >
            {language.label}
          </div>
        );
      })}
    </div>
  );
};

export default Localization;
