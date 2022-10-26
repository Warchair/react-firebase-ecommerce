import React from "react"
import { Link } from "react-router-dom"

import { FreeMode } from "swiper"

export const Product = ({ data }) => {
	return (
		// <Swiper
		// 	freeMode={true}
		// 	grabCursor={true}
		// 	modules={[FreeMode]}
		// 	slidesPerView={"auto"}
		// 	spaceBetween={30}
		// 	className='mt-5 flex flex-row gap-5 overflow-y-auto py-5 mySwiper'>
		// 	{data.map((item, index) => (
		<div className=' bg-white rounded-md drop-shadow-md hover:drop-shadow-lg border cursor-pointer w-[200px] flex-none'>
			<Link to={`/product/women's/${data.id}`} className='w-full'>
				<div className='aspect-square w-full bg-gray-50'>
					<img
						src={data.imgURL}
						alt=''
						className='rounded-t-md object-contain w-full h-full'
					/>
				</div>
				<div className='p-2'>
					<p className='text-md line-clamp-2'>{data.title}</p>
					<p className='text-lg font-semibold'>${data.price}</p>
					<div className='w-[70px] text-center'>
						<p className='p-1 bg-green-500 text-white text-xs'>Best Seller</p>
					</div>
					<p className='flex items-center gap-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='orange'
							className='w-4 h-4'>
							<path
								fillRule='evenodd'
								d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
								clipRule='evenodd'
							/>
						</svg>
						<span>4.5</span>
					</p>
				</div>
			</Link>
		</div>
		// 	))}
		// </Swiper>
	)
}
