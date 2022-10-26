import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	user: null,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		Login(state, action) {
			state.user = action.payload
		},
		Logout(state, actons) {},
	},
})

export const { Login, Logout } = userSlice.actions

export const getUser = (state) => state.user.user

export default userSlice.reducer
