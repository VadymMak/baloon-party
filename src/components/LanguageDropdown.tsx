import React, { useState, useEffect, useCallback } from "react";
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
  const dispatch = useDispatch<AppDispatch>();

  const languages: Language[] = [
    { code: "sk", name: "Slovenský", flag: "/icons/sk.svg" },
    { code: "ua", name: "Українська", flag: "/icons/ua.svg" },
  ];

  const savedLanguage = localStorage.getItem("baloon-party-language") || "sk";
  const [selectedLanguage, setSelectedLanguage] = useState(savedLanguage);

  useEffect(() => {
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage);
  }, [i18n, savedLanguage]);

  const handleLanguageChange = useCallback(
    (code: string) => {
      i18n.changeLanguage(code);
      localStorage.setItem("baloon-party-language", code);
      setSelectedLanguage(code);
      setIsOpen(false);
      dispatch(setLanguage(code));
    },
    [i18n, dispatch]
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const currentLanguageDetails = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownToggle}>
        {currentLanguageDetails && (
          <>
            <img
              src={currentLanguageDetails.flag}
              alt={currentLanguageDetails.name}
              width={20}
              height={15}
              style={{ marginRight: "8px" }}
            />
            {currentLanguageDetails.code}
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
                  width={20}
                  height={15}
                  style={{ marginRight: "8px" }}
                />
                {lang.code}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;