import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	addProduct,
	changeProduct,
} from "../../redux/addProductSlice/addProductSlice"
import InputColor from "../../component/inputColor/inputColor"

export const coloring = [
	{
		name: "Coklat",
		color: "bg-amber-800",
	},
	{
		name: "Hitam",
		color: "bg-black",
	},
	{
		name: "Biru",
		color: "bg-blue-800",
	},
	{
		name: "Oren",
		color: "bg-orange-300",
	},
	{
		name: "Krem",
		color: "bg-orange-100",
	},
]

const ColorType = () => {
	const [color, setColor] = useState([])
	const dispatch = useDispatch()
	const product = useSelector(addProduct)

	useEffect(() => {
		dispatch(changeProduct({ ...product, color: color }))
	}, [color])

	const handleColor = (e) => {
		let newArray = [...color, e.target.id]
		if (color.includes(e.target.id)) {
			newArray = newArray.filter((color) => color !== e.target.id)
		}
		setColor(newArray)
	}

	return (
		<div>
			<div className='flex flex-col gap-2'>
				<label htmlFor='title' className='font-medium'>
					<div>
						<p>
							Color Type :
							{color.map((item) => (
								<span> {item},</span>
							))}
						</p>
					</div>
				</label>
				<div className='flex gap-3'>
					{coloring.map((item, index) => (
						<InputColor index={index} item={item} onchange={handleColor} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ColorType
