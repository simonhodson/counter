import { createSlice } from '@reduxjs/toolkit'

interface ICounterState {
    value: number;
}

const initialState: ICounterState = { value: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            if (state.value === 10) return;
            state.value += 1;
        },
        decrement: state => {
            if (state.value === 0) return;
            state.value -= 1
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
