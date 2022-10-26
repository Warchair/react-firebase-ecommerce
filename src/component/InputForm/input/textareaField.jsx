import React from "react"

const TextareaField = ({ label, type, placeholder, value, onchange, name }) => {
	return (
		<div className='flex flex-col'>
			{label && (
				<label htmlFor='title' className='font-medium'>
					{label}
				</label>
			)}
			<textarea
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

export default TextareaField
