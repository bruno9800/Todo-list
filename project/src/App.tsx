

import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { TaskList } from './components/TasksList'
import './global.css'
import styles from './app.module.css'
import { ListEmpty } from './components/ListEmpty'
import { Task } from './components/Task'
import { task } from './util/list'

export function App() {

  return (
    <div className={styles.App}>
      <Header />
      <main>
        <TaskList />
      </main>
    </div>
  )
}

