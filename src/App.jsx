import { useState } from "react"
import Cart from "./component/cart"
import DetailProduct from "./component/detailProduct"
import Home from "./component/home"
import Navbar from "./component/navbar"
import { Routes, Route } from "react-router-dom"
import AddProduct from "./component/AddProduct"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='font-poppins bg-white w-full min-h-screen'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/create' element={<AddProduct />} />
				<Route path='/product/:type/:id' element={<DetailProduct />} />
			</Routes>
		</div>
	)
}

export default App
