import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./css/index.css"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store/store"
import { getDataFromFirebase } from "./redux/productSlice/productSlice"
import { StrictMode } from "react"

store.dispatch(getDataFromFirebase())
ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Provider store={store}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Provider>
		</Router>
	</StrictMode>,
)
