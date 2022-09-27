
import listEmptyImg from '../assets/list-empty.svg'
import styles from '../styles/empty.module.css'

export function ListEmpty() {
    return (
        <div className={styles.container}>
                <img src={listEmptyImg} alt="lista vazia" />
                <strong>Você ainda não tem tarefas registradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
    )
}