import { Outlet } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"

import styles from './styles.module.scss'


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