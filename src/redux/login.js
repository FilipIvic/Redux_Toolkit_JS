import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Filip',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName } = loginSlice.actions

export default loginSlice.reducer