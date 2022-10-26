import React from "react"
import { Menu } from "@headlessui/react"

const InputSize = ({ title, name, textSize, placeholder, onchange }) => {
	return (
		<Menu
			as='div'
			className='flex flex-col justify-center items-center text-center border border-gray-400 rounded-md px-2 py-2 '>
			<Menu.Button htmlFor='small' className='font-medium w-full h-full'>
				<div>
					<p>{title}</p>
					<p className='font-normal text-gray-500'>{textSize}</p>
				</div>
			</Menu.Button>
			<Menu.Items className='w-full'>
				<input
					type='text'
					name={name}
					className={`focus:outline-none px-4 py-2 w-full`}
					placeholder={placeholder}
					value={textSize}
					onChange={onchange}
				/>
			</Menu.Items>
		</Menu>
	)
}

export default InputSize
