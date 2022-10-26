import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
	addCart,
	deleteCart,
	getCart,
	getCartCheck,
	minCart,
	totalCart,
} from "../../redux/cartSlice/cartSlice"

const ProductCart = ({ item, index }) => {
	const cart = useSelector(getCart)
	const [check, setCheck] = useState([])
	const dispatch = useDispatch()
	const cartCheck = useSelector(getCartCheck)

	console.log(cartCheck)

	useEffect(() => {
		const getData = () => {
			setCheck(new Array(cart.length).fill(false))
		}
		return () => getData()
	}, [])

	const deleteProduct = (id) => {
		dispatch(deleteCart(id))
	}

	const handleAdd = (id) => {
		dispatch(addCart(id))
	}

	const handleMin = (id) => {
		dispatch(minCart(id))
	}

	// const handleCheckBoxAll = (e) => {
	// 	console.log(e.target.checked)
	// 	if (e.target.checked) {
	// 		const temp = check.fill(true)
	// 		setCheck(temp)
	// 	} else {
	// 	}
	// }

	const handleCheck = (item, target) => {
		// const updateChecked = check.map((item, index) => {
		// 	return index === position ? !item : item
		// })
		// setCheck(updateChecked)
		// const checkout = cart.filter((item, index) => {
		// 	if (updateChecked[index] === true) {
		// 		return item
		// 	}
		// })

		console.log(target)
		dispatch(totalCart(item))

		// cara pertama
		// let newArray = [...checkout, item]
		// if (checkout.includes(item)) {
		// 	newArray = newArray.filter((x) => x.id !== item.id)
		// }
		// setCheckout(newArray)
		// dispatch({
		// 	type: actionType.SET_TOTAL_CART,
		// 	product: newArray,
		// })
	}

	return (
		<div className='flex gap-3 border-b-2 border-b-gray-200 py-3 w-full'>
			<input
				type='checkbox'
				className='md:w-5 md:h-5 w-4 h-4 flex-none'
				// checked={check[index]}
				onChange={(e) => handleCheck(item, e.target.checked)}
			/>
			<div className='flex flex-col grow'>
				<div className='flex gap-5 '>
					<div className='w-20 rounded-md aspect-square bg-gray-100'>
						<img
							src={item.imgURL}
							alt=''
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='flex flex-col justify-between w-full'>
						<p className='font-nromal md:text-base text-sm line-clamp-1'>
							{item.title}
						</p>
						<div className='flex gap-2 font-medium md:text-base text-sm'>
							<p>{item.color},</p>
							<p>{item.size}</p>
						</div>
						<p className='font-semibold text-lg'>${item.price}</p>
					</div>
				</div>
				<div className='flex justify-end gap-5 items-center'>
					<button
						disabled={check[index] === false ? false : true}
						className={
							check[index] === false
								? "text-gray-500"
								: "disabled:text-gray-300"
						}
						onClick={() => deleteProduct(item.id)}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='md:w-6 md:h-6 w-4 h-4'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
							/>
						</svg>
					</button>
					<div className='h-5 w-[2px] bg-gray-300'></div>
					<div className='flex gap-3 items-center'>
						<button
							disabled={item.qty > 1 && check[index] === false ? false : true}
							className={
								item.qty > 1 && check[index] === false
									? "active"
									: "disabled:text-gray-300"
							}
							onClick={() => handleMin(item.id)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='md:w-6 md:h-6 w-4 h-4'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</button>
						<p>{item.qty}</p>
						<button
							disabled={check[index] === false ? false : true}
							className={
								check[index] === false ? "active" : "disabled:text-gray-300"
							}
							onClick={() => handleAdd(item.id)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='md:w-6 md:h-6 w-4 h-4'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCart
