import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./css/index.css"
import { BrowserRouter as Router } from "react-router-dom"
import { StateProvider } from "./context/stateProvider"
import { Reducer } from "./context/reducer"
import { InitialState } from "./context/initialState"

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<StateProvider reducer={Reducer} initialState={InitialState}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</StateProvider>
	</Router>,
)
