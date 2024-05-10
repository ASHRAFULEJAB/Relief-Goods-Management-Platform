import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TSupply = {
  title: string;
  description: string;
  amount: string;
  category: string;
  image: string;
};
type TInitailState = {
  supplies: TSupply[];
};
const initialState: TInitailState = {
  supplies: [],
};

const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    addSupply: (state, action: PayloadAction<TSupply>) => {
      state.supplies.push(action.payload);
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

export const { addSupply } = supplySlice.actions;
export default supplySlice.reducer;
