

import { useEffect, useState } from 'react';
import styles from '../styles/tasklist.module.css'

import { task, taskProps } from '../util/list'
import { CreateTask } from './CreateTask';
import { ListEmpty } from './ListEmpty';
import { Task } from './Task';
import { v4 as uuidv4} from 'uuid'

export function TaskList() {
    const [tasks, setTasks] = useState<taskProps[]>(task);
    const [countTaskCreated, setCountTaskCreated] = useState(0);
    const [countTaskDone, setCountTaskDone] = useState(0);

    function handleAppendNewTask(taskTitle:string) {
        const newTask = {
            id: uuidv4(),
            title: taskTitle,
            isDone: false,
        }
        setTasks([...tasks, newTask])
        console.log('entrie')
    }

    function handleTaskDone() {
        const count = tasks.reduce((acc, item) => {
            if(item.isDone)
                acc++;
            return acc;
        }, 0 )
        setCountTaskDone(count);
    }

    function handleIsDone(id: string, newIsDone: boolean) {
        tasks.map(item => {
            if(item.id === id)
                item.isDone = newIsDone;
        })
        setCountTaskCreated(tasks.length)
        handleTaskDone();
    }

    function DeleteTask(id: string){
        const newArrayTasks = tasks.filter( item => {
            return item.id !== id
        })
        setTasks(newArrayTasks)
    }

    useEffect( () => {
         setCountTaskCreated(tasks.length)
         handleTaskDone();
    }, [tasks])
    return (
        <div className={styles.container}>
            <CreateTask
            AppendTask={handleAppendNewTask}
        />
            <header>
                <div className={styles.tasksCreated}>
                    <strong>Tarefas criadas</strong>
                    <span>{countTaskCreated}</span>
                </div>
                <div className={styles.tasksDone}>
                    <strong>Tarefas concluídas</strong>
                    <span>{countTaskDone}</span>
                </div>
            </header>

            {tasks.length === 0
        ?<ListEmpty />
        : tasks.map(item => {
          return (
            <Task 
              id={item.id}
              title={item.title}
              onCompleted={handleIsDone}
              key={item.id}
              onDeleteTask={DeleteTask}
            />
          )
        })}
            
        </div>
    )
}