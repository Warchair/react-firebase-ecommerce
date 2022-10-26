export const actionType = {
	SET_USER: "SET_USER",
	SET_CART: "SET_CART",
	SET_NOTICE: "SET_NOTICE",
	SET_DELETE_CART: "SET_DELETE_CART",
	SET_ADD_CART: "SET_ADD_CART",
	SET_TOTAL_CART: "SET_TOTAL_CART",
	SET_MIN_CART: "SET_MIN_CART",
	SET_PRODUCT: "SET_PRODUCT",
}

export const Reducer = (state, action) => {
	// console.log(action)
	switch (action.type) {
		case actionType.SET_USER:
			return {
				...state,
				user: action.user,
			}
			break
		case actionType.SET_TOTAL_CART:
			let totally = action.product?.reduce(
				(acc, curr) => {
					acc.total += curr.qty * curr.price
					acc.quantity += curr.qty
					return acc
				},
				{ total: 0, quantity: 0 },
			)
			return {
				...state,
				total: totally,
			}
			break
		case actionType.SET_PRODUCT:
			return {
				...state,
				product: action.product,
			}
			break
		case actionType.SET_NOTICE:
			return {
				...state,
				notice: action.notice,
			}
			break
		case actionType.SET_ADD_CART:
			return {
				...state,
				cart: state.cart.map((x) =>
					x.id === action.id ? { ...x, qty: x.qty + 1 } : x,
				),
			}
			break
		case actionType.SET_MIN_CART:
			return {
				...state,
				cart: state.cart.map((x) =>
					x.id === action.id ? { ...x, qty: x.qty - 1 } : x,
				),
			}
			break
		case actionType.SET_DELETE_CART:
			return {
				...state,
				cart: state.cart.filter((x) => x.id !== action.id),
			}
			break

		case actionType.SET_CART:
			const exist = state.cart.find(
				(x) =>
					x.title === action.cart.title &&
					x.color === action.cart.color &&
					x.size === action.cart.size,
			)
			if (exist) {
				return {
					...state,
					cart: state.cart.map((x) =>
						x.title === action.cart.title &&
						x.color === action.cart.color &&
						x.size === action.cart.size
							? { ...x, qty: x.qty + 1 }
							: x,
					),
				}
			} else {
				return {
					...state,
					cart: [...state.cart, action.cart],
				}
			}
			break
		default:
			return state
			break
	}
}
