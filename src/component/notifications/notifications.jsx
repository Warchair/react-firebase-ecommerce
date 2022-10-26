import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	getNotice,
	setNotice,
} from "../../redux/notificationSlice/notificationSlice"

const Notifications = ({ field, status, msg }) => {
	const notice = useSelector(getNotice)
	const dispatch = useDispatch()
	const handleNotice = () => {
		dispatch(setNotice({ ...notice, field: false }))
	}

	return (
		<div>
			<div
				className={`fixed w-full top-[60px] z-[999] flex justify-center px-6 transition-all duration-200 ease-out ${
					field ? "translate-y-0" : "-translate-y-28"
				}`}>
				<div
					className={`px-2 py-2 text-sm md:w-[500px] w-full  text-white text-left  md:left-[calc(50%_-_250px)] rounded-md flex gap-2 items-center justify-between ${
						status === "danger" ? "bg-red-500" : "bg-blue-500"
					}`}>
					<div className='flex gap-2 items-center'>
						{status === "danger" ? (
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
						<span>{msg}</span>
					</div>
					<div className='cursor-pointer' onClick={() => handleNotice()}>
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
		</div>
	)
}

export default Notifications
