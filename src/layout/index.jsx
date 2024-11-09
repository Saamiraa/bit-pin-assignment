import { Outlet } from "react-router-dom"


import styles from './styles.module.scss'
import Header from "./Header"
import Footer from "./Footer"


function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout