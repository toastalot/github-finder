import { GITHUB_URL } from "../../env"
import { createContext, useReducer } from "react"
import githubReducer from "./githubReducer"

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		isLoading: false,
	}

	const [state, dispatch] = useReducer(githubReducer, initialState)

	// Get initial users (testing purposes)
	const fetchUsers = async () => {
		setLoading()

		const response = await fetch(`${GITHUB_URL}/users`)
		const data = await response.json()
		dispatch({
			type: "GET_USERS",
			payload: data,
		})
	}

	const setLoading = () => {
		dispatch({
			type: "SET_LOADING",
		})
	}

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				isLoading: state.isLoading,
				fetchUsers,
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
