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
        }
    }
})

const { reducer, actions } = todoSlice
export const { addTodo, deleteTodo } = actions
export default reducer
