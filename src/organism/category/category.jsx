import React, { useState, useEffect } from "react"
import { Menu, RadioGroup } from "@headlessui/react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
import { useDispatch, useSelector } from "react-redux"
import {
	addProduct,
	changeProduct,
} from "../../redux/addProductSlice/addProductSlice"
import InputItem from "../../component/InputItem/inputItem"
import InputRadioGroup from "../../component/inputRadioGroup/inputRadioGroup"

export const categoryWomens = ["Dress", "Jaket", "Kerudung", "Celana Jeans"]

const Category = () => {
	const [allCategory, setAllCategory] = useState([])
	const [category, setCategory] = useState("")
	const dispatch = useDispatch()
	const product = useSelector(addProduct)

	useEffect(() => {
		const getData = async () => {
			const getRef = doc(db, "category", "women's")
			const getSnap = await getDoc(getRef)
			setAllCategory(getSnap.data().women)
		}
		dispatch(changeProduct({ ...product, category: category }))
		return () => {
			getData()
		}
	}, [category])

	return (
		<div>
			<RadioGroup
				className='flex flex-col'
				value={category}
				onChange={setCategory}>
				<RadioGroup.Label className='font-medium'>Category</RadioGroup.Label>
				<div className='flex gap-3 mt-2 overflow-x-auto'>
					{allCategory.map((item) => (
						<InputRadioGroup data={item} />
					))}
					<InputItem />
				</div>
			</RadioGroup>
		</div>
	)
}

export default Category
