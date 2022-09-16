import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='xl:container xl:mx-auto z-[999]'>
			<div className='w-full px-6 py-4 flex lg:flex-row flex-col lg:items-center lg:justify-between '>
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
					className={`lg:pt-0 pt-3  ${isOpen ? "block" : "lg:block hidden"}`}>
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
				<div className={`lg:pt-0 pt-3 ${isOpen ? "block" : "lg:block hidden"}`}>
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
								<p>12</p>
							</div>
						</Link>
						<a className='cursor-pointer px-4 py-1 bg-black text-white'>
							Login
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
