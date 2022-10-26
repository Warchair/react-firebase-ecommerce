import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { initialState } from "../initialState/initialState"
import { collection, getDocs, getDoc } from "firebase/firestore"
import { db } from "../../firebase.config"

const initialState = {
	product: [],
	productById: {},
	status: "idle",
}

export const getDataFromFirebase = createAsyncThunk(
	"product/firestore",
	async () => {
		const collectData = collection(db, "women's")
		const dataWomens = await getDocs(collectData)
		const data = dataWomens.docs.map((product) => ({
			...product.data(),
			id: product.id,
		}))
		return data
	},
)

export const getDataByIdFromFirebase = createAsyncThunk(
	"product/firestore/id",
	async ({ type, id }) => {
		const getRef = doc(db, `${type}`, `${id}`)
		const getSnap = await getDoc(getRef)
		return getSnap.data()
	},
)

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataFromFirebase.pending, (state, action) => {
			state.status = "load"
		})
		builder.addCase(getDataFromFirebase.fulfilled, (state, action) => {
			state.status = "success"
			state.product = action.payload
		})
		builder.addCase(getDataByIdFromFirebase.pending, (state, action) => {
			state.status = "load"
		})
		builder.addCase(getDataByIdFromFirebase.fulfilled, (state, action) => {
			state.status = "success"
			return action.payload
		})
	},
})

export const selectAll = (state) => state.product.product
export const selectStatus = (state) => state.product.status
export const selectById = (state, id) => {
	return state.product.product.find((product) => product.id === id)
}

export default productSlice.reducer
