import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface filterState {
  method: string[];
  material: string[];
  status: boolean;
}

const initialState: filterState = {
  method: [],
  material: [],
  status: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addMethod: (state, action: PayloadAction<string>) => {
      state.method.push(action.payload);
    },
    deleteMethod: (state, action: PayloadAction<string>) => {
      state.method = state.method.filter((name) => name !== action.payload);
    },
    addMaterial: (state, action: PayloadAction<string>) => {
      state.material.push(action.payload);
    },
    deleteMaterial: (state, action: PayloadAction<string>) => {
      state.material = state.material.filter((name) => name !== action.payload);
    },
    changeStatus: (state) => {
      state.status = !state.status;
    },
  },
});

export const {
  addMethod,
  deleteMethod,
  addMaterial,
  deleteMaterial,
  changeStatus,
} = filterSlice.actions;
export default filterSlice.reducer;
