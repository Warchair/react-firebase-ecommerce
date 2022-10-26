import {
	GoogleAuthProvider,
	signInWithRedirect,
	onAuthStateChanged,
	signOut,
} from "firebase/auth"
import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { actionType } from "../context/reducer"
// import { useStateValue } from "../context/stateProvider"
import { auth } from "../firebase.config"
import { Menu } from "@headlessui/react"
import { useDispatch, useSelector } from "react-redux"
import { getUser, Login } from "../redux/userSlice/userSlice"
import { setNotice } from "../redux/notificationSlice/notificationSlice"
import { getCart } from "../redux/cartSlice/cartSlice"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(true)
	const dispatch = useDispatch()
	const user = useSelector(getUser)
	const cart = useSelector(getCart)

	const handleLogin = async () => {
		const provider = new GoogleAuthProvider()
		await signInWithRedirect(auth, provider)
	}

	const handleLogout = () => {
		signOut(auth)
		dispatch(
			setNotice({ field: true, status: "danger", msg: "Anda telah Logout" }),
		)
	}

	// console.log(user)

	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
	// 		dispatch({
	// 			type: actionType.SET_USER,
	// 			user: currentUser?.providerData[0],
	// 		})
	// 	})
	// 	return () => {
	// 		unsubscribe
	// 	}
	// }, [])

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			dispatch(Login(currentUser?.providerData[0]))
		})
		return () => {
			unsubscribe
		}
	}, [])

	return (
		<div className='fixed w-full h-[72px] bg-white z-[99] drop-shadow-sm '>
			<div className='xl:container xl:mx-auto '>
				<div className='w-full px-6 py-4 flex lg:flex-row flex-col lg:items-center lg:justify-between bg-white'>
					<div className='flex justify-between items-center '>
						<div>
							<Link to='/'>
								<h2 className='font-SourceSherif font-medium lg:text-4xl md:text-2xl text-xl'>
									C-FASHION
								</h2>
							</Link>
						</div>
						<div
							className='lg:hidden block cursor-pointer'
							onClick={() => setIsOpen(!isOpen)}>
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
									d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
								/>
							</svg>
						</div>
					</div>
					<div
						className={`lg:pt-0 pt-3   ${
							isOpen ? "block" : "lg:block hidden"
						}`}>
						<ul className='flex lg:flex-row flex-col md:gap-5 gap-3 font-Poppins font-medium'>
							<li className='cursor-pointer'>
								<Link to='/'>Home</Link>
							</li>
							<li className='cursor-pointer'>
								<Link>Women's</Link>
							</li>
							<li className='cursor-pointer'>
								<Link>Man's</Link>
							</li>
							<li className='cursor-pointer'>
								<Link>Brands</Link>
							</li>
							<li className='cursor-pointer'>
								<Link></Link> Support
							</li>
						</ul>
					</div>
					<div
						className={`lg:pt-0 pt-3  ${isOpen ? "block" : "lg:block hidden"}`}>
						<div className='flex lg:flex-row flex-col lg:items-center text-center md:gap-5 gap-3 font-Poppins font-medium'>
							<Link to='/cart' className='cursor-pointer relative flex gap-3'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='w-6 h-6 lg:block hidden'>
									<path
										fillRule='evenodd'
										d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z'
										clipRule='evenodd'
									/>
								</svg>
								<p className='lg:hidden block text-left '>Cart</p>
								<div className='lg:absolute -top-3 -right-3 text-xs w-6 h-6 bg-blue-400 rounded-full text-white flex justify-center items-center'>
									<p>{cart.length}</p>
								</div>
							</Link>
							{user ? (
								<>
									<Menu as='div' className='relative'>
										<Menu.Button className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-full px-4 py-1 bg-black text-white '>
											{user?.displayName[0]}
										</Menu.Button>
										<Menu.Items className='absolute bg-white drop-shadow-md text-left right-0 mt-2 z-40 flex flex-col min-w-[200px] rounded-md p-1'>
											<Menu.Item className='px-4 py-3 rounded-md hover:bg-black hover:text-white '>
												{({ active }) => <a href=''>{user?.displayName}</a>}
											</Menu.Item>
											<Menu.Item className='px-4 py-3 rounded-md hover:bg-black hover:text-white '>
												{({ active }) => <Link to='/create'>Create Item</Link>}
											</Menu.Item>
											<div className='h-[1px] w-full bg-gray-300 my-1'></div>
											<Menu.Item className='px-4 py-3 rounded-md hover:bg-black hover:text-white '>
												{({ active }) => (
													<span onClick={handleLogout}>Logout</span>
												)}
											</Menu.Item>
										</Menu.Items>
									</Menu>
								</>
							) : (
								<div
									className='cursor-pointer px-4 py-1 bg-black text-white'
									onClick={handleLogin}>
									Login
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
