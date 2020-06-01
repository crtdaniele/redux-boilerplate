import initialState from '../../store/initialState';
import { createSlice } from '@reduxjs/toolkit';
import { setAutoFreeze, produce } from "immer";
setAutoFreeze(false);

const todosReducer = createSlice({
	name: "todos",
	initialState: initialState.todosReducer,
	reducers: {
		getTodosStart: (state, action) => (
			produce(state, draft => {
				draft.isLoading = true
			})
		),
		getTodosSuccess: (state, action) => (
			produce(state, draft => {
				draft.isLoading = false
				draft.todos = action.payload.slice(0, 10)
			})
		),
		getTodosFailed: (state, action) => (
			produce(state, draft => {
				draft.isLoading = false
				draft.isFailed = false
			})
		),
		toggleTodoCompleted: (state, action) => (
			produce(state, draft => {
				let todoIndex = draft.todos.findIndex((todo => todo.id === action.payload))
				if(draft.todos[todoIndex].completed){
					draft.todos[todoIndex].completed = false
				}else{
					draft.todos[todoIndex].completed = true
				}
				
			})
		)
	}
})

export const {
	getTodosStart, getTodosSuccess, getTodosFailed,
	toggleTodoCompleted
} = todosReducer.actions

export default todosReducer.reducer