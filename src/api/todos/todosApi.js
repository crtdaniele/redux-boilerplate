import { TODOS_API } from '../api'
import { getTodosStart, getTodosSuccess, getTodosFailed } from '../../slices/todos/todosReducer'

export function fetchPosts() {
    return async dispatch => {
        dispatch(getTodosStart())
        fetch(TODOS_API)
        .then(response => response.json())
        .then(json => dispatch(getTodosSuccess(json)))
        .catch(err => dispatch(getTodosFailed()))
    }
}