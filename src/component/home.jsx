import React from "react"
import man from "../assets/man.png"
import hero from "../assets/Hero-image.png"
import wave from "../assets/wave.png"
import image from "../assets/Image.png"
import { Product } from "../component/product"

const Home = () => {
	return (
		<div>
			<div className='w-full  bg-orange-200 '>
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
					<div className='flex justify-center items-center gap-10 font-poppins mt-5'>
						<a
							href=''
							className='border-b border-b-gray-100 hover:border-b-gray-800 font-medium'>
							Dress
						</a>
						<a
							href=''
							className='border-b border-gray-100 hover:border-b-gray-800 font-medium'>
							Jaket
						</a>
						<a
							href=''
							className='border-b border-gray-100 hover:border-b-gray-800 font-medium'>
							Kerudung
						</a>
						<a
							href=''
							className='border-b border-gray-100 hover:border-b-gray-800 font-medium'>
							Jeans
						</a>
					</div>
					<div className='mt-5 flex flex-row gap-5 overflow-y-auto'>
						<Product />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
