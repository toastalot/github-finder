import { createContext, useReducer } from "react"
import alertReducer from "./alertReducer"

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
	const initialState = null

	const [state, dispatch] = useReducer(alertReducer, initialState)

	const setAlert = (msg, type) => {
		console.log("called setAlert")
		dispatch({
			type: "SET_ALERT",
			payload: { msg, type },
		})
		console.log("dispatched SET_ALERT")

		setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000)
	}

	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContext.Provider>
	)
}

export default AlertContext
