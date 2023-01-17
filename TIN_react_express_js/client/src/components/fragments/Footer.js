import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  const [pickedLanguage, setPickedLanguage] = useState(0);

  const languages = [
    {
      id: 0,
      label: "pl",
    },
    {
      id: 1,
      label: "en",
    },
  ];

  const handleChangeLanguage = (event) => {
    setPickedLanguage(event.target.value);
    i18n.changeLanguage(languages[event.target.value].label);
  };
  return (
    <footer>
      <div>
        <select value={pickedLanguage} onChange={handleChangeLanguage}>
          {languages.map((language) => (
            <option
              key={language.id}
              value={language.id}
              label={language.label}></option>
          ))}
        </select>
        Maciej Zelias s22482
      </div>
    </footer>
  );
}
