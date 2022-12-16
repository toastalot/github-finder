import Spinner from "../layout/Spinner"
import GithubContext from "../../context/github/GithubContext"
import { GITHUB_URL } from "../../env"
import { useContext, useState } from "react"
import { useEffect } from "react"
import UserItem from "./UserItem"

function UserResults() {
	const { users, isLoading, fetchUsers } = useContext(GithubContext)

	useEffect(() => {
		fetchUsers()
	}, [])

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
