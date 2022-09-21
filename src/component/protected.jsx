import React from "react"
import { useStateValue } from "../context/stateProvider"
import img from "../assets/login.jpg"

const Protected = ({ children }) => {
	const [{ user }, dispatch] = useStateValue()
	return (
		<div className='xl:container xl:mx-auto'>
			{!user ? (
				<div className='w-full flex flex-col justify-center items-center mt-20 '>
					<img src={img} className='md:w-1/2 w-3/4' alt={img} />
					<p className='font-semibold lg:text-xl md:text-lg text-md'>
						Anda Belum Login
					</p>
				</div>
			) : (
				<div>{children}</div>
			)}
		</div>
	)
}

export default Protected
