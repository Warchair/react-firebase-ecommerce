import React from "react"
import pants from "../assets/short2.jpg"

const Cart = () => {
	return (
		<div className='xl:container xl:mx-auto px-6 py-4'>
			<div className='flex md:flex-row flex-col md:gap-10 gap-3'>
				<div className='grow'>
					<h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Cart</h1>
					<div className='mt-5'>
						<div className='flex gap-3 items-center  '>
							<input
								type='checkbox'
								className='md:w-5 md:h-5 w-4 h-4 flex-none'
							/>
							<p className='font-medium'>Select All</p>
						</div>
						<div className='h-1 bg-gray-200 my-3'></div>
						<div className='flex flex-col gap-5'>
							<div className='flex gap-3 items-center'>
								<input
									type='checkbox'
									className='md:w-5 md:h-5 w-4 h-4 flex-none'
								/>
								<p className='font-bold'>Women's Clothing</p>
							</div>
							<div className='flex gap-3'>
								<input
									type='checkbox'
									className='md:w-5 md:h-5 w-4 h-4 flex-none'
								/>
								<div className='flex gap-5 product-cart'>
									<div className='w-28 rounded-md aspect-square'>
										<img src={pants} alt='' />
									</div>
									<div className='flex flex-col justify-between'>
										<p className='font-nromal md:text-base text-sm '>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Earum cum deleniti officia!
										</p>
										<div className='flex gap-2 font-medium md:text-base text-sm'>
											<p>hitam,</p>
											<p>XL</p>
										</div>
										<p className='font-semibold text-lg'>$43.00</p>
										<div className='flex justify-end gap-5 items-center'>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className='w-6 h-6'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
													/>
												</svg>
											</div>
											<div className='h-5 w-[2px] bg-gray-300'></div>
											<div className='flex gap-3 items-center'>
												<div>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth={1.5}
														stroke='currentColor'
														className='w-6 h-6'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
												</div>
												<p>1</p>
												<div>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth={1.5}
														stroke='currentColor'
														className='w-6 h-6'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='h-[2px] bg-gray-200 my-3'></div>
						</div>
					</div>
				</div>
				<div className='md:w-[300px] w-full md:relative fixed bottom-0 left-0 '>
					<div className='bg-white rounded-md px-4 py-4 w-full drop-shadow-md'>
						<div className='md:block hidden'>
							<h4 className='text-lg font-semibold'>Shopping Summary</h4>
							<div className='flex justify-between items-center py-2 border-b border-b-gray-300 '>
								<p>Total Price (0 Pc)</p>
								<p>0</p>
							</div>
						</div>
						<div className='my-4 flex justify-between items-center font-bold'>
							<p>Total Price</p>
							<p>-</p>
						</div>
						<button className='bg-orange-500 text-white px-4 py-2 w-full rounded-md font-semibold'>
							Buy (0)
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
