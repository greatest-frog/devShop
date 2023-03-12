import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: {
      reducer(state, action) {
        const item = state.find((item) => item.id === action.payload.id);
        if (!item) {
          state.push({ id: action.payload.id, amount: 1, active: true });
        }
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
    setItemAmount: {
      reducer(state, action) {
        const item = state.find((item) => item.id === action.payload.id);
        if (item !== -1) {
          item.amount = action.payload.amount;
        }
      },
      prepare(id, amount) {
        return {
          payload: {
            id,
            amount,
          },
        };
      },
    },
    deleteItem: {
      reducer(state, action) {
        state.splice(
          state.findIndex((item) => item.id === action.payload.id),
          1
        );
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
    changeSelect: {
      reducer(state, action) {
        const item = state.find((item) => item.id === action.payload.id);
        if (item) {
          item.active = !item.active;
        }
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
export const { addItem, setItemAmount, deleteItem, changeSelect } =
  cartSlice.actions;
