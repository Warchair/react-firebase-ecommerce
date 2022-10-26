import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
// import required modules

const LoadingProduct = () => {
	return (
		<div className='flex gap-3 overflow-x-auto'>
			{/* // <Swiper */}
			{/* freeMode={true}
            // 	grabCursor={true}
            // 	modules={[FreeMode]}
            // 	slidesPerView={"auto"}
            // 	spaceBetween={30}
            // 	className='mt-5 flex flex-row gap-5 overflow-y-auto py-5 mySwiper'> */}
			{Array(8)
				.fill(1)
				.map((el, i) => (
					<div
						key={i}
						className='rounded-md border cursor-pointer w-[200px] flex-none'>
						<div className='aspect-square w-full -mt-1'>
							<Skeleton className='w-full h-full' />
						</div>
						<div className='p-2'>
							<Skeleton className='w-full' />
							<Skeleton className='w-full' />
							<Skeleton className='w-[70px]' />
							<Skeleton className='w-[70px]' />
						</div>
					</div>
				))}
			{/* // </Swiper> */}
		</div>
	)
}

export default LoadingProduct
