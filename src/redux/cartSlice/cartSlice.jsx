import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cart: [],
	cartCheck: [],
	total: {
		total: 0,
		quantity: 0,
	},
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCart(state, action) {
			const product = action.payload
			const existing = state.cart.find(
				(item) =>
					item.title === product.title &&
					item.size === product.size &&
					item.color === product.color,
			)
			if (existing) {
				state.cart = state.cart.map((item) =>
					item.title === product.title &&
					item.size === product.size &&
					item.color === product.color
						? { ...item, qty: item.qty + 1 }
						: item,
				)
			} else {
				state.cart = [...state.cart, product]
			}
		},
		addCart(state, action) {
			const id = action.payload
			state.cart = state.cart.map((item) =>
				item.id === id ? { ...item, qty: item.qty + 1 } : item,
			)
		},
		minCart(state, action) {
			const id = action.payload
			state.cart = state.cart.map((item) =>
				item.id === id ? { ...item, qty: item.qty - 1 } : item,
			)
		},
		deleteCart(state, action) {
			const id = action.payload
			state.cart = state.cart.filter((item) => item.id !== id)
		},
		totalCart(state, action) {
			const product = action.payload
			const existing = state.cartCheck.find((cart) => cart.id === product.id)
			if (existing) {
				state.cartCheck = state.cartCheck.filter(
					(cart) => cart.id !== product.id,
				)
			} else {
				state.cartCheck.push(product)
			}

			console.log(product)
			let totally = state.cartCheck.reduce(
				(acc, curr) => {
					acc.total += curr.qty * curr.price
					acc.quantity += curr.qty
					return acc
				},
				{ total: 0, quantity: 0 },
			)

			console.log(totally)
			state.total = totally
		},
	},
})

export const getCart = (state) => state.cart.cart
export const getTotal = (state) => state.cart.total
export const getCartCheck = (state) => state.cart.cartCheck

export const { setCart, addCart, minCart, deleteCart, totalCart } =
	cartSlice.actions
export default cartSlice.reducer
