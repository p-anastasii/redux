import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push({id: Date.now(), text: action.payload});
        },
    },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;