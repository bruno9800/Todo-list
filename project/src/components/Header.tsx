
import logo from '../../public/logo-todo.svg'

import styles from '../styles/header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <h1>to<span>do</span></h1>
        </header>
    )
}