import React from "react"
import { Menu } from "@headlessui/react"
import { useState } from "react"

const InputItem = () => {
	const [value, setValue] = useState("")

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<Menu
			as='div'
			className={`p-1 px-4  border-black border-[1px]  rounded-full cursor-pointer flex gap-3`}>
			<Menu.Items>
				<input
					type='text'
					className='h-full focus:outline-none'
					value={value}
					onChange={handleChange}
				/>
			</Menu.Items>
			<Menu.Button static>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 4.5v15m7.5-7.5h-15'
					/>
				</svg>
			</Menu.Button>
		</Menu>
	)
}

export default InputItem
