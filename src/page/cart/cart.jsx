import React, { useState, useEffect } from "react"
import EmptyCart from "../../organism/emptyCart/emptyCart"
import ProductCart from "../../organism/productCart/productCart"
import TotalPrice from "../../organism/totalPrice/totalPrice"
import { getCart } from "../../redux/cartSlice/cartSlice"
import { useSelector } from "react-redux"

const Cart = () => {
	const cart = useSelector(getCart)
	console.log(cart)
	return (
		<div className='xl:container xl:mx-auto '>
			<div className='flex md:flex-row flex-col md:gap-10 gap-3'>
				<div className='grow px-4 py-4 '>
					{cart.length === 0 ? (
						<EmptyCart />
					) : (
						<div className='md:min-h-min min-h-screen'>
							<h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>
								Cart
							</h1>
							<div className='mt-5'>
								{/* <div className='flex gap-3 items-center  '>
							<input
								type='checkbox'
								className='md:w-5 md:h-5 w-4 h-4 flex-none'
							/>
							<p className='font-medium'>Select All</p>
						</div> */}
								<div className='h-1 bg-gray-200 my-3'></div>
								<div className='flex flex-col gap-5'>
									{/* <div className='flex gap-3 items-center'>
								<input
									type='checkbox'
									className='md:w-5 md:h-5 w-4 h-4 flex-none'
									onChange={(e) => handleCheckBoxAll(e)}
								/>
								<p className='font-bold'>Women's Clothing</p>
							</div> */}
									{cart.map((item, index) => (
										<ProductCart item={item} index={index} key={index} />
									))}
								</div>
							</div>
						</div>
					)}
				</div>
				<TotalPrice />
			</div>
		</div>
	)
}

export default Cart
