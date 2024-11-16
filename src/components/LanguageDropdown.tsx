import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageDropdown.module.scss";
import { useDispatch } from "react-redux";
import { setLanguage } from "../store/languageSlice";
import { AppDispatch } from "../store/store";

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageDropdownProps {
  changeLanguage: (lang: string) => void;
  currentLanguage: string;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  changeLanguage,
  currentLanguage,
}) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLanguage);

  const dispatch = useDispatch<AppDispatch>();

  const languages: Language[] = [
    { code: "sk", name: "Slovenský", flag: "/icons/sk.svg" },
    { code: "ua", name: "Українська", flag: "/icons/ua.svg" },
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); // Change to the saved language
      setSelectedLanguage(savedLanguage); // Update the selected language state
    } else {
      const defaultLanguage = "sk"; // Set default to Slovak if no saved language
      localStorage.setItem("language", defaultLanguage);
      i18n.changeLanguage(defaultLanguage);
      setSelectedLanguage(defaultLanguage); // Set default language
    }
  }, [i18n]);

  const handleLanguageChange = useCallback(
    (code: string) => {
      changeLanguage(code); // Inform parent component of the change
      i18n.changeLanguage(code); // Change the language in i18next
      localStorage.setItem("language", code); // Update language in localStorage
      setSelectedLanguage(code); // Update the selected language state
      setIsOpen(false); // Close the dropdown
      dispatch(setLanguage(code)); // Dispatch to Redux if needed
    },
    [changeLanguage, i18n, dispatch]
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownToggle}>
        {selectedLanguage.toUpperCase()}
        {languages.find((lang) => lang.code === selectedLanguage) && (
          <>
            <img
              src={
                languages.find((lang) => lang.code === selectedLanguage)!.flag
              }
              alt={
                languages.find((lang) => lang.code === selectedLanguage)!.name
              }
              style={{ width: "20px", marginRight: "8px" }}
            />
            {selectedLanguage.toUpperCase()}
          </>
        )}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleLanguageChange(lang.code)}
                className={styles.languageButton}
              >
                <img
                  src={lang.flag}
                  alt={lang.name}
                  style={{ width: "20px", marginRight: "8px" }}
                />
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
