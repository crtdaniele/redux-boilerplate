import styles from './TodoComponent.module.scss'
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoCompleted } from '../../../slices/todos/todosReducer'

export const TodoComponent = ({todo}) => {

    const dispatch = useDispatch();
    const { title, completed } = todo;

    const handlerClick = (todo) => {
        dispatch(toggleTodoCompleted(todo.id))
    }

    return (
        <div onClick={() => handlerClick(todo)} className={`${styles.TodosList__todo} ${completed && styles.active}`}>
            {title}
        </div>
    );
}

export default TodoComponent;