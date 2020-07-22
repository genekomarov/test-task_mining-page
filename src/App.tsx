import React from "react"
import styles from './App.module.scss'
import logo from './assets/logo.svg'

const App:React.FC = () => {

    return (
       <div className={styles.appRoot}>
           <header>
               <div className={styles.logo}>
                   <img src={logo} alt=""/>
               </div>
               <nav className={styles.nav}>
                   <div>Рекомендации</div>
                   <div>История</div>
               </nav>
           </header>
           <main></main>
       </div>
    )
}

export default App
