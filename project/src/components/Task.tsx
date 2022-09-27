import * as Checkbox from '@radix-ui/react-checkbox';
import { useEffect, useState } from 'react';

import { Check, Trash2 } from 'react-feather';

import styles from '../styles/task.module.css'

interface Props {
    id: string;
    title: string;
    // isDone: string;
    onCompleted: (id:string, taskDone: boolean) => void;
    onDeleteTask: (id: string) => void;
}


export function Task({id, title, onCompleted, onDeleteTask}:Props) {
    const [taskDone, setTaskDone] = useState(false);

    function handleIsDoneValue() {
        onDeleteTask(id)
    }

    useEffect(() => {
        onCompleted(id, taskDone);
    }, [taskDone])
    return (
        <div className={styles.container}>
            <label
                style={{
                    color: `${taskDone ? '#808080' : ''}`,
                    textDecoration: `${taskDone ? 'line-through': ''}`
                }}
            >
                <Checkbox.Root className={styles.checkbox}
                    checked={taskDone}
                    onCheckedChange={checked => {
                        checked=== true
                        ? setTaskDone(true)
                        : setTaskDone(false)
                    }}
                    style={{
                        backgroundColor: `${taskDone?'#5E60CE':''}`
                    }}
                >
                    <Checkbox.Indicator>
                        <Check size={13} cursor='pointer'/>
                    </Checkbox.Indicator>
                </Checkbox.Root>
                {title}
            </label>

            <button className={styles.delete} onClick={handleIsDoneValue}>
                <Trash2 
                    size={20} 
                    className={styles.trash}
                    cursor='pointer'
                />
            </button>
        </div>
    )
}