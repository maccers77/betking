import { configureStore } from '@reduxjs/toolkit'
import checkoutSelectionsReducer from '../features/checkoutSlice'
import lessThanReducer from '../features/lessThanSlice'

export default configureStore({
  reducer: {
    checkoutSelections: checkoutSelectionsReducer,
    lessThan: lessThanReducer,
  },
})