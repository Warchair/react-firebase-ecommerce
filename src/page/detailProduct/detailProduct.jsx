import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RadioGroup } from "@headlessui/react"
import { Helmet } from "react-helmet"
import { useDispatch, useSelector } from "react-redux"
import { selectById } from "../../redux/productSlice/productSlice"
import { getUser } from "../../redux/userSlice/userSlice"
import { setNotice } from "../../redux/notificationSlice/notificationSlice"
import { setCart, getCart } from "../../redux/cartSlice/cartSlice"

const DetailProduct = () => {
	const { type, id } = useParams()
	const [sizing, setSizing] = useState("")
	const [color, setColor] = useState("")
	const data = useSelector((state) => selectById(state, id))
	const user = useSelector(getUser)
	const dispatch = useDispatch()
	const cart = useSelector(getCart)

	console.log(cart)
	console.log(data?.size)

	const handleBag = () => {
		if (!user) {
			dispatch(
				setNotice({
					field: true,
					status: "danger",
					msg: "Login Terlebih dahulu",
				}),
			)
		} else if (!sizing || !color) {
			dispatch(
				setNotice({
					field: true,
					status: "danger",
					msg: "Pilih ukuran atau warna terlebih dahulu",
				}),
			)
		} else {
			const product = {
				id: Date.now(),
				title: data.title,
				price: data.price,
				imgURL: data.imgURL,
				size: sizing,
				color: color,
				qty: 1,
			}
			dispatch(setCart(product))
			dispatch(
				setNotice({
					field: true,
					status: "success",
					msg: "Produk berhasil ditambahkan",
				}),
			)
		}
	}

	return (
		<div>
			<Helmet>
				<meta charSet='utf-8' />
				<title>{data?.title}</title>
			</Helmet>
			<div className='font-poppins xl:container xl:mx-auto px-6 py-2 '>
				<div className='flex gap-3 py-4 capitalize'>
					<a href='#' className='font-medium text-gray-500 hover:text-black'>
						Product
					</a>
					<p>/</p>
					<a href='#' className='font-medium text-gray-500 hover:text-black'>
						{type}
					</a>
					<p>/</p>
					<a href='#' className='font-medium text-black'>
						{data?.category}
					</a>
				</div>

				<div className='grid md:grid-cols-2 grid-cols-1 gap-10 py-4 font-Poppins'>
					<div className='w-full aspect-square border rounded-md'>
						<img
							src={data?.imgURL}
							alt=''
							className='w-full h-full object-cover'
						/>
					</div>
					<div>
						<h1 className='lg:text-5xl md:text-4xl text-3xl font-SourceSherif font-medium'>
							{data?.title}
						</h1>
						<p className='text-xl font-semibold mt-2'>${data?.price}</p>
						<p className='text-xs mb-4'>Indi, Local Tax, & Shipping</p>
						<div className='text-sm my-8'>
							<p>{data?.desc}</p>
						</div>

						<div className='flex flex-col gap-2'>
							<div className='flex flex-row justify-between items-center text-sm'>
								<p className=''>
									Select Size : <span className='font-semibold'>{sizing}</span>
								</p>
								<p className='font-semibold underline'>
									<a href='#'>Size Guide</a>
								</p>
							</div>
							<RadioGroup
								className='grid lg:grid-cols-3 grid-cols-2 gap-3'
								value={sizing}
								onChange={setSizing}>
								{/* {data?.size.map((item) => (
									<RadioGroup.Option value='Small'>
										{({ checked }) => (
											<>
												{data?.size?.small && (
													<div
														className={`border cursor-pointer hover:border-gray-600 rounded-md px-4 py-4 ${
															checked ? "border-gray-900" : "border-gray-300"
														}`}>
														<p className='text-lg font-semibold'>
															{data?.size?.small}
														</p>
														<p className='text-sm font-medium'>Small</p>
													</div>
												)}
											</>
										)}
									</RadioGroup.Option>
								))} */}
								<RadioGroup.Option value='Small'>
									{({ checked }) => (
										<>
											{data?.size?.small && (
												<div
													className={`border cursor-pointer hover:border-gray-600 rounded-md px-4 py-4 ${
														checked ? "border-gray-900" : "border-gray-300"
													}`}>
													<p className='text-lg font-semibold'>
														{data?.size?.small}
													</p>
													<p className='text-sm font-medium'>Small</p>
												</div>
											)}
										</>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value='Medium'>
									{({ checked }) => (
										<>
											{data?.size?.medium && (
												<div
													className={`border cursor-pointer hover:border-gray-600 rounded-md px-4 py-4 ${
														checked ? "border-gray-900" : "border-gray-300"
													}`}>
													<p className='text-lg font-semibold'>
														{data?.size?.medium}
													</p>
													<p className='text-sm font-medium'>Medium</p>
												</div>
											)}
										</>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value='Large'>
									{({ checked }) => (
										<>
											{data?.size?.large && (
												<div
													className={`border cursor-pointer hover:border-gray-600 rounded-md px-4 py-4 ${
														checked ? "border-gray-900" : "border-gray-300"
													}`}>
													<p className='text-lg font-semibold'>
														{data?.size?.large}
													</p>
													<p className='text-sm font-medium'>Large</p>
												</div>
											)}
										</>
									)}
								</RadioGroup.Option>
							</RadioGroup>
						</div>
						<div className='flex flex-col gap-2 mt-8'>
							<p className='text-sm'>
								Select Color : <span className='font-semibold'>{color}</span>
							</p>
							<RadioGroup
								className='flex gap-4'
								value={color}
								onChange={setColor}>
								{data?.color?.map((item) => (
									<RadioGroup.Option value={item}>
										<div
											className={`h-6 w-6 rounded-full border-[2px] hover:border-black  bg-indigo-900`}></div>
									</RadioGroup.Option>
								))}
							</RadioGroup>
						</div>
						<div className='flex items-center gap-3 mt-10 text-sm'>
							<div
								className='px-4 cursor-pointer py-3 text-center grow  bg-black text-white rounded-full'
								onClick={() => handleBag()}>
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
									deleniti error earum itaque dolores aspernatur? Voluptas
									dolorum natus minima, quam ut libero, accusamus temporibus
									eligendi in, autem eveniet tempora ipsam placeat ad?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailProduct
