import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'react-feather'

import styles from '../styles/form.module.css'

interface Props {
    AppendTask: (newTask: string) => void
}

export function CreateTask({AppendTask}: Props) {
    const [newTask, setNewTask] = useState('')


    function handleAppendNewTask(event: FormEvent) {
        event.preventDefault();
        console.log(newTask)
        AppendTask(newTask);
        setNewTask('');
    }

    function handleInputChange( event : ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    return (
        <form className={styles.containerForm} >
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                onChange={handleInputChange}
                value={newTask}
            />
            <button type="submit" onClick={handleAppendNewTask}>
                Criar
                <PlusCircle size={19} />
            </button>
        </form>
    )
}