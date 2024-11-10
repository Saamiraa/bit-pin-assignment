import styles from './style.module.scss'

import { t } from "i18next";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>{t("layout.footer.products.title")}</h3>
        <p className={styles.footerItem}>{t("layout.footer.products.items.easyPurchase")}</p>
        <p className={styles.footerItem}>{t("layout.footer.products.items.loan")}</p>
        <p className={styles.footerItem}>{t("layout.footer.products.items.bot")}</p>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>{t("layout.footer.about.title")}</h3>
        <p className={styles.footerItem}>{t("layout.footer.about.items.contactUs")}</p>
        <p className={styles.footerItem}>{t("layout.footer.about.items.careers")}</p>
        <p className={styles.footerItem}>{t("layout.footer.about.items.terms")}</p>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>{t("layout.footer.services.title")}</h3>
        <p className={styles.footerItem}>{t("layout.footer.services.items.supportChat")}</p>
        <p className={styles.footerItem}>{t("layout.footer.services.items.userGuide")}</p>
        <p className={styles.footerItem}>{t("layout.footer.services.items.academy")}</p>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>{t("layout.footer.cryptoPrices.title")}</h3>
        <p className={styles.footerItem}>{t("layout.footer.cryptoPrices.items.bitcoinPrice")}</p>
        <p className={styles.footerItem}>{t("layout.footer.cryptoPrices.items.ethereumPrice")}</p>
        <p className={styles.footerItem}>{t("layout.footer.cryptoPrices.items.tetherPrice")}</p>
      </div>
    </footer>
  );
}

export default Footer;
