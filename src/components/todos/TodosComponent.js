import styles from './TodosComponent.module.scss'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from '../../api/todos/todosApi'
import Spinner from 'react-bootstrap/Spinner'
import Todo from './todo/TodoComponent'

export const TodosComponent = () => {

  const isLoading = useSelector(state => state.todosReducer.isLoading);
  const todosList = useSelector(state => state.todosReducer.todos);
  const dispatch = useDispatch();

  useEffect(() => {

    if(todosList.length === 0){
      dispatch(fetchPosts())
    }

  // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.TodosList}>
      {isLoading ? (<Spinner animation="grow" variant="light" />) : (
        todosList.map(todo =>(
          <Todo key={todo.id} todo={todo}></Todo>
        ))
      )}
    </div>
  );
}

export default TodosComponent;