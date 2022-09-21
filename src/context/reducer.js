export const actionType = {
	SET_USER: "SET_USER",
	SET_CART: "SET_CART",
}

export const Reducer = (state, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			return {
				...state,
				user: action.user,
			}
			break
		case actionType.SET_CART:
			return {
				...state,
				cart: action.cart,
			}
			break
		default:
			return state
			break
	}
}
