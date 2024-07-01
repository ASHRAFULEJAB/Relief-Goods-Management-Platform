/* eslint-disable @typescript-eslint/no-explicit-any */
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
  user?: null | object;
  token?: null | string;
};
const initialState: TInitailState = {
  supplies: [],
};
// type TAuthState = {
//
// };

// const initialState: TAuthState = {
//   user: null,
//   token: null,
// };

const supplySlice: any = createSlice({
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
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
  },
});

export const { addSupply, removeSupply, updateSupply } = supplySlice.actions;
export default supplySlice.reducer;
