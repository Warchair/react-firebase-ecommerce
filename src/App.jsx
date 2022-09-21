import { useState } from "react"
import Cart from "./component/cart"
import DetailProduct from "./component/detailProduct"
import Home from "./component/home"
import Navbar from "./component/navbar"
import { Routes, Route } from "react-router-dom"
import AddProduct from "./component/AddProduct"
import Protected from "./component/protected"

function App() {
	return (
		<div className='font-poppins bg-white  w-full min-h-screen relative'>
			<Navbar />
			<div className='pt-[72px]'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/cart'
						element={
							<Protected>
								<Cart />
							</Protected>
						}
					/>
					<Route
						path='/create'
						element={
							<Protected>
								<AddProduct />
							</Protected>
						}
					/>
					<Route path='/product/:type/:id' element={<DetailProduct />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
