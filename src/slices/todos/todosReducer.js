import initialState from '../../store/initialState';
import { createSlice } from '@reduxjs/toolkit';

const todosReducer = createSlice({
	name: "todos",
	initialState: initialState.todosReducer,
	reducers: {
		getTodosStart: (state, action) => (
			state.isLoading = true
		),
		getTodosSuccess: (state, action) => (
			state.isLoading = false,
			state.todos = action.payload.slice(0, 10)
		),
		getTodosFailed: (state, action) => (
			state.isLoading = false,
			state.isFailed = false
		),
		toggleTodoCompleted: (state, action) => {
			let todoIndex = state.todos.findIndex((todo => todo.id === action.payload))
			if(state.todos[todoIndex].completed){
				state.todos[todoIndex].completed = false
			}else{
				state.todos[todoIndex].completed = true
			}
		}
	}
})

export const {
	getTodosStart, getTodosSuccess, getTodosFailed,
	toggleTodoCompleted
} = todosReducer.actions

export default todosReducer.reducer