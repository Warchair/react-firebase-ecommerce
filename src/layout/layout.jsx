import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Notifications from "../component/notifications/notifications"
import ScrollTop from "../component/scrollTop/scrollTop"
import { useSelector } from "react-redux"
import { getNotice } from "../redux/notificationSlice/notificationSlice"

const Layout = () => {
	const notice = useSelector(getNotice)

	return (
		<div className='font-poppins bg-white  w-full min-h-screen relative overflow-x-hidden'>
			<Navbar />
			<ScrollTop />
			<div className='pt-[72px]'>
				<Notifications
					field={notice.field}
					status={notice.status}
					msg={notice.msg}
				/>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
