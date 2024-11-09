import icon from '../../assets/images/icon.svg'

function Header() {
  return (
    <header>
      <ul>
        <li>
          <img alt="bitPin" src={icon} />
        </li>
        <li>خرید آسان</li>
        <li>معامله</li>
        <li>قیمت ارز دیجیتال</li>
        <li>امکانات</li>
        <li>آموزش</li>
      </ul>
    </header>
  )
}

export default Header