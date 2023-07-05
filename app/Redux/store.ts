import { configureStore } from '@reduxjs/toolkit'
import menuToggleSlice  from './features/menuToggleSlice'
import advertismentListSlice from './features/advertismentListSlice'


export const store = configureStore({
  reducer: {
   menuToggleSlice,
   advertismentListSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch