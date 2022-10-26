export const InitialState = {
	user: null,
	notice: {
		field: false,
		status: "",
		msg: "",
	},
	product: {
		imgURL: null,
		title: "",
		desc: "",
		price: "",
		category: "",
		size: {},
		color: [],
	},
	cart: [],
	// total: { barang: 0, price: 0 },
	total: { total: 0, quantity: 0 },
}
