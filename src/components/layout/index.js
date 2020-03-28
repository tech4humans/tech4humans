import React from "react"
import Styles from "./index.module.css"



const Layout = ({ children }) => {

  return (
    <div className={Styles.container}>
      <div className={Styles.overlay}>
        <div>
          <main>{children}</main>
          <footer className={Styles.footer}>
            TECH4HUMANS© {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
