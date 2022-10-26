import React from "react"

const InputColor = ({ index, item, onchange }) => {
	return (
		<label
			key={index}
			htmlFor={item?.name}
			className={`h-10 w-10  rounded-full cursor-pointer border-2  hover:border-black ${item?.color}`}>
			<input
				name={item?.name}
				id={item?.name}
				type='checkbox'
				value={item?.name}
				className='h-0 w-0'
				onChange={onchange}
			/>
		</label>
	)
}

export default InputColor
