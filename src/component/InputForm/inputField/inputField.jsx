import React from "react"

const InputField = ({ label, type, placeholder, value, onchange, name }) => {
	return (
		<div className='flex flex-col'>
			{label && (
				<label htmlFor='title' className='font-medium'>
					{label}
				</label>
			)}
			<input
				className='bg-gray-100 focus:outline-none px-4 py-2'
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onchange}
			/>
		</div>
	)
}

export default InputField
