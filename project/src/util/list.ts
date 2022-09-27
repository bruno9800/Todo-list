
import { v4 as uuidv4} from 'uuid'


export interface taskProps {
    id: string;
    title: string;
    isDone: boolean;
}

export const task = [
    {
        id: uuidv4(),
        title: "Estudar Typescript",
        isDone: false
    },
    {
        id: uuidv4(),
        title: "Dormir",
        isDone: false
    }
]