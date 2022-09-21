import React, { useState } from "react"
import { Menu, RadioGroup } from "@headlessui/react"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { db, storage } from "../firebase.config"
import { doc, setDoc } from "firebase/firestore"

export const coloring = [
	{
		name: "Coklat",
		color: "bg-amber-800",
	},
	{
		name: "Hitam",
		color: "bg-black",
	},
	{
		name: "Biru",
		color: "bg-blue-800",
	},
	{
		name: "Oren",
		color: "bg-orange-300",
	},
	{
		name: "Krem",
		color: "bg-orange-100",
	},
]

export const categoryWomens = ["Dress", "Jaket", "Kerudung", "Celana Jeans"]

const AddProduct = () => {
	const [category, setCategory] = useState("")
	const [data, setData] = useState({
		imgURL: null,
		title: "",
		desc: "",
		price: "",
		size: {},
		color: [],
	})
	const [previewImage, setPreviewImage] = useState("")

	const [notif, setNotif] = useState({
		field: false,
		isLoading: false,
		status: "danger",
		msg: "",
	})

	const handleImage = (e) => {
		const image = e.target.files[0]
		setPreviewImage(URL.createObjectURL(image))
		setData({ ...data, imgURL: image })
	}

	const deleteImage = () => {
		setPreviewImage("")
		setData({ ...data, imgURL: null })
	}

	const notifications = (field, isLoading, status, msg) => {
		setNotif({ field: field, isLoading: isLoading, status: status, msg: msg })
		setTimeout(() => {
			setNotif({ field: false, isLoading: false, status: "", msg: "" })
		}, 4000)
	}

	const handleColor = (e) => {
		let newArray = [...data.color, e.target.id]
		if (data.color.includes(e.target.id)) {
			newArray = newArray.filter((day) => day !== e.target.id)
		}
		setData({ ...data, color: newArray })
	}

	const handleSave = () => {
		const imageRef = ref(storage, `images/${Date.now()}`)
		const uploadTask = uploadBytesResumable(imageRef, data.imgURL)
		if (
			!data.title ||
			!data.desc ||
			!data.price ||
			!data.size ||
			!data.imgURL ||
			!data.color ||
			!category
		) {
			notifications(
				true,
				true,
				"danger",
				"Wajib isi Semua Kolom beserta Gambar",
			)
		} else {
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					console.log("uploaded progress : " + progress + "%")
				},
				(error) => {
					console.log(error)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						console.log("available at " + downloadURL)
						setDoc(
							doc(db, "women's", `${Date.now()}`),
							{
								title: data.title,
								desc: data.desc,
								price: data.price,
								category: category,
								size: data.size,
								imgURL: downloadURL,
								color: data.color,
							},
							{ merge: true },
						)
						notifications(
							true,
							true,
							"success",
							"Data product berhasil ditambahkan",
						)
					})
				},
			)
		}

		console.log(data)
	}

	return (
		<div className=''>
			<div
				className={`fixed w-full top-[60px] z-[999] flex justify-center px-6 transition-all duration-200 ease-out ${
					notif.field ? "translate-y-0" : "-translate-y-28"
				}`}>
				<div
					className={`px-2 py-2 text-sm md:w-[500px] w-full  text-white text-left  md:left-[calc(50%_-_250px)] rounded-md flex gap-2 items-center justify-between ${
						notif.status === "danger" ? "bg-red-500" : "bg-blue-500"
					}`}>
					<div className='flex gap-2 items-center'>
						{notif.status === "danger" ? (
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
									d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
								/>
							</svg>
						) : (
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
									d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						)}

						<span>{notif.msg}</span>
					</div>
					<div
						className='cursor-pointer'
						onClick={() => setNotif(false, false, notif.status, "")}>
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
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='xl:container xl:mx-auto px-6 py-4 relative'>
				<h2 className='text-2xl font-semibold mb-5'>Create Product</h2>
				<div className='flex md:flex-row flex-col md:gap-10 gap-4'>
					<div className=' w-full md:w-[300px] lg:w-[400px] '>
						<div className='aspect-square bg-gray-100 relative'>
							{!previewImage ? (
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
										onChange={handleImage}
										name='images'
										id='images'
										className='h-0 w-0'
									/>
								</label>
							) : (
								<>
									<img
										src={previewImage}
										className=' object-contain w-full h-full'
										alt=''
									/>
									<button
										className='absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-black flex justify-center items-center'
										onClick={deleteImage}>
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
									</button>
								</>
							)}
						</div>
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
								value={data.title}
								onChange={(e) => setData({ ...data, title: e.target.value })}
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
								value={data.desc}
								onChange={(e) => setData({ ...data, desc: e.target.value })}
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='price' className='font-medium'>
								Price
							</label>
							<input
								type='number'
								name='price'
								className='bg-gray-100 focus:outline-none px-4 py-2'
								placeholder='Price of Product...'
								value={data.price}
								onChange={(e) => setData({ ...data, price: e.target.value })}
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
									className='flex flex-col justify-center items-center text-center border border-gray-400 rounded-md px-2 py-2 '>
									<Menu.Button
										htmlFor='small'
										className='font-medium w-full h-full'>
										<div>
											<p>Small</p>
											<p className='font-normal text-gray-500'>
												{data.size?.small}
											</p>
										</div>
									</Menu.Button>
									<Menu.Items className='w-full'>
										<input
											type='text'
											name='small'
											className={`focus:outline-none px-4 py-2 w-full`}
											placeholder='Sizing of Product...'
											value={data.size?.small}
											onChange={(e) =>
												setData({
													...data,
													size: { ...data.size, small: e.target.value },
												})
											}
										/>
									</Menu.Items>
								</Menu>
								<Menu
									as='div'
									className='flex flex-col justify-center items-center text-center border border-gray-400 rounded-md px-2 py-2 '>
									<Menu.Button
										htmlFor='medium'
										className='font-medium w-full h-full'>
										<div>
											<p>Medium</p>
											<p className='font-normal text-gray-500'>
												{data.size?.medium}
											</p>
										</div>
									</Menu.Button>
									<Menu.Items className='w-full'>
										<input
											type='text'
											name='medium'
											className={`focus:outline-none px-4 py-2 w-full`}
											placeholder='Sizing of Product...'
											value={data.size?.medium}
											onChange={(e) =>
												setData({
													...data,
													size: { ...data.size, medium: e.target.value },
												})
											}
										/>
									</Menu.Items>
								</Menu>
								<Menu
									as='div'
									className='flex flex-col justify-center items-center text-center border border-gray-400 rounded-md px-2 py-2 '>
									<Menu.Button
										htmlFor='large'
										className='font-medium w-full h-full '>
										<div>
											<p>Large</p>
											<p className='font-normal text-gray-500'>
												{data.size?.large}
											</p>
										</div>
									</Menu.Button>

									<Menu.Items className='w-full'>
										<input
											type='text'
											name='large'
											className={`focus:outline-none px-4 py-2 w-full`}
											placeholder='Sizing of Product...'
											value={data.size?.large}
											onChange={(e) =>
												setData({
													...data,
													size: { ...data.size, large: e.target.value },
												})
											}
										/>
									</Menu.Items>
								</Menu>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='title' className='font-medium'>
								<div>
									<p>
										Color Type :
										{data.color.map((item) => (
											<span> {item},</span>
										))}
									</p>
								</div>
							</label>
							<div className='flex gap-3'>
								{coloring.map((item, index) => (
									<label
										key={index}
										htmlFor={item.name}
										className={`h-10 w-10  rounded-full cursor-pointer border-2  hover:border-black ${item.color}`}>
										<input
											name={item.name}
											id={item.name}
											type='checkbox'
											value={item.name}
											className='h-0 w-0'
											onChange={(e) => handleColor(e)}
										/>
									</label>
								))}
							</div>
						</div>
						<div className='flex justify-end'>
							<button
								className='px-6 py-2 bg-black text-white'
								onClick={handleSave}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddProduct
