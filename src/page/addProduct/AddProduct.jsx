import React, { useState, useEffect } from "react"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { db, storage } from "../../firebase.config"
import { doc, setDoc } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import {
	addProduct,
	changeProduct,
} from "../../redux/addProductSlice/addProductSlice"
import { setNotice } from "../../redux/notificationSlice/notificationSlice"
import InputField from "../../component/InputForm/inputField/inputField"
import TextareaField from "../../component/InputForm/input/textareaField"
import InputImage from "../../component/inputImage/inputImage"
import Category from "../../organism/category/category"
import ColorType from "../../organism/colorType/colorType"
import SizeProduct from "../../organism/sizeProduct/sizeProduct"

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
	const product = useSelector(addProduct)
	const [previewImage, setPreviewImage] = useState("")
	const dispatch = useDispatch()
	const [data, setData] = useState({
		imgURL: null,
		title: "",
		desc: "",
		price: "",
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

	useEffect(() => {
		dispatch(
			changeProduct({
				...product,
				imgURL: data.imgURL,
				title: data.title,
				desc: data.desc,
				price: data.price,
			}),
		)
	}, [data])

	console.log(product)

	const handleChange = (e) => {
		const { name, value } = e.target
		console.log(e.target)
		setData((prev) => ({
			...prev,
			[name]: value,
		}))
		console.log(data)
	}

	const handleSave = () => {
		const imageRef = ref(storage, `images/${Date.now()}`)
		const uploadTask = uploadBytesResumable(imageRef, data.imgURL)
		if (
			!product.title ||
			!product.desc ||
			!product.price ||
			!product.size ||
			!product.imgURL ||
			!product.color ||
			!product.category
		) {
			dispatch(
				setNotice({
					field: true,
					status: "danger",
					msg: "harap di isi semua dengan lengkap",
				}),
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
								title: product.title,
								desc: product.desc,
								price: product.price,
								category: product.category,
								size: product.size,
								imgURL: downloadURL,
								color: product.color,
							},
							{ merge: true },
						)
						dispatch(
							setNotice({
								field: true,
								status: "success",
								msg: "Product berhasil ditambahkan",
							}),
						)
					})
				},
			)
		}
	}

	return (
		<div className=''>
			<div className='xl:container xl:mx-auto px-6 py-4 relative'>
				<h2 className='text-2xl font-semibold mb-5'>Create Product</h2>
				<div className='flex md:flex-row flex-col md:gap-10 gap-4'>
					<div className=' w-full md:w-[300px] lg:w-[400px] '>
						<InputImage
							previewImage={previewImage}
							handleImage={handleImage}
							deleteImage={deleteImage}
						/>
					</div>
					<div className='grow flex flex-col gap-3'>
						<InputField
							name='title'
							label='Title'
							type='text'
							placeholder='Title of Product'
							value={data.title}
							onchange={handleChange}
						/>
						<TextareaField
							name='desc'
							label='Description'
							type='text'
							placeholder='Desc of Product'
							value={data.desc}
							onchange={handleChange}
						/>
						<InputField
							name='price'
							label='Price'
							type='number'
							placeholder='Price of Product'
							value={data.price}
							onchange={handleChange}
						/>
						<Category />
						<SizeProduct />
						<ColorType />
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
