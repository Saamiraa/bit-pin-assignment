/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import { formatNumberToPersian } from '../../../../utils/localizedNumber';
import styles from './styles.module.scss'

function CryptoItem({ data }) {

  const navigate = useNavigate()

  const titleFa = data.currency1.title_fa;
  const image = data.currency1.image;
  const price = data.price;
  const code = data.code;
  const id = data.id

  const handleNavigation = (id) => {
    navigate(`/coin/${id}`)
  }

  return (
    <div className={styles.cryptoCard} onClick={() => handleNavigation(id)}>
      <div className={styles.cryptoCardHeader}>
        <img alt={titleFa} src={image} className={styles.cryptoImage} />
        <div className={styles.cryptoTitle}>
          <span className={styles.cryptoName}>{titleFa}</span>
          <span className={styles.cryptoCode}>{code}</span>
        </div>
      </div>
      <div className={styles.cryptoPrice}>
        <span>{formatNumberToPersian(+price)}</span>
      </div>
    </div>
  )
}

export default CryptoItem