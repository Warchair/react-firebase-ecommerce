import { useState } from "react"
import Home from "./page/home/home"
import DetailProduct from "./page/detailProduct/detailProduct"
import { Routes, Route } from "react-router-dom"
import Protected from "./component/protected/protected"
import Layout from "./layout/layout"
import AddProduct from "./page/addProduct/AddProduct"
import Cart from "./page/cart/cart"

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
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
				</Route>
			</Routes>
		</div>
	)
}

export default App
