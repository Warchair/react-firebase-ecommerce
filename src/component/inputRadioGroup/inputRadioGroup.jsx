import React from "react"
import { Menu, RadioGroup } from "@headlessui/react"

const InputRadioGroup = ({ data }) => {
	return (
		<div>
			<RadioGroup.Option value={data}>
				{({ checked }) => (
					<p
						className={`p-1 px-4 hover:text-white hover:bg-black border border-black  rounded-full cursor-pointer ${
							checked ? "bg-black text-white" : ""
						}`}>
						{data}
					</p>
				)}
			</RadioGroup.Option>
		</div>
	)
}

export default InputRadioGroup
