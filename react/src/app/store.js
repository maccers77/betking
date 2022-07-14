import { configureStore } from '@reduxjs/toolkit'
import checkoutSelectionsReducer from '../features/checkoutSlice'
import lessThanReducer from '../features/lessThanSlice'
import menuStateReducer from '../features/menuStateSlice'

export default configureStore({
  reducer: {
    checkoutSelections: checkoutSelectionsReducer,
    lessThan: lessThanReducer,
    menuState: menuStateReducer
  },
})