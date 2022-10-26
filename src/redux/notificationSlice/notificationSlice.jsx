import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	notice: {
		field: false,
		status: "",
		msg: "",
	},
}

const notificationSlice = createSlice({
	name: "notice",
	initialState,
	reducers: {
		setNotice(state, action) {
			const { field, status, msg } = action.payload
			state.notice.field = field
			state.notice.status = status
			state.notice.msg = msg
		},
	},
})

export const { setNotice } = notificationSlice.actions

export const getNotice = (state) => state.notice.notice

export default notificationSlice.reducer
