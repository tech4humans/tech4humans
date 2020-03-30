import React from "react"
import Footer from "../footer";
import Styles from "./index.module.css"



const Layout = ({ children }) => {

  return (
    <div className={Styles.container}>
      <div className={Styles.overlay}>
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
