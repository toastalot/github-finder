import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

function UserSearch() {
	const [text, setText] = useState("")

	const { users } = useContext(GithubContext)

	const handleChange = (event) => setText(event.target.value)

	const handleSubmit = (event) => {
		event.preventDefault()
		if (text === "") {
			alert("please enter something")
		} else {
			// @Todo - search users
		}
	}

	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
			<div>
				<form>
					<div className="form-contol">
						<div className="relative">
							<input
								type="text"
								className="w-full pr-40 bg-gray-200 input input-lg text-black"
								placeholder="Search"
								value={text}
								onChange={handleChange}
							/>
							<button
								type="submit"
								className="absolute top-0 right-0 rounded-l-none width-36 btn btn-lg"
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button className="btn btn-ghost btn-lg">Clear</button>
				</div>
			)}
		</div>
	)
}

export default UserSearch
