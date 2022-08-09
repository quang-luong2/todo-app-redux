import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.splice(action.payload, 1)
        },
        updateTodo: (state, action) => {
            state.splice(action.payload.index, 1, action.payload.name)
        }
    }
})

const { reducer, actions } = todoSlice
export const { addTodo, deleteTodo, updateTodo } = actions
export default reducer
