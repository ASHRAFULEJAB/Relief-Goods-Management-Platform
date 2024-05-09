import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  supplies: [],
};

type TSupply = {
  title: string;
  description: string; // Fixed typo here
  amount: string;
  category: string;
  image: string;
};

const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TSupply>) => {
      state.supplies.push({ ...action.payload });
    },
    // removeTodo: (state, action: PayloadAction<string>) => {
    //   state.supplies = state.supplies.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
    // toggoleComplete: (state, action: PayloadAction<string>) => {
    //   const task = state.supplies.find((item) => item.id === action.payload);
    //   task!.isCompleted = !task?.isCompleted;
    // },
  },
});

export const { addTodo } = supplySlice.actions;
export default supplySlice.reducer;
