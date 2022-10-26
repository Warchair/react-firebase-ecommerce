import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectAll, selectStatus } from "../../redux/productSlice/productSlice"
import LoadingProduct from "../../component/loading/loadingProduct"
import { Product } from "../../component/product/product"

const Products = ({ filter }) => {
	console.log(filter)
	const load = useSelector(selectStatus)
	const productData = useSelector(selectAll)
	let filtering
	if (filter === "All") {
		filtering = productData
	} else {
		filtering = productData?.filter((product) => product.category === filter)
	}
	console.log(filtering)

	return (
		<div>
			{load === "load" ? (
				<>
					<LoadingProduct />
				</>
			) : (
				<div className='flex gap-5 overflow-x-auto'>
					{filtering.map((product) => (
						<Product data={product} />
					))}
				</div>
			)}
		</div>
	)
}

export default Products
