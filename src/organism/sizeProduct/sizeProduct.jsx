import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import {
	addProduct,
	changeProduct,
} from "../../redux/addProductSlice/addProductSlice"
import InputSize from "../../component/inputSizeProduct/inputsize"

const SizeProduct = () => {
	const [size, setSize] = useState([])
	const dispatch = useDispatch()
	const product = useSelector(addProduct)

	useEffect(() => {
		dispatch(changeProduct({ ...product, size: size }))
	}, [size])

	const handleChange = (e) => {
		const { name, value } = e.target
		setSize((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	return (
		<div>
			<label htmlFor='' className='font-semibold'>
				Size Product
			</label>
			<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-3 gap-3'>
				<InputSize
					title='Small'
					name='small'
					textSize={size?.small}
					placeholder='Sizing of Product...'
					onchange={handleChange}
				/>
				<InputSize
					title='Medium'
					name='medium'
					textSize={size?.medium}
					placeholder='Sizing of Product...'
					onchange={handleChange}
				/>
				<InputSize
					title='Large'
					name='large'
					textSize={size?.large}
					placeholder='Sizing of Product...'
					onchange={handleChange}
				/>
			</div>
		</div>
	)
}

export default SizeProduct
