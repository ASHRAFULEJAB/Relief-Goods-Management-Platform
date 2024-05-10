import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TSupply = {
  id: string;
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
    removeSupply: (state, action: PayloadAction<string>) => {
      state.supplies = state.supplies.filter(
        (item) => item.id !== action.payload
      );
    },
    updateSupply: (state, action: PayloadAction<TSupply>) => {
      const updatedSupply = action.payload;
      state.supplies = state.supplies.map((supply) =>
        supply.id === updatedSupply.id ? updatedSupply : supply
      );
    },
  },
});

export const { addSupply, removeSupply, updateSupply } = supplySlice.actions;
export default supplySlice.reducer;
