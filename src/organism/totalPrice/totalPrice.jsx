import React from "react"
import { getTotal } from "../../redux/cartSlice/cartSlice"
import { useSelector } from "react-redux"

const TotalPrice = () => {
	const total = useSelector(getTotal)
	return (
		<div className='md:w-[300px] flex-none w-full md:relative md:px-4 md:py-4 sticky bottom-0 left-0 '>
			<div className='bg-white rounded-md px-4 py-4 w-full drop-shadow-md border md:sticky top-[90px]'>
				<div className='md:block hidden'>
					<h4 className='text-lg font-semibold'>Shopping Summary</h4>
					<div className='flex justify-between items-center py-2 border-b border-b-gray-300 '>
						<p>Total Price ({total.quantity} Pc)</p>
						<p>${total.total}</p>
					</div>
				</div>
				<div className='my-4 flex justify-between items-center font-bold'>
					<p>Total Price</p>
					<p>${total.total}</p>
				</div>
				<button className='bg-orange-500 text-white px-4 py-2 w-full rounded-md font-semibold'>
					Buy (${total.total})
				</button>
			</div>
		</div>
	)
}

export default TotalPrice
