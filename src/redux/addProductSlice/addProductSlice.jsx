import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	product: {
		imgURL: null,
		title: "",
		desc: "",
		price: "",
		category: "",
		size: [],
		color: [],
	},
}

const addProductSlice = createSlice({
	name: "addProduct",
	initialState,
	reducers: {
		changeProduct(state, action) {
			state.product = action.payload
		},
	},
})

export const addProduct = (state) => state.addProduct.product
export const { changeProduct } = addProductSlice.actions

export default addProductSlice.reducer
