/* eslint-disable react/prop-types */
import styles from './styles.module.scss'

function CryptoItem({ data, price, code }) {

  const { image, title_fa } = data

  return (
    <div>
      <div className={styles.cryptoListHeader}></div>
      <div className={styles.cryptoListCards}>
        <div>
          <img alt={title_fa} src={image} />
          <div>
            <span>{title_fa}</span>
            <span>{code}</span>
          </div>
        </div>
        <div>
          <span>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default CryptoItem