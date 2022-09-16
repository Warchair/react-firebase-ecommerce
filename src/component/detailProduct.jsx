import React from "react"
import image from "../assets/short2.jpg"
import image2 from "../assets/short.jpg"

const DetailProduct = () => {
	return (
		<div className='font-poppins xl:container xl:mx-auto px-6 py-2 '>
			<div className='flex gap-3 py-4'>
				<a href='#' className='font-medium text-gray-500 hover:text-black'>
					Pants
				</a>
				<p>/</p>
				<a href='#' className='font-medium text-gray-500 hover:text-black'>
					Shorts Pants
				</a>
				<p>/</p>
				<a href='#' className='font-medium text-black'>
					Pants Johns
				</a>
			</div>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-10 py-4 font-Poppins'>
				<div className='w-full aspect-square border rounded-md'>
					<img src={image2} alt='' className='w-full h-full object-cover' />
				</div>
				<div>
					<h1 className='lg:text-5xl md:text-4xl text-3xl font-SourceSherif font-medium'>
						Pants Johns
					</h1>
					<p className='text-xl font-semibold mt-2'>$10.55</p>
					<p className='text-xs mb-4'>Indi, Local Tax, & Shipping</p>
					<div className='text-sm my-8'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							necessitatibus reprehenderit nisi maxime veritatis deserunt hic
							ipsum beatae numquam quaerat alias voluptatem aut earum facere
							qui, culpa facilis provident. Nisi!
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<div className='flex flex-row justify-between items-center text-sm'>
							<p className=''>
								Select Size : <span className='font-semibold'>Medium</span>
							</p>
							<p className='font-semibold underline'>
								<a href='#'>Size Guide</a>
							</p>
						</div>
						<div className='grid md:grid-cols-3 grid-cols-2 gap-3'>
							<div className='border cursor-pointer border-gray-600 rounded-md px-4 py-4'>
								<p className='text-lg font-semibold'>70cmX52cm</p>
								<p className='text-sm font-medium'>Small</p>
							</div>
							<div className='border cursor-pointer border-gray-300 hover:border-gray-600 rounded-md px-4 py-4'>
								<p className='text-lg font-semibold'>70cmX52cm</p>
								<p className='text-sm font-medium'>Medium</p>
							</div>
							<div className='border cursor-pointer border-gray-300 hover:border-gray-600 rounded-md px-4 py-4'>
								<p className='text-lg font-semibold'>70cmX52cm</p>
								<p className='text-sm font-medium'>ExtraLarge</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-2 mt-8'>
						<p className='text-sm'>
							Select Color : <span className='font-semibold'>Navi</span>
						</p>
						<div className='flex gap-4'>
							<div className='h-6 w-6 bg-indigo-900  rounded-full border-[2px] hover:border-black'></div>
							<div className='h-6 w-6 bg-black  rounded-full border-[2px] hover:border-black'></div>
							<div className='h-6 w-6 bg-orange-900  rounded-full border-[2px] hover:border-black'></div>
						</div>
					</div>
					<div className='flex items-center gap-3 mt-10 text-sm'>
						<div className='px-4 cursor-pointer py-3 text-center grow  bg-black text-white rounded-full'>
							Add to Bag
						</div>
						<p>or</p>
						<div className='px-4 cursor-pointer py-3 text-center grow bg-gray-100 text-black rounded-full'>
							Try at Home
						</div>
					</div>

					<div className='mt-10'>
						<div className='flex gap-4 text-sm border-b border-b-gray-300 font-semibold text-gray-600'>
							<div className='cursor-pointer py-1 border-b text-black border-b-gray-900'>
								Description
							</div>
							<div className='cursor-pointer py-1 border-b hover:text-black hover:border-b-gray-900 '>
								Shipping
							</div>
							<div className='cursor-pointer py-1 border-b hover:text-black hover:border-b-gray-900 '>
								Size Guide
							</div>
						</div>
						<div className='text-sm font-normal text-gray-600 mt-4'>
							<p className=''>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptas veritatis sit vitae nam facere quia doloremque quis,
								deleniti error earum itaque dolores aspernatur? Voluptas dolorum
								natus minima, quam ut libero, accusamus temporibus eligendi in,
								autem eveniet tempora ipsam placeat ad?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailProduct
