import { useState } from "react";
import icon from "../../../../assets/images/icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { t } from "i18next";
import styles from "./style.module.scss";
import useTheme from "../../../../context/ThemeContext";
import { useEffect } from "react";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "rgb(45, 45, 45)";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#">
          <img alt="bitPin" src={icon} />
        </a>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.headerTitleList}>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.easyPurchase")}</a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.trade")}</a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.cryptoCurrencyPrice")}</a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.features")}</a>
          </li>
          <li className={styles.headerTitleItem}>
            <a href="#">{t("layout.header.education")}</a>
          </li>
        </ul>
      </nav>
      <div className={styles.headerThemeIcon}>
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faSun} onClick={handleThemeToggle} />
        ) : (
          <FontAwesomeIcon icon={faMoon} onClick={handleThemeToggle} />
        )}
      </div>
    </header>
  );
}

export default Header;
