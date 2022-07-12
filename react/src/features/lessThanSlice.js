import { createSlice } from '@reduxjs/toolkit'

export const lessThanSlice = createSlice({
  name: 'lessThan',
  initialState: {
    value: {from:1,to:10000},
  },
  reducers: {
    pricesFrom: (state, sel) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.from = sel.payload;
    },

    pricesTo: (state, sel) => {
      state.value.to = sel.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { pricesFrom, pricesTo } = lessThanSlice.actions

export default lessThanSlice.reducer