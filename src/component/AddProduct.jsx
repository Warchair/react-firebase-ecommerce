import React, { useState } from "react"
import { Menu, RadioGroup } from "@headlessui/react"

const AddProduct = () => {
	const [category, setCategory] = useState("")

	return (
		<div>
			<div className='xl:container xl:mx-auto px-6 py-4'>
				<h2 className='text-2xl font-semibold mb-5'>Create Product</h2>

				<div className='flex md:flex-row flex-col md:gap-10 gap-2'>
					<div className='aspect-square w-full md:w-[300px] lg:w-[400px] bg-gray-100'>
						<label
							htmlFor='images'
							className='flex flex-col w-full h-full justify-center items-center gap-2 cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-8 h-8 text-gray-500'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
								/>
							</svg>
							<p className='font-semibold text-gray-500'>Upload Image</p>
							<input
								type='file'
								accept='image/*'
								name='images'
								id='images'
								className='h-0 w-0'
							/>
						</label>
					</div>
					<div className='grow flex flex-col gap-3'>
						<div className='flex flex-col'>
							<label htmlFor='title' className='font-medium'>
								Title
							</label>
							<input
								type='text'
								name='title'
								className='bg-gray-100 focus:outline-none px-4 py-2'
								placeholder='Title of Product...'
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='desc' className='font-medium'>
								Description
							</label>
							<textarea
								type='text'
								name='desc'
								className='bg-gray-100 focus:outline-none px-4 py-2'
								placeholder='Desc of Product...'
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='price' className='font-medium'>
								Price
							</label>
							<input
								type='text'
								name='price'
								className='bg-gray-100 focus:outline-none px-4 py-2'
								placeholder='Price of Product...'
							/>
						</div>
						<RadioGroup
							className='flex flex-col'
							value={category}
							onChange={setCategory}>
							<RadioGroup.Label className='font-medium'>
								Category
							</RadioGroup.Label>
							<div className='flex gap-3 mt-2 overflow-x-auto'>
								<RadioGroup.Option value='Dress'>
									{({ checked }) => (
										<p
											className={`p-1 px-4 hover:text-white hover:bg-black border border-black  rounded-full cursor-pointer ${
												checked ? "bg-black text-white" : ""
											}`}>
											Dress
										</p>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value='Jaket'>
									{({ checked }) => (
										<p
											className={`p-1 px-4 hover:text-white hover:bg-black border border-black  rounded-full cursor-pointer ${
												checked ? "bg-black text-white" : ""
											}`}>
											Jaket
										</p>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value='Kerudung'>
									{({ checked }) => (
										<p
											className={`p-1 px-4 hover:text-white hover:bg-black border border-black  rounded-full cursor-pointer ${
												checked ? "bg-black text-white" : ""
											}`}>
											Kerudung
										</p>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value='Celana Jeans'>
									{({ checked }) => (
										<p
											className={`p-1 px-4 hover:text-white hover:bg-black border border-black  rounded-full cursor-pointer flex-none  ${
												checked ? "bg-black text-white" : ""
											}`}>
											Jeans
										</p>
									)}
								</RadioGroup.Option>
							</div>
						</RadioGroup>

						<div>
							<label htmlFor='' className='font-semibold'>
								Size Product
							</label>
							<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-3 gap-3'>
								<Menu
									as='div'
									className='flex flex-col justify-center items-center text-center border border-gray-400 rounded-md px-2 py-2 h-[100px]'>
									<Menu.Button
										htmlFor='small'
										className='font-medium w-full h-full'>
										Small
									</Menu.Button>
									<Menu.Items className='w-full'>
										<input
											type='text'
											name='small'
											className={`focus:outline-none px-4 py-2 w-full`}
											placeholder='Sizing of Product...'
										/>
									</Menu.Items>
								</Menu>
								<Menu
									as='div'
									className='flex flex-col justify-center items-center text-center border border-gray-400 rounded-md px-2 py-2 h-[100px]'>
									<Menu.Button
										htmlFor='medium'
										className='font-medium w-full h-full'>
										Medium
									</Menu.Button>
									<Menu.Items className='w-full'>
										<input
											type='text'
											name='medium'
											className={`focus:outline-none px-4 py-2 w-full`}
											placeholder='Sizing of Product...'
										/>
									</Menu.Items>
								</Menu>
								<Menu
									as='div'
									className='flex flex-col justify-center items-center text-center border border-gray-400 rounded-md px-2 py-2 h-[100px]'>
									<Menu.Button
										htmlFor='large'
										className='font-medium w-full h-full '>
										Large
									</Menu.Button>
									<Menu.Items className='w-full'>
										<input
											type='text'
											name='large'
											className={`focus:outline-none px-4 py-2 w-full`}
											placeholder='Sizing of Product...'
										/>
									</Menu.Items>
								</Menu>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='title' className='font-medium'>
								Color Type :
							</label>
							<div className='flex gap-3'>
								<div className='h-10 w-10 bg-amber-800 rounded-full cursor-pointer border-2  hover:border-black'></div>
								<div className='h-10 w-10 bg-black rounded-full cursor-pointer border-2  hover:border-black'></div>
								<div className='h-10 w-10 bg-blue-800 rounded-full cursor-pointer border-2  hover:border-black'></div>
								<div className='h-10 w-10 bg-orange-300 rounded-full cursor-pointer border-2  hover:border-black'></div>
								<div className='h-10 w-10 bg-orange-100 rounded-full cursor-pointer border-2  hover:border-black'></div>
							</div>
						</div>
						<div className='flex justify-end'>
							<button className='px-6 py-2 bg-black text-white'>Save</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddProduct
