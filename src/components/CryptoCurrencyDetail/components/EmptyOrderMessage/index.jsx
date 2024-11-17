import { t } from "i18next";

function EmptyOrderMessage() {
  return (
    <div>
      <p>{t("emptyOrderMessage.noData")}</p>
    </div>
  )
}

export default EmptyOrderMessage