import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import Spinner from "../components/layout/Spinner"
import { useEffect } from "react"
import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import GithubContext from "../context/github/GithubContext"

function User() {
	const { getUser, user, isLoading } = useContext(GithubContext)

	const params = useParams()

	useEffect(() => {
		getUser(params.login)
	}, [])

	const {
		name,
		type,
		avatar_url,
		bio,
		login,
		html_url,
		followers,
		following,
		public_repos,
		hireable,
	} = user

	if (isLoading) return <Spinner />

	return (
		<>
			<div className="w-full mx-auto lg:w-10/12">
				<div className="mb-4">
					<Link to="/" className="btn btn-ghost">
						Back To Search
					</Link>
				</div>

				<div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
					<div className="custom-card-image mb-6 md:mb-0">
						<div className="rounded-lg shadow-xl card image-full max-w-fit">
							<figure>
								<img src={avatar_url} alt="" />
							</figure>
							<div className="card-body justify-end">
								<h2 className="card-title mb-0">{name}</h2>
								<p className="flex-grow-0">{login}</p>
							</div>
						</div>
					</div>

					<div className="col-span-2">
						<div className="mb-6">
							<h1 className="text-3xl card-title">
								{name}
								<div className="ml-2 mr-1 badge badge-success">
									{type}
								</div>
								{hireable && (
									<div className="mx-1 badge badge-info">
										Hireable
									</div>
								)}
							</h1>
							<p>{bio}</p>
							<div className="mt-4 card-actions">
								<a
									href={html_url}
									target="_blank"
									rel="noreferrer"
									className="btn btn-outline"
								>
									Visit Github Profile
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full py-5 mb-6 stats">
					<div className="grid grid-cols-1 md:grid-cols-3">
						<div className="grid grid-cols-3">
							<div className="text-secondary justify-self-end self-center">
								<FaUsers className="text-3xl md:text-5xl" />
							</div>

							<div className="stat">
								<div className="stat-title pr-5">Followers</div>
								<div className="stat-value pr-5 text-3xl md:text-4xl">
									{followers}
								</div>
							</div>
						</div>

						<div className="grid grid-cols-3">
							<div className="text-secondary justify-self-end self-center">
								<FaUserFriends className="text-3xl md:text-5xl" />
							</div>

							<div className="stat">
								<div className="stat-title pr-5">Following</div>
								<div className="stat-value pr-5 text-3xl md:text-4xl">
									{following}
								</div>
							</div>
						</div>

						<div className="grid grid-cols-3">
							<div className="text-secondary justify-self-end self-center">
								<FaCodepen className="text-3xl md:text-5xl" />
							</div>

							<div className="stat">
								<div className="stat-title pr-5">
									Public Repos
								</div>
								<div className="stat-value pr-5 text-3xl md:text-4xl">
									{public_repos}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default User
