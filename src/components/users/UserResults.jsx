import Spinner from "components/layout/Spinner"
import { GITHUB_URL } from "env"
import { useState } from "react"
import { useEffect } from "react"
import UserItem from "./UserItem"

function UserResults() {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = async () => {
		const response = await fetch(`${GITHUB_URL}/users`)
		const data = await response.json()
		setUsers(data)
		setIsLoading(false)
	}
	if (!isLoading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid=cols-3 md:grid-cols-2">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		)
	} else {
		return <Spinner />
	}
}

export default UserResults
