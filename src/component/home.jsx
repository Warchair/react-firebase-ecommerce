import { collection, getDocs } from "firebase/firestore"
import React, { useState, useEffect } from "react"
import hero from "../assets/HeroImage.png"
import { Product } from "../component/product"
import { db } from "../firebase.config"
import { categoryWomens } from "./AddProduct"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
// import required modules
import { FreeMode } from "swiper"
import "react-loading-skeleton/dist/skeleton.css"

const Home = () => {
	const [data, setData] = useState([])
	const [filter, setFilter] = useState(data)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true)
			const collectionsWomens = collection(db, "women's")
			const Womens = await getDocs(collectionsWomens)
			const DataWomens = Womens.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}))
			setData(DataWomens)
			setFilter(DataWomens)
			setIsLoading(false)
		}
		return () => {
			getData()
		}
	}, [])

	const FilterProduct = (e) => {
		const filtering = data.filter((item) => item.category === e)
		setFilter(filtering)
	}

	const Loading = () => (
		<>
			<Swiper
				freeMode={true}
				grabCursor={true}
				modules={[FreeMode]}
				slidesPerView={"auto"}
				spaceBetween={30}
				className='mt-5 flex flex-row gap-5 overflow-y-auto py-5 mySwiper'>
				{Array(8)
					.fill(1)
					.map((el, i) => (
						<SwiperSlide className='rounded-md border cursor-pointer w-[200px] flex-none'>
							<div className='aspect-square w-full -mt-1'>
								<Skeleton className='w-full h-full' />
							</div>
							<div className='p-2'>
								<Skeleton className='w-full' />
								<Skeleton className='w-full' />
								<Skeleton className='w-[70px]' />
								<Skeleton className='w-[70px]' />
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</>
	)

	// console.log(data)

	return (
		<div>
			<div className='w-full bg-orange-200 '>
				<div className='xl:container xl:mx-auto px-6 py-4  flex md:flex-row flex-col-reverse'>
					<div className='w-full flex  justify-center items-center'>
						<div className=''>
							<h1 className='lg:text-7xl md:text-6xl text-5xl font-semibold font-SourceSherif'>
								Find the Best Fashion Style for You
							</h1>

							<p className='lg:text-lg text-md '>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
								iste. Id expedita pariatur provident, molestias similique quis
								deleniti, aliquam sapiente assumenda corporis, mollitia
								cupiditate repudiandae delectus eum laboriosam incidunt sunt.
							</p>
							<div className='bg-black md:px-6 px-4  py-4 text-white text-center w-[150px] font-semibold mt-5'>
								SHOP NOW
							</div>
						</div>
					</div>
					<div className='w-full  justify-center items-center my-10 flex '>
						<img src={hero} className='z-10 w-3/4' alt='' />
					</div>
					{/* <img src={wave} alt='' className='absolute -bottom-40' /> */}
				</div>
			</div>
			<div className='xl:container xl:mx-auto px-6 h-screen w-full '>
				<div className='mt-10'>
					<h1 className='text-3xl font-semibold font-SourceSherif text-center'>
						Women's Clothings
					</h1>
					<div className='flex md:justify-center items-center md:gap-6 gap-3 font-poppins mt-5 overflow-x-auto py-3'>
						<span
							className='cursor-pointer  flex-none px-4 py-1 border border-gray-800 rounded-full hover:bg-black hover:text-white  font-medium'
							onClick={() => setFilter(data)}>
							All
						</span>
						{categoryWomens.map((item) => (
							<span
								className='cursor-pointer  flex-none px-4 py-1 border border-gray-800 rounded-full hover:bg-black hover:text-white  font-medium'
								onClick={() => FilterProduct(item)}>
								{item}
							</span>
						))}
					</div>
					<div className='my-5'>
						{isLoading ? <Loading /> : <Product data={filter} />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
