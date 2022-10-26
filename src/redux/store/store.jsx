import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "../cartSlice/cartSlice"
import notificationSlice from "../notificationSlice/notificationSlice"
import ProductSlice from "../productSlice/productSlice"
import UserSlice from "../userSlice/userSlice"
import addProductSlice from "../addProductSlice/addProductSlice"

export const store = configureStore({
	reducer: {
		product: ProductSlice,
		user: UserSlice,
		cart: cartSlice,
		notice: notificationSlice,
		addProduct: addProductSlice,
	},
})
