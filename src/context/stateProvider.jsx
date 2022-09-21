import { useReducer, useContext } from "react"
import { createContext } from "react"

export const context = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
	<context.Provider value={useReducer(reducer, initialState)}>
		{children}
	</context.Provider>
)

export const useStateValue = () => useContext(context)
