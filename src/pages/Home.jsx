import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div className="flex flex-col items-center text-2xl font-bold">
      <h2 className="mb-8">Search for Github Profiles by Username</h2>
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
