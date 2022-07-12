import { createSlice } from '@reduxjs/toolkit'

export const checkoutSlice = createSlice({
  name: 'checkoutSelections',
  initialState: {
    value: [],
  },
  reducers: {
    addToBasket: (state, sel) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push(sel.payload)
    },

    clearBasket: (state) => {
      state.value = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, clearBasket } = checkoutSlice.actions

export default checkoutSlice.reducer