import { createSlice } from '@reduxjs/toolkit'

export const menuStateSlice = createSlice({
  name: 'menuState',
  initialState: {
    value: 'hide',
  },
  reducers: {
    toggleMenuState: (state, sel) => {
      if(state.value == 'hide') {
        state.value = 'show';
      }else{
        state.value = 'hide';
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleMenuState } = menuStateSlice.actions

export default menuStateSlice.reducer