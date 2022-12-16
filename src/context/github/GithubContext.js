import { GITHUB_URL } from "../../env"
import { createContext, useState } from "react"

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const fetchUsers = async () => {
		const response = await fetch(`${GITHUB_URL}/users`)
		const data = await response.json()
		setUsers(data)
		setIsLoading(false)
	}

	return (
		<GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext