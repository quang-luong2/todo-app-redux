import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    }
})

const { reducer, actions } = todoSlice
export const { addTodo } = actions
export default reducer
