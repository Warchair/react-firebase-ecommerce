import React from "react"
import person1 from "../../assets/people1.png"

const EmptyCart = () => {
	return (
		<div className='w-full h-screen flex justify-center flex-col  items-center gap-3'>
			<img src={person1} className='md:w-[150px] w-[100px]' alt='' />
			<p className='font-medium capitalize'>Tidak ada barang di keranjang</p>
		</div>
	)
}

export default EmptyCart
