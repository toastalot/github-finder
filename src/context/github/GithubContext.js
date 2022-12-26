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

	// Get search results
	const searchUsers = async (searchQuery) => {
		setLoading()

		const params = new URLSearchParams({
			q: searchQuery,
		})

		const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
		const { items } = await response.json()
		dispatch({
			type: "GET_USERS",
			payload: items,
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
				searchUsers,
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
